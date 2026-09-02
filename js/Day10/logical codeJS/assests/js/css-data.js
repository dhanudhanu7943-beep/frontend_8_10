/**
 * CSS 25+ Comprehensive Interactive Topics & Quiz Data
 */

window.cssTopics = [
  {
    id: "css-1",
    title: "1. Selectors & Specificity Hierarchy",
    category: "Fundamentals",
    difficulty: "Beginner",
    summary: "Target elements with class, ID, attribute, and modern :is() and :where() selectors.",
    explanation: "Specificity determines which CSS rules apply when multiple rules match. Specificity score: Inline style (1,0,0,0) > ID (0,1,0,0) > Class/Attribute/Pseudo-class (0,0,1,0) > Element (0,0,0,1). Modern pseudo-class `:where()` has 0 specificity, while `:is()` takes the highest specificity of its list.",
    code: `/* Element: (0,0,0,1) */
p { color: gray; }

/* Class: (0,0,1,0) */
.highlight { color: orange; }

/* ID: (0,1,0,0) - Wins over class */
#hero-text { color: #38bdf8; }

/* Modern Zero-specificity selector */
:where(h1, h2, h3) { margin-bottom: 1rem; }`,
    interactiveType: "specificity",
    previewCss: "color: #38bdf8; font-weight: bold; font-size: 14px;",
    tips: "Avoid using `!important` to fix specificity wars; instead, refine your selector hierarchy."
  },
  {
    id: "css-2",
    title: "2. The Box Model & `box-sizing`",
    category: "Layout",
    difficulty: "Beginner",
    summary: "Master content, padding, border, margin, and standard box-sizing: border-box reset.",
    explanation: "Every HTML element is a rectangular box consisting of Content, Padding, Border, and Margin. Setting `box-sizing: border-box` makes width and height include padding and borders, preventing layout overflow.",
    code: `*, *::before, *::after {
  box-sizing: border-box;
}

.card {
  width: 300px;
  padding: 20px;
  border: 4px solid #6366f1;
  margin: 15px;
  background-color: #1e293b;
}`,
    interactiveType: "box-model",
    previewCss: "width: 100%; max-width: 260px; padding: 16px; border: 3px solid #6366f1; margin: 8px auto; background: #1e293b; border-radius: 8px; text-align: center;",
    tips: "Always apply `box-sizing: border-box` universally in your CSS reset."
  },
  {
    id: "css-3",
    title: "3. Flexbox Container Essentials",
    category: "Flexbox",
    difficulty: "Beginner",
    summary: "Align and distribute items along primary and cross axes with flex-direction and justify-content.",
    explanation: "Flexbox creates flexible 1D layouts. Setting `display: flex` activates flex properties: `flex-direction` (row/column), `justify-content` (main-axis alignment), `align-items` (cross-axis alignment), and `gap`.",
    code: `.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}`,
    interactiveType: "flexbox-live",
    previewCss: "display: flex; justify-content: space-around; align-items: center; gap: 8px; padding: 12px; background: #0f172a; border-radius: 8px;",
    tips: "Use `gap` instead of margin on child elements for clean, modern spacing."
  },
  {
    id: "css-4",
    title: "4. Flexbox Item Sizing & Ordering",
    category: "Flexbox",
    difficulty: "Intermediate",
    summary: "Control child growth, shrinking, base size, and alignment with flex-grow, flex-shrink, and order.",
    explanation: "`flex: 1` is shorthand for `flex-grow: 1; flex-shrink: 1; flex-basis: 0%`. It causes flex items to expand and fill available container space equally. `align-self` allows individual item cross-axis overrides.",
    code: `.sidebar {
  flex: 0 0 250px; /* Do not grow, do not shrink, 250px base */
}

.main-content {
  flex: 1 1 auto; /* Fill remaining space dynamically */
}

.highlighted-item {
  align-self: flex-start;
  order: -1; /* Displayed first */
}`,
    interactiveType: "flex-items",
    previewCss: "display: flex; gap: 8px; padding: 8px;",
    tips: "Use `flex-shrink: 0` on icons or avatars inside flex containers to prevent distortion."
  },
  {
    id: "css-5",
    title: "5. CSS Grid Fundamentals",
    category: "Grid",
    difficulty: "Intermediate",
    summary: "Create powerful 2D responsive column and row layouts with repeat, fr, and minmax.",
    explanation: "CSS Grid is a 2-dimensional layout system. `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` creates fully responsive multi-column layouts without needing a single media query.",
    code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}`,
    interactiveType: "grid-live",
    previewCss: "display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; padding: 8px;",
    tips: "Combine `repeat()`, `auto-fit`, and `minmax()` for zero-media-query responsive grids."
  },
  {
    id: "css-6",
    title: "6. CSS Grid Areas & Layout Templates",
    category: "Grid",
    difficulty: "Advanced",
    summary: "Design entire page layouts visually using grid-template-areas and grid-area names.",
    explanation: "`grid-template-areas` allows you to define ASCII-like visual blueprints for header, nav, main, sidebar, and footer sections.",
    code: `.app-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "nav    main"
    "footer footer";
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
}

