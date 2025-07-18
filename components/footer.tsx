 "use client";
 import React, { useEffect, useRef, useState } from "react";

export default function SpendoFinishSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      {/* Main section */}
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-gradient-to-r from-violet-600 via-gray-950 to-violet-600 py-28 px-6 text-white dark:from-violet-800 dark:to-violet-900 flex flex-col items-center justify-center flex-grow"
      >
        <div className="max-w-5xl text-center">
          <h1
            aria-label="Spendo"
            className="select-none text-[clamp(4rem,15vw,8rem)] font-extrabold tracking-tight leading-[1] drop-shadow-lg"
          >
            <AnimatedScrollText text="Spendo" isVisible={isVisible} />
          </h1>

          <p className="mt-6 max-w-xl mx-auto text-violet-200 text-lg sm:text-xl">
            Empower your ideas into digital excellence — your go-to platform for seamless innovation.
          </p>

          <button
            type="button"
            className="mt-12 rounded-full bg-violet-500 px-10 py-3 font-semibold text-white shadow-lg shadow-violet-600/50 transition hover:bg-violet-600 focus:outline-none focus:ring-4 focus:ring-violet-400"
          >
            Get Started
          </button>
        </div>

        {/* Soft glowing radial background */}
        <div className="pointer-events-none absolute inset-0 flex justify-center -z-10">
          <div className="h-[600px] w-[600px] rounded-full bg-violet-600/20 blur-3xl" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-violet-300/20 bg-background text-violet-600 dark:text-violet-400 px-6 py-8 text-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <span>© {new Date().getFullYear()} Spendo. All rights reserved.</span>
          <nav className="flex gap-6">
            <a href="/terms" className="hover:underline">
              Terms
            </a>
            <a href="/privacy" className="hover:underline">
              Privacy
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </footer>

      {/* Inline styles for animations */}
      <style>{`
        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-up {
          animation-name: fade-up;
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}

function AnimatedScrollText({
  text,
  isVisible,
}: {
  text: string;
  isVisible: boolean;
}) {
  return (
    <span className="inline-flex overflow-hidden whitespace-nowrap">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={`opacity-0 inline-block ${isVisible ? "fade-up" : ""}`}
          style={{ animationDelay: isVisible ? `${i * 0.1}s` : undefined }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
