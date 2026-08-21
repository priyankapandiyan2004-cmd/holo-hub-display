import { useEffect, useState } from "react";
import { ArrowUp, Menu, X } from "lucide-react";

export const SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full transition-[width] duration-150"
        style={{
          width: `${p}%`,
          background: "linear-gradient(90deg, var(--amber), var(--mint))",
        }}
      />
    </div>
  );
}

export function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      let current = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 140) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
          <a href="#top" className="min-w-0 font-display text-lg uppercase tracking-tight">
            <span>Priyanka</span> <span className="text-amber">Sri</span>
          </a>
          <ul className="hidden items-center gap-7 md:flex">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`font-mono text-[0.7rem] uppercase tracking-[0.2em] transition-colors ${
                    active === s.id ? "text-amber" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="shrink-0 rounded-md border border-border p-2 text-foreground md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[70] flex flex-col bg-background/98 backdrop-blur-xl">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-display text-lg uppercase">
              Priyanka <span className="text-amber">Sri</span>
            </span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-md border border-border p-2"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="flex flex-1 flex-col justify-center gap-6 px-8">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl uppercase tracking-tight text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full border border-border bg-background/80 text-amber backdrop-blur transition-all ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