header { grid-area: header; }
nav    { grid-area: nav; }
main   { grid-area: main; }
footer { grid-area: footer; }`,
    interactiveType: "grid-areas",
    previewCss: "display: grid; grid-template-areas: 'h h' 's m' 'f f'; gap: 4px; height: 110px;",
    tips: "Use a period `.` in `grid-template-areas` to represent an empty grid cell."
  },
  {
    id: "css-7",
    title: "7. CSS Positioning: Relative, Absolute, Fixed & Sticky",
    category: "Layout",
    difficulty: "Intermediate",
    summary: "Pin elements relative to parents, the viewport, or normal scroll flow.",
    explanation: "- `relative`: Positioned relative to normal position, establishes anchor for absolute children.\n- `absolute`: Removed from flow, positioned relative to nearest positioned ancestor.\n- `fixed`: Positioned relative to viewport, stays on screen during scroll.\n- `sticky`: Toggles between relative and fixed depending on scroll offset.",
    code: `.parent {
  position: relative;
  height: 200px;
}

.floating-badge {
  position: absolute;
  top: 10px;
  right: 10px;
}

.sticky-header {
  position: sticky;
  top: 0;
  z-index: 50;
}`,
    interactiveType: "positioning",
    previewCss: "position: relative; height: 90px; background: #0f172a; border-radius: 8px; padding: 8px;",
    tips: "`sticky` positioning requires an explicit offset property (e.g. `top: 0`) and will not work if any parent has `overflow: hidden`."
  },
  {
    id: "css-8",
    title: "8. CSS Variables & Dynamic Theming",
    category: "Modern CSS",
    difficulty: "Intermediate",
    summary: "Declare custom properties (--var) with inheritance and runtime JavaScript manipulation.",
    explanation: "CSS Custom Properties (`--my-var: #6366f1`) cascade and can be referenced via `var(--my-var)`. They can be overridden dynamically at runtime or switched via dark mode classes.",
    code: `:root {
  --primary-hue: 240;
  --brand-color: hsl(var(--primary-hue), 80%, 60%);
  --surface: #0f172a;
  --text: #f8fafc;
}

.theme-card {
  background-color: var(--surface);
  color: var(--text);
  border: 2px solid var(--brand-color);
}`,
    interactiveType: "variables",
    previewCss: "background: #0f172a; border: 2px solid #6366f1; color: #f8fafc; padding: 12px; border-radius: 8px; text-align: center;",
    tips: "You can update CSS variables in JavaScript instantly with `element.style.setProperty('--brand-color', '#10b981')`."
  },
  {
    id: "css-9",
    title: "9. Transitions & Cubic-Bezier Timing",
    category: "Animation",
    difficulty: "Beginner",
    summary: "Smoothly interpolate state changes with transition duration, delay, and custom bezier curves.",
    explanation: "Transitions allow property changes to occur smoothly over a specified duration rather than instantly. Always specify explicit properties instead of `transition: all` for optimal performance.",
    code: `.interactive-btn {
  background-color: #6366f1;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
              background-color 0.2s ease;
}

.interactive-btn:hover {
  background-color: #4f46e5;
  transform: translateY(-4px) scale(1.03);
}`,
    interactiveType: "transitions",
    previewCss: "display: inline-block; padding: 10px 18px; background: #6366f1; color: #fff; border-radius: 8px; font-weight: bold; cursor: pointer; transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);",
    tips: "Animate only `transform` and `opacity` properties whenever possible to leverage GPU hardware acceleration."
  },
  {
    id: "css-10",
    title: "10. Keyframe Animations",
    category: "Animation",
    difficulty: "Intermediate",
    summary: "Craft multi-step looped or single-run animations with @keyframes and animation properties.",
    explanation: "The `@keyframes` rule specifies the animation sequence with percentage stops (`0%`, `50%`, `100%`) or `from` and `to`. Key properties include `animation-iteration-count: infinite`, `animation-direction: alternate`, and `animation-fill-mode: forwards`.",
    code: `@keyframes pulseGlow {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(99, 102, 241, 0.4);
  }
  50% {
    transform: scale(1.08);
    box-shadow: 0 0 25px rgba(99, 102, 241, 0.8);
  }
}

.glow-badge {
  animation: pulseGlow 2.5s infinite ease-in-out;
}`,
    interactiveType: "keyframes",
    previewCss: "width: 70px; height: 70px; margin: 10px auto; background: #6366f1; border-radius: 50%; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:bold; animation: glow 2s infinite ease-in-out;",
    tips: "Use `animation-play-state: paused` on `:hover` to allow users to pause spinning or moving elements."
  },
  {
    id: "css-11",
    title: "11. 2D & 3D CSS Transforms",
    category: "Animation",
    difficulty: "Intermediate",
    summary: "Translate, rotate, scale, skew, and apply 3D perspective depth.",
    explanation: "Transforms modify the coordinate space of CSS visual formatting without causing document reflow. Using `perspective: 1000px` and `rotateY()` creates realistic 3D flipping card effects.",
    code: `.card-3d {
  transform: perspective(600px) rotateY(25deg) rotateX(10deg);
  transition: transform 0.4s ease;
}

.card-3d:hover {
  transform: perspective(600px) rotateY(0deg) rotateX(0deg) scale(1.05);
}`,
    interactiveType: "transforms",
    previewCss: "width: 140px; height: 75px; margin: 10px auto; background: linear-gradient(135deg, #6366f1, #a855f7); border-radius: 8px; transform: perspective(500px) rotateY(20deg); display:flex; align-items:center; justify-content:center; color:#fff; font-size:12px; font-weight:bold;",
    tips: "Add `backface-visibility: hidden` when building double-sided 3D flip cards."
  },
  {
    id: "css-12",
    title: "12. Glassmorphism & `backdrop-filter`",
    category: "Modern CSS",
    difficulty: "Intermediate",
    summary: "Create frosted glass UI cards with blur, saturation, and subtle border highlights.",
    explanation: "Glassmorphism uses `backdrop-filter: blur(12px)`, semi-transparent background colors (`rgba(255, 255, 255, 0.1)` or `rgba(15, 23, 42, 0.7)`), and subtle 1px border highlights to achieve modern layered UI depth.",
    code: `.glass-card {
  background: rgba(30, 41, 59, 0.65);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
}`,
    interactiveType: "glassmorphism",
    previewCss: "background: rgba(30, 41, 59, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.15); padding: 14px; border-radius: 12px; text-align:center;",
    tips: "Always include the `-webkit-backdrop-filter` prefix for complete Safari compatibility."
  },
  {
    id: "css-13",
    title: "13. Modern Colors: HSL, OKLCH & Gradients",
    category: "Styling",
    difficulty: "Intermediate",
    summary: "Work with modern perceptually uniform color spaces and rich multi-stop gradients.",
    explanation: "Modern CSS introduces `oklch()` for uniform perceived lightness across hues, alongside mesh gradients with `linear-gradient` and `conic-gradient`.",
    code: `.modern-gradient {
  background: linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #f59e0b 100%);
}

.perceptual-color {
  color: oklch(75% 0.18 200);
}

.conic-loader {
  background: conic-gradient(from 0deg, #6366f1, #06b6d4, #6366f1);
}`,
    interactiveType: "gradients",
    previewCss: "height: 60px; border-radius: 8px; background: linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #f59e0b 100%); display:flex; align-items:center; justify-content:center; color:#fff; font-weight:bold;",
    tips: "Use CSS `color-mix(in srgb, #6366f1 70%, transparent)` to create dynamic opacity tints with any variable."
  },
  {
    id: "css-14",
    title: "14. Media Queries & Modern Responsive Breakpoints",
    category: "Responsive",
    difficulty: "Beginner",
    summary: "Adapt layouts to mobile, tablet, and desktop viewports, dark mode, and reduced motion.",
    explanation: "Media queries adjust styles based on screen width, orientation, and user system preferences like `@media (prefers-color-scheme: dark)` and `@media (prefers-reduced-motion: reduce)`.",
    code: `/* Range syntax (Modern CSS) */
@media (width <= 768px) {
  .nav-links { display: none; }
  .mobile-drawer { display: block; }
}

/* Accessibility: Respect motion sensitivity */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`,
    interactiveType: "media-queries",
    previewCss: "background: #1e293b; padding: 10px; border-radius: 8px; border-left: 4px solid #38bdf8; font-size:12px; color:#cbd5e1;",
    tips: "Modern browsers support range syntax `@media (width <= 600px)` which is much cleaner than `max-width: 600px`."
  },
  {
    id: "css-15",
    title: "15. Container Queries (`@container`)",
    category: "Responsive",
    difficulty: "Advanced",
    summary: "Style components based on the size of their parent container rather than whole screen.",
    explanation: "Container queries let modular components adapt dynamically regardless of whether they are placed in a narrow sidebar or a wide hero section.",
    code: `.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card-inner {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
}`,
    interactiveType: "container-queries",
    previewCss: "border: 1px dashed #6366f1; padding: 10px; border-radius: 8px; background: #0f172a;",
    tips: "Use `container-type: inline-size` on the parent to allow children to query width without vertical loop locks."
  },
  {
    id: "css-16",
    title: "16. The Parent Selector: `:has()`",
    category: "Modern CSS",
    difficulty: "Advanced",
    summary: "Style parent elements or preceding siblings conditionally based on their descendants.",
    explanation: "The `:has()` relational pseudo-class acts as a CSS parent selector. For example, `form:has(input:invalid)` can style the whole form card red when an error exists.",
    code: `/* Style card header if card contains an image */
.card:has(img) {
  grid-template-rows: 200px 1fr;
}

/* Style form card if any input inside is invalid */
.form-group:has(input:invalid) {
  border-color: #ef4444;
  background-color: rgba(239, 68, 68, 0.05);
}`,
    interactiveType: "has-selector",
    previewCss: "border: 2px solid #10b981; padding: 10px; border-radius: 8px; background: #0f172a; font-size:12px; color:#6ee7b7;",
    tips: "`:has()` is now fully Baseline widely supported across all modern browsers!"
  },
  {
    id: "css-17",
    title: "17. Pseudo-elements: `::before`, `::after` & `::marker`",
    category: "Styling",
    difficulty: "Beginner",
    summary: "Inject decorative accents, badge dots, tooltips, and custom bullet icons without extra HTML.",
    explanation: "`::before` and `::after` create pseudo DOM elements. They require the `content: \"\"` property to render and are ideal for background glows, icons, and underline animations.",
    code: `.glow-button {
  position: relative;
  z-index: 1;
}

.glow-button::after {
  content: "";
  position: absolute;
  inset: -2px;
  background: linear-gradient(90deg, #6366f1, #06b6d4);
  border-radius: inherit;
  z-index: -1;
  filter: blur(8px);
  opacity: 0.7;
}`,
    interactiveType: "pseudo-elements",
    previewCss: "display:inline-block; padding:8px 16px; background:#1e293b; border:1px solid #6366f1; border-radius:6px; color:#fff; font-size:12px; font-weight:bold;",
    tips: "Use `::marker` to customize list bullet colors and shapes directly in CSS."
  },
  {
    id: "css-18",
    title: "18. Box Shadows & Multi-layer Glow Depth",
    category: "Styling",
    difficulty: "Intermediate",
    summary: "Create realistic soft elevation and neon glowing effects with comma-separated shadows.",
    explanation: "`box-shadow: x y blur spread color`. Stacking multiple layered shadows produces ultra-smooth realistic drop shadows that mimic natural light physics.",
    code: `.smooth-elevation {
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.15),
    0 24px 48px rgba(99, 102, 241, 0.2);
}`,
    interactiveType: "shadows",
    previewCss: "padding: 14px; background: #1e293b; border-radius: 10px; box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.4); text-align: center; color: #fff; font-weight:bold; font-size:12px;",
    tips: "Use colored shadows that match your background or brand color instead of harsh pure black."
  },
  {
    id: "css-19",
    title: "19. Clipping Paths (`clip-path`) & Shapes",
    category: "Graphics",
    difficulty: "Advanced",
    summary: "Cut elements into geometric polygons, circles, diagonal banners, and speech bubbles.",
    explanation: "`clip-path` masks an element's visible area. You can clip elements into circles, ellipses, or custom polygons (`clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%)`).",
    code: `.slanted-hero {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  background: linear-gradient(135deg, #1e1b4b, #312e81);
}

.avatar-hexagon {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}`,
    interactiveType: "clippath",
    previewCss: "width: 80px; height: 80px; margin: 6px auto; background: linear-gradient(135deg, #06b6d4, #6366f1); clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);",
    tips: "You can animate `clip-path` with CSS transitions as long as both states share the exact same number of polygon vertices."
  },
  {
    id: "css-20",
    title: "20. Scroll Snap & Smooth Scrolling",
    category: "Scroll",
    difficulty: "Intermediate",
    summary: "Build touch-friendly carousels and full-page presentations natively with scroll-snap.",
    explanation: "By combining `scroll-snap-type: x mandatory` on the scroll container with `scroll-snap-align: center` on children, browsers automatically lock scrolling onto item boundaries.",
    code: `.carousel-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: 16px;
}

.carousel-slide {
  flex: 0 0 80%;
  scroll-snap-align: center;
}`,
    interactiveType: "scrollsnap",
    previewCss: "display: flex; gap: 8px; overflow-x: auto; padding: 6px; background:#0f172a; border-radius:8px;",
    tips: "Set `html { scroll-behavior: smooth; }` for seamless in-page anchor jump scrolling."
  },
  {
    id: "css-21",
    title: "21. Fluid Typography with `clamp()`",
    category: "Typography",
    difficulty: "Intermediate",
    summary: "Scale font sizes smoothly across mobile and desktop without hundreds of media queries.",
    explanation: "`clamp(min, preferred, max)` restricts a value between minimum and maximum bounds while scaling dynamically with viewport width (`vw`).",
    code: `/* Minimum 1.5rem on mobile, scales with 4vw, maximum 3.5rem on desktop */
h1 {
  font-size: clamp(1.5rem, 4vw + 1rem, 3.5rem);
  line-height: 1.2;
}`,
    interactiveType: "clamp-calc",
    previewCss: "font-size: clamp(14px, 2.5vw, 22px); font-weight: bold; color: #38bdf8; text-align: center;",
    tips: "You can also use `clamp()` for dynamic responsive paddings, margins, and container widths."
  },
  {
    id: "css-22",
    title: "22. CSS Filters & Blend Modes",
    category: "Graphics",
    difficulty: "Intermediate",
    summary: "Apply blur, brightness, contrast, drop-shadow, and Photoshop-style mix-blend-mode in CSS.",
    explanation: "`filter` applies visual effects (like `blur()`, `grayscale()`, `hue-rotate()`) to an element. `mix-blend-mode: overlay` blends an element's content with its background.",
    code: `.duotone-image {
  filter: grayscale(100%) contrast(120%);
  mix-blend-mode: multiply;
}

.neon-glow {
  filter: drop-shadow(0 0 10px #38bdf8) drop-shadow(0 0 20px #6366f1);
}`,
    interactiveType: "filters",
    previewCss: "filter: hue-rotate(90deg) brightness(1.2); padding: 8px; background: #6366f1; border-radius: 6px; text-align: center; color: #fff; font-weight: bold;",
    tips: "`filter: drop-shadow()` accurately follows the outline of transparent PNGs and SVGs unlike `box-shadow`."
  },
  {
    id: "css-23",
    title: "23. `object-fit` & `aspect-ratio`",
    category: "Media",
    difficulty: "Beginner",
    summary: "Control image cropping and lock exact video or card ratios (16:9, 1:1) effortlessly.",
    explanation: "`aspect-ratio: 16 / 9` guarantees a container maintains its aspect ratio regardless of width. `object-fit: cover` ensures images fill their box without stretching or distortion.",
    code: `.hero-img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: center;
}`,
    interactiveType: "aspect-ratio",
    previewCss: "width: 100%; max-width: 180px; aspect-ratio: 16/9; margin: 0 auto; background: linear-gradient(135deg, #0284c7, #6366f1); border-radius: 6px; display:flex; align-items:center; justify-content:center; color:#fff; font-size:11px; font-weight:bold;",
    tips: "`aspect-ratio` eliminates the old padding-bottom percentage hack for responsive videos!"
  },
  {
    id: "css-24",
    title: "24. CSS Native Nesting",
    category: "Modern CSS",
    difficulty: "Intermediate",
    summary: "Write clean, nested selectors natively without requiring Sass or preprocessors.",
    explanation: "CSS now natively supports selector nesting. Child selectors and pseudo-classes can be nested directly inside parent declaration blocks using the `&` symbol.",
    code: `.card {
  background: #1e293b;
  padding: 20px;
  border-radius: 12px;

  & h2 {
    color: #38bdf8;
    margin-bottom: 8px;
  }

  &:hover {
    transform: translateY(-4px);
  }
}`,
    interactiveType: "nesting",
    previewCss: "background: #1e293b; padding: 12px; border-radius: 8px; border: 1px solid #475569;",
    tips: "Native CSS nesting is now supported in all evergreen browsers without any build step!"
  },
  {
    id: "css-25",
    title: "25. CSS Subgrid",
    category: "Grid",
    difficulty: "Advanced",
    summary: "Align nested grid items seamlessly across parent grid tracks.",
    explanation: "Setting `grid-template-columns: subgrid` or `grid-template-rows: subgrid` allows child elements of a grid item to inherit and participate directly in the parent grid tracks.",
    code: `.parent-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto auto;
}

.card-item {
  display: grid;
  grid-row: span 3;
  grid-template-rows: subgrid; /* Align card headers, body, footers perfectly */
}`,
    interactiveType: "subgrid",
    previewCss: "display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; padding: 6px; background: #0f172a; border-radius: 6px;",
    tips: "Subgrid solves the classic problem of aligning buttons across cards of varying text length."
  }
];

