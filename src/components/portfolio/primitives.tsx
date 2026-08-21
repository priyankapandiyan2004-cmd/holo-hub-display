import { useEffect, useRef, useState, type ReactNode } from "react";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-foreground/[0.03] px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-widest text-muted-foreground">
      {children}
    </span>
  );
}

export function Pill({ children, tone = "mint" }: { children: ReactNode; tone?: "mint" | "muted" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-border bg-foreground/[0.03] px-3.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-widest ${
        tone === "mint" ? "text-mint" : "text-muted-foreground"
      }`}
    >
      {children}
    </span>
  );
}

export function Dot() {
  return <span className="anim-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-mint" />;
}

export function SectionHeading({
  eyebrow,
  title,
  index,
}: {
  eyebrow: string;
  title: string;
  index: string;
}) {
  return (
    <Reveal>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 border-b border-border pb-6">
        <div className="min-w-0">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl uppercase leading-none tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h2>
        </div>
        <span
          className="shrink-0 font-display text-5xl leading-none text-transparent sm:text-7xl md:text-8xl"
          style={{ WebkitTextStroke: "1px color-mix(in oklab, var(--amber) 45%, transparent)" }}
        >
          {index}
        </span>
      </div>
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 md:py-28 ${className}`}
    >
      {children}
    </section>
  );
}
