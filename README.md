# Shreshth Goel | Professional Portfolio

A premium, interactive, and fully responsive personal portfolio website engineered for **Shreshth Goel**. Built utilizing HTML5, modern modular CSS3, and high-performance vanilla JavaScript, the site presents a state-of-the-art **"Aurora Glass"** glassmorphism aesthetic.

---

## 🌌 Aurora Glass Aesthetic & Animations

The website features highly immersive visual designs and micro-animations:
- **Dynamic Background Flow:** Animated, organic gradient orbs (Teal and Emerald) float and morph smoothly over a deep dark-slate background (`#0A0F1C`).
- **Frosted Glass Cards:** Key content sections (Services, Skills, Timelines, Projects) are housed inside delicate glass panels using `backdrop-filter: blur(16px)` and translucent borders (`rgba(255,255,255,0.08)`).
- **Interactive Cursor Follower:** A modern, inverted-color dot cursor is linked to a secondary follower ring that grows into a borderless glow when hovering over active elements.
- **Dynamic 3D Card Tilt:** Content panels realistically tilt in three dimensions tracking your mouse pointer on hover.
- **Tactile Shimmer FX:** Hardware-accelerated (`transform: translateX`) light sweeps glide across frosted cards and buttons when hovered.
- **Logo Gradient Shimmer:** The logo and headings feature an endless moving linear gradient sweep, accelerating into a faster teal-to-emerald aurora glide when hovered.

---

## 🛠️ Features & Integrated Tech Stack

### Frontend Architecture
- **Structure:** Semantic HTML5, FontAwesome v6 Icons, custom geometric & sans-serif Google Fonts (`Outfit` & `Inter`).
- **Styling:** Custom Vanilla CSS3 using custom properties (Variables), CSS Flexbox/Grid layouts, and hardware-accelerated transitions.
- **Interactions:** Custom letter-by-letter typing animation, scroll-reveal viewport animation (IntersectionObservers), scroll-triggered progress bars, and a dynamic back-to-top floating button.

### Core Services
All services cards feature an interactive **collapsible details panel** (accordion) that expands smoothly inline:
- **Web Development:** Responsive clean-code frontends, SPAs, semantic structure, and performance profiling.
- **UI/UX Designing:** High-fidelity prototyping, custom color models, wireframe structures, and accessibility.
- **App Development:** Cross-platform hybrid app architectures, smooth transition animations, and local storage integration.
- **Backend Solutions:** RESTful API setups, database management models, secure key storages, and server routing.

### Active Integrations
- **Form Delivery:** Direct **EmailJS Browser SDK** integration. Visitor submissions are processed asynchronously from the client side and delivered straight to your personal inbox with instant tactile spinner feedback.
- **Profile Portrait:** Optimised profile container utilizing a vertical portrait `4:5` aspect ratio with top alignment (`object-position: top center`) to prevent top/hair cropping.

---

## 📂 Project Architecture

```text
├── index.html          # Main landing page (Home, Services, Skills, Education, Experience)
├── websites.html       # Dynamic websites/projects showcase with sliding glass description panels
├── contact.html        # Modern contact portal with active form handlers
├── style.css           # Premium stylesheet (Glass properties, animations, and media queries)
├── script.js          # Interactive JavaScript file (3D tilt, magnetic buttons, cursor, EmailJS dispatch)
├── main.jpg            # Active profile picture portrait
├── nevermade.png       # Library project showcase visual asset
├── streamie.png        # Streamie Movies showcase visual asset
├── aidfast.png         # Emergency Web showcase visual asset
├── netlify.toml        # Netlify security headers and root redirects configuration
└── LICENSE             # MIT License
```

---

## 📨 Live Contact Form Configuration (EmailJS)

The contact form is pre-configured and live! Your credentials have been successfully written to lines 240–242 inside `script.js`:

```javascript
const PUBLIC_KEY = "NoIo1vziuhGxCoUQc";
const SERVICE_ID = "service_2rejuyn";
const TEMPLATE_ID = "template_zmuhv1k";
```

### Dashboard Setup
To ensure visitor submissions map successfully to your email templates, verify your template fields inside your EmailJS web dashboard:
- **`{{from_name}}`** (Visitor's full name)
- **`{{from_email}}`** (Visitor's email address)
- **`{{phone}}`** (Visitor's phone number)
- **`{{subject}}`** (Email subject line)
- **`{{message}}`** (Message text content)

---

## 🚀 How to Run & Deploy

### Local Execution
1. Clone or extract the repository files.
2. Open `index.html` inside any web browser.
3. For hot reloading, use VS Code's **Live Server** extension.

### Netlify Deployment
This codebase is fully configured for deployment on Netlify in seconds:
- **Drag & Drop:** Upload the root folder directly to the Netlify app console.
- **Continuous Integration:** Link your GitHub repository directly to Netlify for automatic, zero-config updates on every git-push.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