// 5 Skill Check Quiz Questions for CSS
window.cssQuiz = [
  {
    question: "Which CSS property causes width & height to include both padding and border?",
    options: ["box-model: standard", "box-sizing: border-box", "box-sizing: content-box", "border-collapse: collapse"],
    correctAnswer: 1,
    explanation: "box-sizing: border-box recalculates total dimensions to include padding and border."
  },
  {
    question: "How do you make a CSS Grid create as many 200px columns as fit without media queries?",
    options: [
      "grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))",
      "grid-columns: flex 200px",
      "grid-template-columns: auto-columns(200px)",
      "grid-auto-flow: columns-200"
    ],
    correctAnswer: 0,
    explanation: "repeat(auto-fit, minmax(200px, 1fr)) dynamically fills row space with responsive grid tracks."
  },
  {
    question: "Which pseudo-class acts as a CSS parent selector to style an element based on its children?",
    options: [":parent()", ":has()", ":is()", ":contains()"],
    correctAnswer: 1,
    explanation: ":has() enables conditional styling of parent elements based on child state or presence."
  },
  {
    question: "Which CSS function fluidly scales a value between a minimum, viewport calculation, and maximum?",
    options: ["calc()", "minmax()", "clamp()", "scale()"],
    correctAnswer: 2,
    explanation: "clamp(min, val, max) sets a fluid value with lower and upper bounds."
  },
  {
    question: "Which property is required to achieve a frosted glass effect over background elements?",
    options: ["filter: blur()", "backdrop-filter: blur()", "background-blur: true", "box-blur: 10px"],
    correctAnswer: 1,
    explanation: "backdrop-filter applies visual filters (like blur) to the content behind the element."
  }
];
