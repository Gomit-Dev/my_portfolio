export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      
      <aside>
        <p className="text-lg font-semibold">Gomit Saha</p>
        <p className="text-sm opacity-70">
          Learning, Growing since 2023
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">Connect</h6>

        <div className="grid grid-flow-col gap-6">

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/gomit-saha"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M20.45 20.45h-3.554v-5.569c0-1.329-.027-3.039-1.851-3.039-1.853 0-2.137 1.445-2.137 2.939v5.669H9.355V9h3.414v1.561h.049c.476-.9 1.637-1.851 3.369-1.851 3.602 0 4.266 2.37 4.266 5.455v6.285zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM6.814 20.45H3.859V9h2.955v11.45z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Gomit-Dev"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.292 9.386 7.865 10.905.575.105.785-.25.785-.555 0-.274-.01-1.002-.015-1.966-3.2.695-3.877-1.543-3.877-1.543-.523-1.33-1.278-1.684-1.278-1.684-1.045-.714.08-.699.08-.699 1.155.082 1.763 1.187 1.763 1.187 1.026 1.757 2.693 1.249 3.35.955.104-.743.402-1.249.732-1.536-2.553-.29-5.236-1.276-5.236-5.682 0-1.255.448-2.282 1.183-3.087-.118-.29-.513-1.457.112-3.037 0 0 .965-.309 3.162 1.18a10.96 10.96 0 012.878-.387c.976.005 1.96.132 2.878.387 2.196-1.489 3.16-1.18 3.16-1.18.627 1.58.232 2.747.114 3.037.737.805 1.182 1.832 1.182 3.087 0 4.418-2.687 5.389-5.247 5.673.413.356.78 1.057.78 2.131 0 1.539-.014 2.78-.014 3.158 0 .308.207.665.79.553C20.71 21.382 24 17.077 24 12c0-6.35-5.15-11.5-11.5-11.5z"/>
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:sahgomit20@gmail.com"
            className="hover:scale-110 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 
              2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/>
            </svg>
          </a>

        </div>
      </nav>

    </footer>
  );
}
