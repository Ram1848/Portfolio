# Malepati Ram Lokesh — Premium Cinematic Portfolio

A modern, cinematic developer portfolio website built for **Malepati Ram Lokesh**, Computer Science undergraduate (Class of 2027) at Koneru Lakshmaiah Education Foundation, targeting Software Engineering (SDE) roles at top product companies.

Inspired by modern high-end creative developer websites with a deep dark aesthetic, editorial typography, subtle electric glows, smooth scrolling, and interactive engineering project showcases.

---

## ⚡ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Celebration Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Typography**: Space Grotesk, Syne, Plus Jakarta Sans, JetBrains Mono

---

## 🌟 Sections & Highlights

1. **Minimal Apple-Style Loading Animation (1% → 100%)**:
   - Automatically executes for ~2.1 seconds on page load or browser refresh.
   - Large typography percentage counter, cyan gradient symbol, and thin animated progress vector.
   - Smoothly reveals the homepage immediately upon reaching 100%.
   - In-memory lifecycle: does not replay when browsing sections or toggling themes.

2. **Liquid Glass Sliding Pill Theme Toggle & Header Navigation**:
   - Rounded pill switch with a circular white sliding thumb containing the active Moon/Sun icon and "Dark"/"Light" text.
   - Spring-based smooth physics with full `localStorage` persistence and system preference sync.
   - Header navigation cleanly streamlined: `Home`, `About`, `Skills`, `Projects`, `Experience`, `Education`. (Contact section remains fully accessible at page bottom).

3. **Hero Section**:
   - Oversized editorial typography: `BUILDING DIGITAL EXPERIENCES.`
   - Animated role titles: `Software Engineer`, `Full Stack Developer`, `Java Developer`, `Problem Solver`.
   - Live availability badge: `● Available for Software Engineering Opportunities`.
   - Download Resume with interactive confetti trigger & Explore My Work action.
   - Cinematic developer portrait card with ambient glow and quick metrics.

2. **About Me**:
   - Editorial profile story highlighting passion for Java, scalable full-stack development, and AI.
   - Highlights: `CGPA 9.17 / 10`, `Graduation 2027`, `250+ Coding Problems Solved`, `AI & ML Virtual Internship`.

3. **Technical Skills**:
   - Infinite marquee ribbon with glass pill tags.
   - Interactive category filter tabs (`All`, `Programming`, `Core CS`, `Frontend`, `Database`, `Tools & Platforms`, `Practices`).
   - Strictly curated skillset matching student profile.

4. **Featured Projects (Exactly 3)**:
   - **01. StockSathi AI**: Voice-based inventory system for MSMEs (Telugu & English voice commands, smart voice confirmation, MySQL).
   - **02. Jurniq**: Smart mobility platform (React, REST APIs, Google Maps API, Socket.IO live driver telemetry).
   - **03. AI-Driven Malware Analysis & Threat Hunting Lab**: Cybersecurity platform with ML static feature extraction, IOC detection, and Sigma rules.
   - Interactive UI mockups + Case Study Modals with architecture breakdowns.

5. **Industry Experience**:
   - AI & Machine Learning Virtual Intern at AICTE, Vijayawada (April 2025 – June 2025).

6. **Academic Background**:
   - Koneru Lakshmaiah Education Foundation, Vijayawada — B.Tech Computer Science and Engineering (2023 – 2027), CGPA: `9.17 / 10`.

7. **Certifications**:
   - AWS Certified Cloud Practitioner (2026).
   - Oracle Certified Foundations Associate – OCI Fundamentals (2025).

8. **Coding Profiles & Achievements**:
   - Algorithmic milestone: **250+ coding problems solved across LeetCode & CodeChef**.
   - Profile cards for LeetCode, CodeChef, HackerRank, GitHub, and LinkedIn.

9. **Transmission Protocol / Contact**:
   - Terminal-style direct connection card with verified contact details:
     - Email: `2300032273cseh@gmail.com`
     - Phone: `+91 7569815639`
   - Interactive contact form with validation and instant feedback.
   - One-click copy-to-clipboard buttons and resume download.

10. **Footer**:
    - Giant typographic background watermark: `RAM LOKESH`.
    - Live IST clock synced to Vijayawada time (`Asia/Kolkata`).
    - Smooth back-to-top button.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 📂 Project Architecture

```
Portfolio/
├── public/
│   └── Malepati_Ram_Lokesh_Resume.pdf  # Downloadable official resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                  # Floating glassmorphic navigation
│   │   ├── Hero.jsx                    # Hero section with animated roles & portrait
│   │   ├── About.jsx                   # Editorial narrative & highlight bento stats
│   │   ├── Skills.jsx                  # Interactive categories & infinite marquee
│   │   ├── Projects.jsx                # 3 featured projects with UI mockups
│   │   ├── ProjectModal.jsx            # Detailed case study dialog
│   │   ├── Experience.jsx              # AICTE virtual internship timeline
│   │   ├── Education.jsx               # KLEF B.Tech CSE details & 9.17 CGPA badge
│   │   ├── Certifications.jsx          # AWS & Oracle credentials
│   │   ├── CodingProfiles.jsx          # LeetCode, CodeChef, HackerRank & 250+ solved
│   │   ├── Contact.jsx                 # Terminal protocol card & contact form
│   │   ├── Footer.jsx                  # Typographic watermark & live IST clock
│   │   ├── BackgroundGlow.jsx          # Ambient spotlight & subtle grid lines
│   │   └── CustomCursor.jsx            # Ambient spring cursor glow
│   ├── data/
│   │   └── portfolioData.js            # Centralized content store
│   ├── App.jsx                         # Main container with Lenis smooth scroll
│   ├── index.css                       # Tailwind layers & dark theme utilities
│   └── main.jsx                        # React root entry
├── index.html                          # Meta tags & Google Fonts
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🌐 Deployment to Vercel / GitHub Pages

The build output in `dist/` is statically optimized and zero-configuration ready for deployment:

### Deploy with Vercel:
```bash
npx vercel
```
Or import the GitHub repository directly into [Vercel](https://vercel.com).
