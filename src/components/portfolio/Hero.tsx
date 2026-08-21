import { useEffect, useState } from "react";
import profileAsset from "@/assets/profile.png.asset.json";

const avatar = profileAsset.url;
import { Dot, Pill, Tag } from "./primitives";

const LINES = [
  "I'm Priyankasri — an MCA student building full-stack web applications.",
  "I design clean interfaces in Figma and ship them with React and Node.",
  "I turn messy data into clear dashboards with Pandas, SQL and Power BI.",
  "Currently open to full-stack, UI/UX and data roles.",
];

function Typewriter() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(LINES[0]!);
      return;
    }
    const full = LINES[i]!;
    if (!deleting && text === full) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((p) => (p + 1) % LINES.length);
      return;
    }
    const t = setTimeout(
      () => setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)),
      deleting ? 24 : 42,
    );
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <p className="min-h-12 font-sans text-sm leading-relaxed text-foreground sm:text-base">
      {text}
      <span className="anim-blink ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-amber" />
    </p>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-14 px-5 pb-20 pt-32 sm:px-8 md:grid md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-12"
    >
      <div className="order-2 min-w-0 md:order-1">
        <div className="flex flex-wrap items-center gap-3">
          <Pill>
            <Dot /> Open to work
          </Pill>
          <Pill tone="muted">MCA · Expected 2027</Pill>
        </div>

        <h1 className="glow-amber mt-7 font-display text-[clamp(2.6rem,10vw,6rem)] uppercase leading-[0.92] tracking-tight text-amber">
          Priyankasri S
        </h1>

        <p className="mt-5 font-geo text-base uppercase tracking-[0.14em] text-muted-foreground sm:text-lg">
          Full-Stack Developer <span className="text-amber">·</span> UI/UX Designer{" "}
          <span className="text-amber">·</span> Data Analyst
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {["Python", "Java", "React.js", "Node.js", "MongoDB", "SQL", "Power BI"].map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-amber px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            View Projects →
          </a>
          <a
            href="https://github.com/priyankapandiyan2004-cmd"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:border-mint hover:text-mint"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:border-mint hover:text-mint"
          >
            Contact
          </a>
        </div>

        <div className="mt-14 hidden items-center gap-3 md:flex">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
          </span>
          <span className="anim-scroll-line block h-12 w-px bg-gradient-to-b from-amber to-transparent" />
        </div>
      </div>

      <div className="order-1 flex flex-col items-center gap-6 md:order-2">
        <div className="anim-glitch-in relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px]">
          <span className="anim-spin-slow absolute -inset-4 rounded-full border border-dashed border-amber/40" />
          <div className="relative h-full w-full overflow-hidden rounded-full border border-border">
            <img
              src={avatar}
              alt="Portrait of Priyankasri S"
              width={768}
              height={768}
              className="h-full w-full object-cover"
            />
            <span
              className="pointer-events-none absolute inset-0 mix-blend-overlay"
              style={{
                background: "linear-gradient(140deg, var(--amber), transparent 55%, var(--mint))",
                opacity: 0.45,
              }}
            />
            <span
              className="anim-scanline pointer-events-none absolute inset-x-0 h-1/3 mix-blend-screen"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--mint) 45%, transparent), transparent)",
              }}
            />
          </div>
        </div>

        <Pill>
          <Dot /> Holy Cross College
        </Pill>

        <div className="panel w-full max-w-md rounded-xl p-5">
          <div className="flex items-center gap-2">
            <Dot />
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-mint">
              Priyanka.AI — Speaking
            </span>
          </div>
          <div className="mt-3">
            <Typewriter />
          </div>
        </div>
      </div>
    </section>
  );
}
