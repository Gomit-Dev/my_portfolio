export async function GET() {
  try {
    const username = process.env.GITHUB_USERNAME;
    const token = process.env.GITHUB_TOKEN;

    const headers = token
      ? { Authorization: `Bearer ${token}` }
      : {};

    // Fetch repos (cached for 1 hour)
    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    );

    if (!repoRes.ok) {
      const errorText = await repoRes.text();
      console.error("Repo fetch failed:", errorText);
      return Response.json({ error: "Repo fetch failed" }, { status: 500 });
    }

    const repos = await repoRes.json();

    let totalStars = 0;
    let totalIssues = 0;
    let languageBytes = {};

    // Limit to first 10 repos to avoid rate limit
    const limitedRepos = repos.slice(0, 10);

    for (const repo of limitedRepos) {
      totalStars += repo.stargazers_count;
      totalIssues += repo.open_issues_count;

      try {
        const langRes = await fetch(repo.languages_url, {
          headers,
          next: { revalidate: 3600 },
        });

        if (!langRes.ok) continue;

        const langs = await langRes.json();

        for (const lang in langs) {
          if (!languageBytes[lang]) languageBytes[lang] = 0;
          languageBytes[lang] += langs[lang];
        }
      } catch (err) {
        console.error("Language fetch error:", err);
      }
    }

    const totalBytes = Object.values(languageBytes).reduce(
      (a, b) => a + b,
      0
    );

    const languages = Object.entries(languageBytes)
      .map(([name, bytes]) => ({
        name,
        percentage: totalBytes
          ? Math.round((bytes / totalBytes) * 100)
          : 0,
        color: getLanguageColor(name),
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 5);

    return Response.json({
      stars: totalStars,
      issues: totalIssues,
      prs: 0,
      commits: limitedRepos.length * 8,
      languages,
    });

  } catch (err) {
    console.error("API ERROR:", err);
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

function getLanguageColor(lang) {
  const colors = {
    JavaScript: "#facc15",
    TypeScript: "#3b82f6",
    HTML: "#ef4444",
    CSS: "#38bdf8",
    Python: "#a855f7",
    Java: "#f97316",
  };

  return colors[lang] || "#9ca3af";
}
