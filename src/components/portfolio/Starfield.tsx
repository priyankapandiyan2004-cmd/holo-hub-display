import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; a: number; s: number };

export function Starfield() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stars: Star[] = [];
    let raf = 0;
    let dpr = 1;

    const setup = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      const count = Math.round((window.innerWidth * window.innerHeight) / 9000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: (Math.random() * 1.1 + 0.3) * dpr,
        a: Math.random(),
        s: Math.random() * 0.012 + 0.003,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const st of stars) {
        if (!reduced) {
          st.a += st.s;
          if (st.a > 1 || st.a < 0.05) st.s *= -1;
        }
        ctx.globalAlpha = Math.max(0.05, Math.min(1, st.a)) * 0.85;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    setup();
    draw();
    const onResize = () => {
      setup();
      if (reduced) draw();
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <canvas ref={ref} className="h-full w-full" />
      <div
        className="absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--amber), transparent 65%)" }}
      />
      <div
        className="absolute -bottom-52 -right-40 h-[36rem] w-[36rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--mint), transparent 65%)" }}
      />
    </div>
  );
}
