# 🎓 CampusPulse Nagpur - Campus Guide & Fresher Survival Portal

A modern, responsive, production-ready web application built with **HTML5, Vanilla CSS3, and JavaScript**. Designed with a stunning **Glassmorphism Dark-Mode** aesthetic (frosted glass blur, glowing neon accents, ambient background lighting, and smooth transitions).

Targeting 4th-year seniors and incoming freshers across Nagpur's top engineering campuses:
- **VNIT Nagpur** (Visvesvaraya National Institute of Technology)
- **RBU** (Ramdeobaba University, formerly RCOEM)
- **YCCE** (Yeshwantrao Chavan College of Engineering)
- **G H Raisoni** (GHRCEM, Digdoh Hills)
- **IIIT Nagpur** (Waranga / Butibori)

---

## 🌟 Key Modules & Features

### 1. Dynamic College Switcher & Hero Portal
- Dropdown selector in the sticky navigation bar to seamlessly toggle between colleges.
- Dynamic color themes tailored for each institution:
  - **VNIT:** Neon Cyan (`#06b6d4`)
  - **RBU:** Amber Gold (`#f59e0b`)
  - **YCCE:** Electric Violet (`#8b5cf6`)
  - **Raisoni:** Emerald Jade (`#10b981`)
  - **IIIT Nagpur:** Cyber Rose (`#ec4899`)
- Live stats strip displaying Highest CTC, Average Package, Placement Rate, and Attendance Policy reality checks.

### 2. Junior Accustomed & Mentor Hub
- **Curated Cafes & Hangout Spots:** Filterable directory of student-friendly hangout spots (Lush House, Corridor Seven, Hingna T-Point, Sadar Kathi Crossing, etc.) with price-for-two, ratings, distance, signature dishes, and senior tips.
- **Faculty Guide & Viva Survival Intel:** Honest reviews, approachability ratings, teaching styles, and practical tips on surviving external lab vivas and assignment deadlines.
- **Senior Patent & Project Guidance:** Step-by-step IPR patent filing guide, IEEE/Scopus publication roadmap, and a Senior Mentors directory with direct consultation request modals.

### 3. Campus Life, Events & Commute
- **Annual Fests:** Full schedules and insider survival hacks for *Aarohi* (VNIT), *Pratishruti* (RBU), *Yash* (YCCE), *Antaragni* (Raisoni), and *Tantrafiesta* (IIITN).
- **Outing & Hostel Life:** Weekend getaway spots (Futala Lake, Ambazari, Zilpi Lake, Khindsi) and hostel/PG survival hacks.
- **Nagpur Metro & Commute Guide:** Interactive breakdown of Orange and Aqua Metro lines, auto-sharing routes, and student pass discount tips.

### 4. Placement & Career Prep (Value Add)
- Recruiter roster (Mass recruiters + Product giants like Persistent Systems, InfoCepts, TCS Digital, Amazon).
- 4-Semester Placement Roadmap from 5th semester foundation to 8th semester PPO conversion.

### 5. Interactive Polls & Browser Persistence
- Live voting on student topics (Best fest, food spots, toughest subjects).
- Dynamic progress bars and percentage calculation.
- Community poll suggestion modal allowing students to publish new questions.
- **Full localStorage persistence:** User votes, saved toolkit bookmarks, and added polls persist automatically.

### 6. Value-Add Toolkit & Universal Search
- **Instant Search Bar:** Filter cards dynamically as you type (`"chai"`, `"LeetCode"`, `"Aarohi"`, `"patent"`, etc.).
- **My Saved Survival Toolkit:** Pin favorite spots and survival tips to your browser toolkit drawer.

---

## 📁 File Structure

```
campus/
├── index.html       # Semantic HTML5 structure with Glassmorphism markup
├── style.css        # Pure Vanilla CSS design system with CSS variables & glass blur
├── data.js          # Authentic dataset covering 5 Nagpur colleges, cafes, & intel
├── app.js           # Dynamic UI controller, filters, voting & localStorage engine
└── README.md        # Comprehensive documentation & deployment guide
```

---

## 🚀 How to Host on GitHub Pages (Step-by-Step)

Because this project is built entirely with **Vanilla HTML, CSS, and JavaScript** without any build step (`npm run build`) or backend server, it can be hosted on **GitHub Pages** for free in under 2 minutes:

### Step 1: Initialize Git & Commit
Open a terminal in your project folder (`campus`) and run:
```bash
git init
git add .
git commit -m "Initial commit: CampusPulse Nagpur Survival Portal"
```

### Step 2: Create a New Repository on GitHub
1. Go to [GitHub.com](https://github.com/) and click **New Repository**.
2. Name your repository (e.g. `nagpur-campus-guide` or `campuspulse`).
3. Leave it **Public** and do NOT check "Add a README" (since you already have one).
4. Click **Create repository**.

### Step 3: Push Your Code
Copy the remote commands shown on GitHub:
```bash
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPO-NAME>.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. In your GitHub repository, click the **Settings** tab (gear icon at the top).
2. On the left sidebar, click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment > Source**, select **Deploy from a branch**.
4. Under **Branch**, select `main` and folder `/ (root)`.
5. Click **Save**.

🎉 Within 30 to 60 seconds, GitHub will generate your live link:
`https://<YOUR-GITHUB-USERNAME>.github.io/<YOUR-REPO-NAME>/`

---

## 💻 Local Testing
To view the site locally on your computer:
- Simply double-click `index.html` to open it in any web browser (Chrome, Edge, Firefox, Safari).
- Or run a lightweight local server if you have Python:
  ```bash
  python -m http.server 8000
  ```
  Then visit `http://localhost:8000`.

---

## 🎨 Tech Stack
- **HTML5:** Semantic, accessible markup with clean inline SVG iconography.
- **CSS3:** Modern Glassmorphism with `backdrop-filter: blur(16px)`, CSS Grid, Flexbox, and responsive media queries.
- **JavaScript (ES6+):** Pure vanilla state management, DOM manipulation, and `localStorage` API.
