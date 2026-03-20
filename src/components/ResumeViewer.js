"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function ResumeViewer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <div className="w-full flex justify-center py-20">
        <button
          onClick={() => setOpen(true)}
          className="px-8 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition shadow-[0_0_20px_rgba(250,204,21,0.3)]"
        >
          View Resume
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex flex-col animate-zoomIn"
          onClick={() => setOpen(false)}
        >
          <div
            className="flex justify-between items-center px-6 py-4 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl text-white font-semibold">My Resume</h2>

            <div className="flex items-center gap-4">
              <a
                href="/resume.pdf"
                download
                className="px-4 py-1 bg-yellow-400 text-black rounded-md hover:bg-yellow-300 transition"
              >
                Download
              </a>

              <button
                onClick={() => setOpen(false)}
                className="text-white hover:text-red-400 transition"
              >
                <X size={26} />
              </button>
            </div>
          </div>

          <div
            className="flex-1 w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="/resume.pdf"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
