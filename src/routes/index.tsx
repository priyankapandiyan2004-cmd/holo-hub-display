import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Starfield } from "@/components/portfolio/Starfield";
import { BackToTop, Navbar, ScrollProgress } from "@/components/portfolio/Chrome";
import { Hero } from "@/components/portfolio/Hero";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Pill, Reveal, Section, SectionHeading, Tag } from "@/components/portfolio/primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priyankasri S — Full-Stack Developer & UI/UX Designer" },
      {
        name: "description",
        content:
          "Portfolio of Priyankasri S, MCA student and full-stack developer specialising in React, Node.js, UI/UX design and data analytics.",
      },
      { property: "og:title", content: "Priyankasri S — Full-Stack Developer & UI/UX Designer" },
      {
        property: "og:description",
        content:
          "Full-stack development, UI/UX design and data analytics projects by Priyankasri S, MCA student at Holy Cross College.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STATS = [
  { n: "76%", l: "Holy Cross College" },
  { n: "2027", l: "MCA Expected" },
  { n: "2", l: "Major Projects" },
  { n: "2", l: "Internships" },
  { n: "6", l: "Certifications" },
];

const SKILLS = [
  { cat: "Programming", items: ["Python", "C", "C++", "JavaScript", "Java"] },
  { cat: "Web Development", items: ["HTML", "CSS", "React.js", "Node.js", "MongoDB"] },
  {
    cat: "Data Analytics",
    items: ["MS Excel", "Pandas", "NumPy", "SQL", "EDA", "Data Visualization"],
  },
  {
    cat: "Tools",
    items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Power BI", "Tableau"],
  },
  { cat: "UI/UX", items: ["Figma", "Wireframing", "Prototyping", "Usability Principles"] },
  {
    cat: "Soft Skills",
    items: ["Problem Solving", "Communication", "Teamwork", "Critical Thinking"],
  },
];

const EXPERIENCE = [
  {
    title: "ILIFE Technology — Industrial Internship",
    body: "Completed internship in PHP with MySQL, gaining hands-on backend development experience. Underwent Implant Training in Full Stack Development, applying web technologies in real-world projects.",
  },
  {
    title: "Sensor Technology Internship — HCIICT, Holy Cross College",
    body: "Gained practical exposure to sensor technologies and their integration in real-world embedded systems.",
  },
  {
    title: "METS Computer Education — Certification Training",
    body: "Certified in Java with OOPs concepts, and in Frontend Development covering modern web technologies.",
  },
];

const CERTS = [
  "Idea Pitching — Web Scintillators'25 (Holy Cross College)",
  "Data Analytics (Deloitte)",
  "Domestic IT Helpdesk Attendant — PMKVY (SSC/Q0110)",
  "Introduction to MongoDB (MongoDB Certified)",
  "Next-Gen AI Seminar (Holy Cross College, 2025)",
  "Digital Innovation Summit (Holy Cross College, 2025)",
];

const EMAIL = "priyankapandiyan2004@gmail.com";

