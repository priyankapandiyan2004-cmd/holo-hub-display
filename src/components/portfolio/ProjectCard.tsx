import { useRef, type MouseEvent } from "react";
import { Tag } from "./primitives";

export function ProjectCard({
  category,
  title,
  bullets,
  stack,
}: {
  category: string;
  title: string;
  bullets: string[];
  stack: string[];
}) {
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) translateY(-4px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="panel rounded-xl p-6 transition-transform duration-200 will-change-transform hover:border-amber/40"
    >
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-mint">
        {category}
      </span>
      <h3 className="mt-3 font-geo text-xl font-bold leading-snug text-foreground sm:text-2xl">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
    </article>
  );
}
