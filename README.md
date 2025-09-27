# 🌐 My Portfolio

A modern, responsive personal portfolio website built with **React** and **Vite**.  
Showcasing my skills, projects, and experience with a clean UI, smooth animations, and light/dark theme support.

---

## ✨ Features

- **Modern UI:** Clean, professional design with smooth animations
- **Dark/Light Theme:** Toggle with system preference detection
- **Responsive Layout:** Seamless on all devices
- **Dynamic Backgrounds:** Starfield (dark) & gradient/video (light)
- **Project Showcase:** Highlighted projects with links & images
- **Skills Section:** Technical skills with filtering
- **Contact Form:** Functional form with toast notifications
- **Smooth Navigation:** Single-page app with scroll animations

---

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **Routing:** React Router DOM 7
- **UI Components:** Radix UI Toast
- **Icons:** Lucide React
- **Development:** ESLint

---

## 🚀 Getting Started

```sh
git clone https://github.com/your-username/portfolio.git
cd portfolio
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

**Build for production:**
```sh
npm run build
```

---

## 📂 Project Structure

```
src/
├── components/        # UI sections & reusable components
│   ├── AboutSection.jsx
│   ├── ContactSection.jsx
│   ├── ProjectSection.jsx
│   ├── SkillsSection.jsx
│   ├── HomeSection.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ThemeToggle.jsx
├── contexts/          # Theme context
├── hooks/             # Custom React hooks
├── pages/             # Page components (Home, NotFound)
├── lib/               # Utility functions
├── App.jsx            # Root component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

---

## 🎨 Customization

- **Personal Info:** `src/components/HomeSection.jsx`
- **About Section:** `src/components/AboutSection.jsx`
- **Skills:** `src/components/SkillsSection.jsx`
- **Projects:** `src/components/ProjectSection.jsx` (add images to `public/projects/`)
- **Contact:** `src/components/ContactSection.jsx`

Modify styling via Tailwind classes or update theme settings in `tailwind.config.js`.

---

## ☁️ Deployment

**Vercel**
```sh
npm run build
vercel
```

**Netlify**
```sh
npm run build
# Deploy the dist/ folder
```

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 📞 Contact

- **Email:** thihoangduyendo@gmail.com
- **GitHub:** https://github.com/DoThiHoangDuyen

---

⭐ If you like this project, please give it a star!