function Index() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Couldn't copy — " + EMAIL);
    }
  };

  const ghost =
    "rounded-lg border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:border-mint hover:text-mint";

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <ScrollProgress />
      <Navbar />
      <BackToTop />

      <main>
        <Hero />

        <Section id="about">
          <SectionHeading eyebrow="About — Intro" title="Profile" index="01" />
          <Reveal delay={80}>
            <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Motivated MCA student with strong skills in{" "}
              <strong className="font-semibold text-amber">Full Stack Development</strong>,{" "}
              <strong className="font-semibold text-amber">UI/UX Design</strong>, and{" "}
              <strong className="font-semibold text-amber">Data Analytics</strong>. Passionate about
              building scalable web applications and solving real-world problems using modern
              technologies — eager to contribute to innovative teams and grow through hands-on
              experience.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
              {STATS.map((s) => (
                <div key={s.l} className="bg-background/70 p-5">
                  <p className="font-geo text-3xl font-bold text-amber">{s.n}</p>
                  <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Section>

        <Section id="skills">
          <SectionHeading eyebrow="About — Arsenal" title="Technical Skills" index="02" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((g, i) => (
              <Reveal key={g.cat} delay={i * 60}>
                <div className="panel h-full rounded-xl p-6">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-amber">
                    {g.cat}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <Tag key={it}>{it}</Tag>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="education">
          <SectionHeading eyebrow="About — Journey" title="Education" index="03" />
          <Reveal delay={80}>
            <div className="panel mt-10 grid gap-4 rounded-xl p-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-10">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">Exp. 2027</p>
              <div className="min-w-0">
                <h3 className="font-geo text-xl font-bold sm:text-2xl">
                  Master of Computer Applications (MCA)
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">Holy Cross College</p>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-mint">
                  Percentage: 76%
                </p>
              </div>
            </div>
          </Reveal>
        </Section>

        <Section id="projects">
          <SectionHeading eyebrow="Work — Selected" title="Projects" index="04" />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <ProjectCard
                category="Web Application"
                title="On-Road Vehicle Breakdown Assistance System"
                bullets={[
                  "Developed a real-time roadside assistance platform connecting stranded drivers with nearby service providers.",
                  "Improved emergency response efficiency through location-based support.",
                ]}
                stack={["React.js", "Node.js", "MongoDB"]}
              />
            </Reveal>
            <Reveal delay={90}>
              <ProjectCard
                category="Research Paper"
                title="IoT Based Fire Detection and Alert System"
                bullets={[
                  "Developed a smart fire detection and alert system using IoT for real-time monitoring.",
                  "Enabled instant emergency alerts for improved safety through sensor-based automation.",
                ]}
                stack={["IoT", "Sensors", "Embedded Systems"]}
              />
            </Reveal>
          </div>
        </Section>

        <Section id="experience">
          <SectionHeading eyebrow="Work — Hands-On" title="Experience" index="05" />
          <div className="relative mt-12 pl-8 sm:pl-12">
            <span className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-amber/60 via-amber/20 to-transparent sm:left-[11px]" />
            <div className="space-y-10">
              {EXPERIENCE.map((e, i) => (
                <Reveal key={e.title} delay={i * 80}>
                  <div className="relative">
                    <span className="absolute -left-8 top-1.5 grid h-4 w-4 place-items-center rounded-full border border-amber/60 bg-background sm:-left-12">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                    </span>
                    <h3 className="font-geo text-lg font-bold sm:text-xl">{e.title}</h3>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                      {e.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        <Section id="certifications">
          <SectionHeading eyebrow="About — Recognition" title="Certifications" index="06" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CERTS.map((c, i) => (
              <Reveal key={c} delay={i * 50}>
                <div className="panel h-full rounded-xl p-5 text-sm leading-relaxed text-muted-foreground">
                  {c}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-8 rounded-xl border border-amber/40 bg-amber/[0.06] p-5 font-geo text-sm font-bold uppercase tracking-wide text-amber sm:text-base">
              🏆 1st Prize — Idea Pitching, Web Scintillators'25, Holy Cross College
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-6 flex flex-wrap gap-3">
              <Pill tone="muted">Tamil</Pill>
              <Pill tone="muted">English</Pill>
            </div>
          </Reveal>
        </Section>

        <Section id="contact" className="text-center">
          <Reveal>
            <p className="eyebrow">Get in touch</p>
            <h2 className="glow-amber mt-4 font-display text-[clamp(2.2rem,8vw,5rem)] uppercase leading-none tracking-tight text-amber">
              Let&apos;s build something.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Open to full-stack, UI/UX, and data roles — reach out by email, phone, or find the work
              on GitHub.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-lg bg-amber px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Email Me
              </a>
              <button onClick={copyEmail} className={ghost}>
                Copy Email
              </button>
              <a href="tel:+919788808625" className={ghost}>
                +91 97888 08625
              </a>
              <a
                href="https://linkedin.com/in/priyanka-sri-soundrapandiyan"
                target="_blank"
                rel="noreferrer"
                className={ghost}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/priyankapandiyan2004-cmd"
                target="_blank"
                rel="noreferrer"
                className={ghost}
              >
                GitHub
              </a>
            </div>
          </Reveal>
        </Section>
      </main>

      <footer className="border-t border-border py-8 text-center font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
        © 2026 Priyankasri S · built with intent
      </footer>
    </div>
  );
}
