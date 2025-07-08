# My Portfolio Website (V-2.3)

A fully responsive, minimalistic, dark-mode-enabled portfolio website built using **HTML**, **CSS**, and **JavaScript**.

It features multiple pages — **Home, Projects, Resume, Skills, About, and Contact** — all styled with consistent layouts, theme logic, and enhancements for accessibility and responsiveness.

---

## Dark Mode

Dark Mode is now implemented site-wide and **persists across pages** using `localStorage`. The toggle is available in the footer, and settings carry over regardless of the page you're on.

---

## New Features in v2.3

-** Highlights section** added on homepage (grid layout)
-** Dark Mode** support added for highlights & side buttons
- Side buttons repositioned for **mobile screens (375×667)** — now fixed just above the footer with spacing
- Enhanced CSS modularity and **consistent rem/em/% usage** for full responsiveness
- New interactive **"Read More" toggle** in Skills page (modular and reusable)
- Expanded dark mode styling for dynamic components
- Improved layout stacking logic and text readability in small screens

---

##Existing Features

- Minimalistic and clean UI/UX
- Responsive layout using Flexbox and media queries
- Dark mode toggle (persistent across all pages)
- Animated project cards and spinning logos (HTML, CSS, Python)
- Modular CSS files for different pages (e.g., `projects.css`, `about.css`)
- Smooth transitions and hover effects
- Centralized, safe JavaScript logic
- Fixed navbar responsiveness and adjusted header elements
- Clean typography and spacing across devices

---

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- `localStorage` for dark mode persistence

---

## Version Comparison

| Feature / Behavior       | v1 (Initial)              | v2.3 (Current)                       |
|--------------------------|---------------------------|--------------------------------------|
| Pages                    | Homepage only             | Home, Projects, Resume, Skills, About, Contact |
| Dark Mode                | Homepage only             | Global + Persistent across pages     |
| Persistence              | ❌ No                      | ✅ Yes via localStorage              |
| Highlights Section       | ❌                        | ✅ Added on homepage (light/dark)   |
| Read-More Toggles        | ❌                        | ✅ For each skill in Skills page    |
| Mobile Responsiveness    | ❌ Limited                | ✅ Enhanced for all screen sizes     |
| Side Buttons (Mobile)    | ❌ Floated awkwardly       | ✅ Fixed above footer, responsive    |
| JavaScript               | Inline toggle only        | Modular, DOM-safe, persistent logic |
| CSS Structure            | Mixed inline / cluttered  | Modular, responsive, scalable        |
| Visuals / Animations     | Static                    | Animated cards & theme transitions   |
| Bugs                     | Layout/flicker issues     | ✅ Fixed across layout, header, theme |
| Accessibility            | Basic                     | Improved contrast, layout & spacing  |

---

## Credits

Big thanks to:

- **ChatGPT (OpenAI)** – for core logic, theme persistence, responsive design refactors, and architectural planning
- **Claude.ai (Anthropic)** – for resolving layout inconsistencies and refining dark mode support

---

This project is still actively evolving — stay tuned for v2.4 with more and please note i've implemented a minimilistic design to the site so expect no flashy animations.
