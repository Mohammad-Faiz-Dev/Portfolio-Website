# 💼 Faiz's Portfolio Website

A fully responsive, dark-mode-enabled portfolio website built using **HTML**, **CSS**, and **JavaScript**.  
It features multiple pages — Home, Projects, Resume, Skills, About, and Contact — all styled with consistent layouts and smart logic.

> 🔧 Live Demo Coming Soon

---

## 🌙 Dark Mode

Dark Mode is now implemented site-wide and **persists across pages** using `localStorage`. Once toggled from the homepage, the setting stays consistent throughout the entire browsing session.

---

## ✨ Features

- Responsive layout using Flexbox and media queries
- Dark mode toggle (persistent across all pages)
- Animated project cards and spinning logos (HTML, CSS, Python)
- Modular CSS files for different pages (e.g., `projects.css`, `about.css`)
- Clean transitions and hover effects
- Centralized, safe JavaScript logic
- **Fixed minor bugs**: improper theme application, layout shifts, flickers
- **Improved spacing** and alignment across all screen sizes
- **Resolved responsiveness issues** for mobile and tablets

---

## 🧰 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- LocalStorage for theme persistence

---

## 📊 Version Comparison

| Feature / Behavior                 | v1 (Initial)                          | v2 (Latest)                                        |
|-----------------------------------|---------------------------------------|----------------------------------------------------|
| Pages                             | Only Homepage                         | Home, Projects, Resume, Skills, About, Contact     |
| Dark Mode                         | Homepage only                         | Global + Persistent across pages                   |
| Persistence (localStorage)        | ❌ No                                 | ✅ Yes                                             |
| JavaScript                        | Inline toggle only                    | DOM-safe, modular, persistent logic                |
| CSS Structure                     | Mixed inline + cluttered              | External, modular, scalable                        |
| Visuals                           | Static                                | Animated project cards and icons                   |
| Bugs                              | Dark mode not applying on some pages  | Fixed with updated logic and selectors             |
| Spacing & Layout                  | Off in small screens                  | Fixed across devices using better flex/grid        |
| Responsiveness                    | Limited mobile support                | Fully responsive design with media queries         |

---

## 🧠 Credits

Big thanks to:

- 🤖 [ChatGPT (OpenAI)](https://openai.com/chatgpt) – for core logic, dark mode persistence, responsive refactors, and overall project shaping.
- 🤖 [Claude.ai (Anthropic)](https://claude.ai) – for debugging layout inconsistencies and correcting critical CSS for dark mode rendering.

---
