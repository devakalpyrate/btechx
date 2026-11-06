<div align="center">

  <img src="frontend/logo.png" alt="BTechX Logo" width="80" height="80" style="border-radius: 16px; margin-bottom: 12px;">

  # BTechX — Academic Resource & Showcase Platform

  **Neo-Brutalist Engineering Suite • Verified Semester Modules • Solved Exam Archives**

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
  [![Python](https://img.shields.io/badge/Python-3.9+-3776AB?logo=python&logoColor=white)](https://python.org)
  [![Vercel Ready](https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel&logoColor=white)](https://vercel.com)
  [![Design](https://img.shields.io/badge/Design-Neo--Brutalist%20%7C%20Bauhaus-8ceb27)](https://github.com/devakalpyrate/btechx)

  <p align="center">
    <a href="#-key-features">Key Features</a> •
    <a href="#-gallery--visual-preview">Visuals</a> •
    <a href="#-project-architecture">Architecture</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-vercel-deployment">Deploy</a> •
    <a href="#-license">License</a>
  </p>

</div>

---

## 🌟 Overview

**BTechX** is a modern, high-performance academic resource hub built for B.Tech engineering students. Designed with a signature **Neo-Brutalist** aesthetic and **Bauhaus-inspired** dispatch interfaces, BTechX transforms messy photocopies and fragmented university drives into structured, verified semester proofs, official syllabus matrices, and high-yield solved question banks.

---

## ✨ Key Features

### 1. 🌿 Dark Pixelated Moonscape Hero with Flashlight Reveal
- **Atmospheric Scenery:** Features a static panoramic botanical pixel art backdrop (`Dark Pixelated Botanical Moonscape.png`).
- **Interactive Torch Cursor:** Integrated HTML5 Canvas engine (`#pixelReveal`) with dynamic flashlight spotlight illuminating green glow pixels around the cursor without shifting the background.
- **Floating Course Cards:** Physics-tilt cards displaying real academic modules across Mathematics, Quantum Physics, Data Structures, and Circuit Theory.

### 2. 🖥️ Architectural Showcase & Presentation Scroll-Lock
- **Sticky Presentation Viewport:** When students scroll down into the showcase, the screen cleanly snaps and locks into focus.
- **Scroll-Jacked Slide Progression:** Mouse wheel scrolling and touch swipes smoothly advance through the 4 core academic tools instead of skipping past:
  - `01 // NOTES` — Verified Differential Calculus & Curvature derivations
  - `02 // CURRICULUM` — University credit weightage & semester matrix
  - `03 // VAULT` — Previous year solved question bank archives
  - `04 // SPOTLIGHT` — Universal instant discovery engine
- **Auto-Advance Release:** Includes synchronized progress bars with animated timers (4.5s); automatically and smoothly scrolls to the next section once all slides have been experienced.

### 3. ✉️ Bauhaus Student Dispatch & Python Backend
- **Single-Viewport Architectural Form:** Strict Bauhaus layout with live character counters, instant field validation, and confirmation states.
- **Python Backend Engine:** Built on standard Python `BaseHTTPRequestHandler` (works locally via `python main.py` or serverlessly on Vercel via `/api/feedback`).
- **Dual Dispatch Pipeline:**
  1. **SMTP SSL Emailer:** Generates branded, dark Bauhaus-styled HTML emails sent directly to the engineering administration inbox via Gmail SMTP.
  2. **Local Archive Backup:** Simultaneously writes all incoming transmissions to persistent JSON logs (`feedbacks.json`).

---

## 🖼️ Gallery & Visual Preview

<div align="center">

### Hero Stage & Interactive Torch Reveal
<img src="frontend/Dark Pixelated Botanical Moonscape.png" alt="Dark Pixelated Botanical Moonscape Backdrop" width="100%" style="border-radius: 8px; border: 2px solid #273024;">

### Twilight Sanctuary Backdrop
<img src="frontend/Mossy Pixel Temple at Twilight.png" alt="Mossy Pixel Temple at Twilight Backdrop" width="100%" style="border-radius: 8px; border: 2px solid #273024; margin-top: 14px;">

</div>

> [!TIP]
> **Have live screenshots of your running browser?**
> You can place your custom browser screenshots in `frontend/images/` and embed them here:
> ```markdown
> ![Showcase Screenshot](frontend/images/screenshot-showcase.png)
> ![Feedback Form Screenshot](frontend/images/screenshot-feedback.png)
> ```

---

## 📁 Project Architecture

The codebase is organized into cleanly isolated folders for frontend static delivery, backend Python business logic, and serverless deployment:

```text
Newdesine/
├── frontend/                              # 🌐 Static Client Assets
│   ├── index.html                         # Primary showcase entrypoint
│   ├── landing.html                       # Alternate showcase view
│   ├── feedback.html                      # Bauhaus student dispatch form
│   ├── landing.css                        # Complete Neo-Brutalist stylesheet
│   ├── feedback.css                       # Bauhaus geometric styling
│   ├── landing.js                         # Canvas reveal & presentation controller
│   ├── logo.png                           # Official BTechX logo
│   ├── images/                            # DLM ecosystem & subject icons
│   ├── Dark Pixelated Botanical Moonscape.png
│   └── Mossy Pixel Temple at Twilight.png
│
├── backend/                               # ⚙️ Python Backend Logic
│   ├── __init__.py
│   ├── feedback.py                        # Email dispatch, verification & file logging
│   └── requirements.txt
│
├── api/                                   # ☁️ Vercel Serverless Function
│   └── feedback.py                        # HTTP endpoint routing to backend.feedback
│
├── main.py                                # 🎯 Unified local development runner
├── vercel.json                            # 🚀 Production cloud routing rules
├── requirements.txt                       # Python dependencies
├── .env.example                           # Sample environment configuration
├── .gitignore                             # Protects credentials and caches
└── LICENSE                                # MIT Open-Source License
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Python 3.9 or higher
- Any modern web browser (Chrome, Edge, Firefox, Brave)

### 1. Setup Environment
Copy the sample environment file to create your local `.env`:
```bash
cp .env.example .env
```

Configure your credentials inside `.env`:
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
RECEIVER_EMAIL=your-destination@domain.com
```

### 2. Run the Unified Platform
From the `Newdesine` directory, run:
```bash
python main.py
```

The unified Python server will spin up on port 8000:
- **Showcase Interface:** [http://localhost:8000](http://localhost:8000)
- **Student Dispatch Form:** [http://localhost:8000/feedback.html](http://localhost:8000/feedback.html)
- **API Status:** [http://localhost:8000/api/feedback](http://localhost:8000/api/feedback)

---

## ☁️ Vercel Deployment

This project is pre-configured for **Vercel** with zero build step requirements:

1. Import your GitHub repository into the **Vercel Dashboard**.
2. Set the **Root Directory** to `Newdesine` (if deploying from a monorepo) or repository root.
3. Add the following **Environment Variables** in Vercel:
   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`
   - `RECEIVER_EMAIL`
4. Click **Deploy**. Vercel will automatically configure `@vercel/python` for `/api/feedback` and serve the static files from `frontend/`.

---

## 📜 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for full details.

---

<div align="center">
  <b>Designed & Engineered by <a href="https://github.com/devakalpyrate">Subham Moharana</a> • Powered by DLM</b>
</div>
