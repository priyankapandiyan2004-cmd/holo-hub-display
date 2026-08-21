# Stellar Portfolio AI

# Lovable Prompt — Priyankasri S Portfolio

Copy everything below into Lovable's chat to build the site.

---

Build a single-page, dark cinematic portfolio website for a developer named Priyankasri S. Style it like a sci-fi/AI dashboard — dark background with a twinkling starfield, glowing amber and mint accents, bold uppercase display type. Fully responsive (mobile, tablet, desktop) with smooth scroll and scroll-triggered reveal animations.

## Design system

- **Background:** near-black (#07080A), with a subtle animated starfield of small twinkling white dots across the whole page (canvas or CSS particles), plus soft radial glows in amber and mint in the corners.
- **Accent colors:** amber/orange (#FFA24B) as the primary accent (glowing headline text, numbers, buttons), mint green (#34D8A0) as a secondary accent (status pill, links, tags).
- **Text:** off-white (#F3F5F6) for body copy, muted gray (#9099A1) for secondary text.
- **Fonts:** a bold condensed/black display font for big headlines (like Archivo Black), a geometric sans for subheadings and numbers (like Space Grotesk), a clean sans for body text (like Inter), and a monospace font for labels, tags, and eyebrow text (like JetBrains Mono).
- **Cards/panels:** translucent dark panels with a thin 1px border (rgba white 8-9%), subtle rounded corners (8-12px).
- **Motion:** respect `prefers-reduced-motion`; keep animations subtle (glow pulses, slow rotation, scroll reveals — nothing jarring).

## Global layout

- Fixed top navbar: logo/name on the left ("PRIYANKA" in white + "SRI" in amber), nav links on the right (About, Skills, Education, Projects, Experience, Contact) that highlight the active section as you scroll. On mobile, replace nav links with a hamburger icon that opens a full-screen dark menu.
- Thin scroll-progress bar fixed to the very top of the page, filling left-to-right (amber-to-mint gradient) as the user scrolls.
- Floating "back to top" circular button, bottom-right, appears after scrolling down ~600px.

## Hero section (full viewport height)

Two-column layout on desktop (text left, photo right), stacked on mobile (photo on top).

**Left column:**
- Small pill badge: "● Open to work" in mint, pulsing dot
- Second pill: "MCA · Expected 2027"
- Huge display headline: "PRIYANKASRI S" with a soft amber glow/text-shadow
- Subheading: "Full-Stack Developer · UI/UX Designer · Data Analyst" (dot separators in amber)
- Row of tech stack chips: Python, Java, React.js, Node.js, MongoDB, SQL, Power BI
- Two buttons: "View Projects →" (solid amber, dark text) and "GitHub" (outlined ghost button) and "Contact" (outlined ghost button)
- Small "SCROLL" label bottom-left with an animated vertical fading line

**Right column (photo):**
- Circular photo frame (~320px), with:
  - A thin dashed ring around it that slowly rotates 360° over ~40s
  - A subtle scanline sweep animation moving top-to-bottom through the photo every ~5s (like a scanning/AI-analysis effect), blended with screen/overlay mode
  - A soft duotone amber/mint gradient overlay on the image
  - A glitch-in entrance animation when the page loads (brief RGB-shift/blur/offset before settling)
  - Small pill tag below the photo: "Holy Cross College" with a pulsing mint dot
- Below the photo, a chat-bubble styled panel labeled "PRIYANKA.AI — SPEAKING" with a pulsing mint dot, containing a typewriter-animated line of text that cycles through 3-4 first-person introduction sentences about her background (typing forward, pausing, deleting, moving to next line), with a blinking amber cursor block

## Section: Profile / About (numbered "01")

- Section header: small mono eyebrow label "ABOUT — INTRO", big headline "Profile", large outlined number "01" on the right
- Paragraph: "Motivated MCA student with strong skills in Full Stack Development, UI/UX Design, and Data Analytics. Passionate about building scalable web applications and solving real-world problems using modern technologies — eager to contribute to innovative teams and grow through hands-on experience." (bold the three skill areas in amber)
- Row of 5 KPI stat blocks in a bordered grid: "76% — Holy Cross College", "2027 — MCA Expected", "2 — Major Projects", "2 — Internships", "6 — Certifications"

## Section: Technical Skills (numbered "02")

- Eyebrow: "ABOUT — ARSENAL", headline "Technical Skills", number "02"
- Grid of 6 category cards, each with an amber category label and a row of tag chips:
  - Programming: Python, C, C++, JavaScript, Java
  - Web Development: HTML, CSS, React.js, Node.js, MongoDB
  - Data Analytics: MS Excel, Pandas, NumPy, SQL, EDA, Data Visualization
  - Tools: Git, GitHub, VS Code, Jupyter Notebook, Power BI, Tableau
  - UI/UX: Figma, Wireframing, Prototyping, Usability Principles
  - Soft Skills: Problem Solving, Communication, Teamwork, Critical Thinking

## Section: Education (numbered "03")

- Eyebrow: "ABOUT — JOURNEY", headline "Education", number "03"
- One entry: date "EXP. 2027" on the left, "Master of Computer Applications (MCA)" as heading, "Holy Cross College" as subtext, "Percentage: 76%" in mint

## Section: Projects (numbered "04")

- Eyebrow: "WORK — SELECTED", headline "Projects", number "04"
- Two project cards in a responsive grid, each with a mint category tag, project title, 2 bullet points, and a row of tech-stack chips. On hover, apply a subtle 3D tilt effect that follows the cursor (disable on touch devices):
  1. **On-Road Vehicle Breakdown Assistance System** (Web Application) — React.js, Node.js, MongoDB. Bullets: "Developed a real-time roadside assistance platform connecting stranded drivers with nearby service providers." / "Improved emergency response efficiency through location-based support."
  2. **IoT Based Fire Detection and Alert System** (Research Paper) — IoT, Sensors, Embedded Systems. Bullets: "Developed a smart fire detection and alert system using IoT for real-time monitoring." / "Enabled instant emergency alerts for improved safety through sensor-based automation."

## Section: Experience (numbered "05")

- Eyebrow: "WORK — HANDS-ON", headline "Experience", number "05"
- Vertical timeline with a faded amber line down the left side and circular markers, three entries:
  1. **ILIFE Technology — Industrial Internship**: "Completed internship in PHP with MySQL, gaining hands-on backend development experience. Underwent Implant Training in Full Stack Development, applying web technologies in real-world projects."
  2. **Sensor Technology Internship — HCIICT, Holy Cross College**: "Gained practical exposure to sensor technologies and their integration in real-world embedded systems."
  3. **METS Computer Education — Certification Training**: "Certified in Java with OOPs concepts, and in Frontend Development covering modern web technologies."

## Section: Certifications (numbered "06")

- Eyebrow: "ABOUT — RECOGNITION", headline "Certifications", number "06"
- Grid of small cards: "Idea Pitching — Web Scintillators'25 (Holy Cross College)", "Data Analytics (Deloitte)", "Domestic IT Helpdesk Attendant — PMKVY (SSC/Q0110)", "Introduction to MongoDB (MongoDB Certified)", "Next-Gen AI Seminar (Holy Cross College, 2025)", "Digital Innovation Summit (Holy Cross College, 2025)"
- Highlighted achievement badge below: "🏆 1st Prize — Idea Pitching, Web Scintillators'25, Holy Cross College"
- Small pill row: "Tamil", "English" (languages known)

## Section: Contact (centered, full width)

- Small "Get in touch" label, big headline "Let's build something."
- Subtext: "Open to full-stack, UI/UX, and data roles — reach out by email, phone, or find the work on GitHub."
- Buttons row: "Email Me" (solid amber, mailto:priyankapandiyan2004@gmail.com), "Copy Email" (ghost button that copies the email to clipboard and shows a small toast confirmation), "+91 97888 08625" (ghost, tel: link), "LinkedIn" (ghost, links to linkedin.com/in/priyanka-sri-soundrapandiyan), "GitHub" (ghost, links to github.com/priyankapandiyan2004-cmd)
- Simple footer: "© 2026 Priyankasri S · built with intent"

## Interactions to implement

1. Scroll-progress bar at top
2. Active nav-link highlighting based on scroll position
3. Mobile hamburger menu (full-screen overlay)
4. Back-to-top floating button
5. Copy-to-clipboard on the "Copy Email" button, with a toast notification
6. 3D tilt-on-hover for project cards (mouse only)
7. Typewriter effect for the AI intro bubble text
8. Scroll-triggered fade/slide-up reveal for each section as it enters the viewport
9. Rotating dashed ring + scanline sweep + glitch-in entrance on the hero photo
10. Twinkling starfield background across the whole page

## Content notes

- Use the real resume content exactly as given above — don't invent extra projects, skills, or numbers.
- Photo: use a placeholder circular avatar for now (I'll upload my own photo afterward to swap in).
- Keep everything in one cohesive dark theme — no light-mode toggle needed.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://holo-hub-display.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2e5aaf4a-b5a1-48a4-a5b2-995260c3bd9f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
