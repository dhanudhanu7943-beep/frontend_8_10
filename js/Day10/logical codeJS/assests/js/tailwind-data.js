/**
 * Tailwind CSS 25+ Comprehensive Interactive Topics & Quiz Data
 */

window.tailwindTopics = [
  {
    id: "tw-1",
    title: "1. Utility-First Philosophy & Core Syntax",
    category: "Fundamentals",
    difficulty: "Beginner",
    summary: "Build bespoke modern designs directly in HTML without writing custom CSS classes.",
    explanation: "Tailwind CSS provides low-level utility classes like `p-4`, `text-center`, and `bg-indigo-600`. Instead of inventing abstract names (e.g. `.card-wrapper-inner`), compose designs rapidly right in markup.",
    classes: "p-6 max-w-sm mx-auto bg-slate-900 rounded-xl shadow-lg flex items-center gap-x-4 border border-slate-800",
    code: `<div class="p-6 max-w-sm mx-auto bg-slate-900 rounded-xl shadow-lg flex items-center gap-x-4 border border-slate-800">
  <div class="shrink-0">
    <div class="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">⚡</div>
  </div>
  <div>
    <div class="text-xl font-medium text-white">DevMaster Hub</div>
    <p class="text-slate-400 text-sm">Utility-first frontend speed.</p>
  </div>
</div>`,
    tips: "Utility classes eliminate CSS file bloat because repeated patterns reuse existing classes."
  },
  {
    id: "tw-2",
    title: "2. Typography & Font Styling",
    category: "Typography",
    difficulty: "Beginner",
    summary: "Font sizes, font weights, line heights, letter tracking, text alignment, and truncation.",
    explanation: "Tailwind provides `text-xs` to `text-9xl`, `font-thin` to `font-black`, `tracking-wide` (letter-spacing), `leading-relaxed` (line-height), and `truncate` for one-line ellipsis.",
    classes: "space-y-2 text-left",
    code: `<h2 class="text-2xl font-bold tracking-tight text-white">Tailwind Typography</h2>
<p class="text-base text-slate-300 font-normal leading-relaxed">
  Clean readable text with <span class="font-semibold text-indigo-400 underline decoration-indigo-500 decoration-2">styled accents</span>.
</p>
<p class="text-xs font-mono uppercase tracking-widest text-slate-400 truncate">
  Truncated long monospace identifier text here
</p>`,
    tips: "Use the `truncate` utility to automatically apply `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`."
  },
  {
    id: "tw-3",
    title: "3. Colors & Opacity Modifiers",
    category: "Styling",
    difficulty: "Beginner",
    summary: "Rich color palette (50-950) with slash-opacity modifiers (/20, /50, /80).",
    explanation: "Tailwind features an extensive 22-color palette graded from 50 (lightest) to 950 (darkest). Use `/opacity` syntax like `bg-indigo-600/30` or `text-slate-100/80` for dynamic alpha transparency.",
    classes: "flex flex-wrap gap-2 justify-center",
    code: `<div class="bg-indigo-600 text-white px-3 py-1.5 rounded-md font-medium text-xs">Solid 600</div>
<div class="bg-indigo-600/30 text-indigo-200 border border-indigo-500/40 px-3 py-1.5 rounded-md font-medium text-xs">30% Opacity</div>
<div class="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1.5 rounded-md font-medium text-xs">Emerald Tint</div>
<div class="bg-rose-500/20 text-rose-300 border border-rose-500/30 px-3 py-1.5 rounded-md font-medium text-xs">Rose Tint</div>`,
    tips: "The slash notation `bg-color/opacity` works seamlessly on background, text, border, and ring colors."
  },
  {
    id: "tw-4",
    title: "4. Spacing: Margins, Paddings & Space-X/Y",
    category: "Layout",
    difficulty: "Beginner",
    summary: "Precise spacing scale (1 unit = 0.25rem = 4px) with negative margins and child spacers.",
    explanation: "`p-4` (16px all sides), `px-6` (horizontal), `py-3` (vertical), `m-auto` (centering), `-mt-4` (negative margin), and `space-y-4` (adds margin between child elements).",
    classes: "bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3",
    code: `<div class="space-y-3 bg-slate-900 p-4 rounded-xl border border-slate-800">
  <div class="bg-indigo-600/20 text-indigo-300 p-3 rounded-lg text-xs font-mono">p-3 (12px padding)</div>
  <div class="bg-indigo-600/40 text-indigo-200 px-6 py-2 rounded-lg text-xs font-mono">px-6 py-2 (24px X, 8px Y)</div>
</div>`,
    tips: "`space-x-{n}` and `space-y-{n}` automatically apply `margin-left` or `margin-top` to all child elements except the first."
  },
  {
    id: "tw-5",
    title: "5. Sizing & Constraints",
    category: "Layout",
    difficulty: "Beginner",
    summary: "Control dimensions with w-full, max-w-screen, min-h-screen, size-*, and clamp containers.",
    explanation: "`w-full` (100%), `w-1/2` (50%), `max-w-md` (28rem), `min-h-screen` (100vh), and the handy `size-12` (sets both `width` and `height` to 3rem/48px).",
    classes: "flex items-center gap-3 justify-center",
    code: `<div class="size-10 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white text-xs">size-10</div>
<div class="size-14 bg-purple-500 rounded-xl flex items-center justify-center font-bold text-white text-xs">size-14</div>
<div class="w-32 h-10 bg-sky-500 rounded-lg flex items-center justify-center font-bold text-white text-xs">w-32 h-10</div>`,
    tips: "The `size-{n}` utility sets both `width` and `height` simultaneously, reducing HTML markup."
  },
  {
    id: "tw-6",
    title: "6. Flexbox Layout Utilities",
    category: "Flexbox",
    difficulty: "Beginner",
    summary: "Direction, alignment, wrapping, and child flex expansion (flex-1, shrink-0).",
    explanation: "`flex`, `flex-col`, `items-center`, `justify-between`, `gap-4`, `flex-wrap`, `flex-1` (grow and shrink equally), and `shrink-0` (prevent icon crushing).",
    classes: "flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800",
    code: `<div class="flex items-center justify-between gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
  <div class="flex items-center gap-3">
    <div class="size-9 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">JS</div>
    <div>
      <h4 class="text-sm font-semibold text-white">JavaScript</h4>
      <p class="text-xs text-slate-400">25 Topics Active</p>
    </div>
  </div>
  <button class="bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-md font-medium hover:bg-indigo-500">View</button>
</div>`,
    tips: "Use `justify-between` and `items-center` for standard top navigation bars."
  },
  {
    id: "tw-7",
    title: "7. CSS Grid Utilities",
    category: "Grid",
    difficulty: "Intermediate",
    summary: "Responsive columns, rows, span modifiers, and auto-fit grid track distribution.",
    explanation: "`grid`, `grid-cols-1 md:grid-cols-3`, `gap-4`, `col-span-2`, `row-span-1`. Combine with responsive prefixes for fluid multi-card layouts.",
    classes: "grid grid-cols-3 gap-2 w-full",
    code: `<div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
  <div class="bg-indigo-950/60 border border-indigo-500/30 p-3 rounded-lg text-center text-xs text-indigo-200">Col 1</div>
  <div class="bg-indigo-950/60 border border-indigo-500/30 p-3 rounded-lg text-center text-xs text-indigo-200">Col 2</div>
  <div class="bg-indigo-950/60 border border-indigo-500/30 p-3 rounded-lg text-center text-xs text-indigo-200">Col 3</div>
  <div class="col-span-1 sm:col-span-3 bg-slate-800 p-2 rounded text-center text-xs text-slate-300">col-span-3 Banner</div>
</div>`,
    tips: "Use `grid-cols-[repeat(auto-fit,minmax(200px,1fr))]` for arbitrary automatic responsive wrapping."
  },
  {
    id: "tw-8",
    title: "8. Positioning & Inset Utilities",
    category: "Layout",
    difficulty: "Intermediate",
    summary: "relative, absolute, fixed, sticky, inset-0, and z-index layers.",
    explanation: "Position elements effortlessly with `relative`, `absolute`, `fixed`, `sticky`, `top-0`, `inset-0` (top/right/bottom/left = 0), and `z-10` to `z-50`.",
    classes: "relative h-24 bg-slate-900 rounded-xl border border-slate-800 p-3",
    code: `<div class="relative h-28 bg-slate-900 rounded-xl border border-slate-800 p-4">
  <span class="text-xs text-slate-400">Parent (relative)</span>
  <!-- Absolute floating badge -->
  <span class="absolute top-2 right-2 bg-emerald-500 text-slate-950 font-bold text-[10px] px-2 py-0.5 rounded-full">
    LIVE
  </span>
  <!-- Centered absolute button -->
  <button class="absolute bottom-3 left-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded">
    Action
  </button>
</div>`,
    tips: "`inset-0` combined with `absolute` creates an instant full-bleed overlay."
  },
  {
    id: "tw-9",
    title: "9. Responsive Breakpoints (sm, md, lg, xl, 2xl)",
    category: "Responsive",
    difficulty: "Beginner",
    summary: "Mobile-first responsive design using breakpoint prefixes without writing media queries.",
    explanation: "Tailwind uses mobile-first responsive design: un-prefixed utilities apply to mobile. `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px), `2xl:` (1536px).",
    classes: "p-4 bg-slate-900 rounded-xl border border-slate-800 text-center",
    code: `<div class="w-full bg-slate-900 p-4 text-center rounded-xl border border-slate-800">
  <span class="text-xs block text-slate-400 mb-1">Resize window to see change:</span>
  <span class="text-sm font-bold text-amber-400 sm:text-indigo-400 md:text-emerald-400 lg:text-cyan-400">
    Mobile (&lt;640px) &rarr; Tablet (md) &rarr; Desktop (lg)
  </span>
</div>`,
    tips: "Always design the mobile layout first, then layer on `md:` and `lg:` overrides."
  },
  {
    id: "tw-10",
    title: "10. State Modifiers: Hover, Focus, Active & Disabled",
    category: "Interactivity",
    difficulty: "Beginner",
    summary: "Style interactive states seamlessly with hover:, focus:, active:, and disabled:.",
    explanation: "`hover:bg-indigo-500`, `focus:ring-2 focus:ring-indigo-500 focus:outline-none`, `active:scale-95`, and `disabled:opacity-50 disabled:cursor-not-allowed`.",
    classes: "flex gap-3 justify-center",
    code: `<button class="bg-indigo-600 hover:bg-indigo-500 active:scale-95 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all shadow-md hover:shadow-indigo-500/25">
  Click Me (Hover & Active)
</button>
<button disabled class="bg-slate-700 text-slate-400 text-xs font-semibold px-4 py-2 rounded-lg opacity-50 cursor-not-allowed">
  Disabled State
</button>`,
    tips: "`active:scale-95` gives buttons a tactile, responsive click sensation."
  },
  {
    id: "tw-11",
    title: "11. Group & Peer State Modifiers",
    category: "Interactivity",
    difficulty: "Advanced",
    summary: "Style child elements based on parent hover (group) or sibling checkbox state (peer).",
    explanation: "Add `group` to a parent container, then use `group-hover:text-indigo-400` or `group-hover:translate-x-1` on children. Add `peer` to an input to style sibling elements with `peer-checked:`.",
    classes: "w-full max-w-xs mx-auto",
    code: `<div class="group p-4 bg-slate-900 hover:bg-indigo-950/40 border border-slate-800 hover:border-indigo-500/40 rounded-xl transition cursor-pointer flex items-center justify-between">
  <div>
    <h4 class="text-sm font-semibold text-white group-hover:text-indigo-300 transition">Group Card</h4>
    <p class="text-xs text-slate-400">Hover over this card</p>
  </div>
  <span class="text-slate-400 group-hover:text-indigo-400 group-hover:translate-x-1.5 transition-transform duration-200">&rarr;</span>
</div>`,
    tips: "Named groups like `group/card` and `group/item` allow nesting multiple group levels without collision."
  },
  {
    id: "tw-12",
    title: "12. Dark Mode (`dark:`) Utilities",
    category: "Theming",
    difficulty: "Intermediate",
    summary: "Target dark theme styles with dark:bg-slate-950, dark:text-white using class or media strategy.",
    explanation: "With the `class` strategy configured, adding `class=\"dark\"` to `<html>` activates all `dark:*` modifier utilities throughout the entire application tree.",
    classes: "p-4 bg-slate-900 text-white rounded-xl border border-slate-800 text-center",
    code: `<div class="bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-md">
  <h3 class="text-base font-bold">Automatic Dark / Light Support</h3>
  <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Switches dynamically with system or toggle.</p>
</div>`,
    tips: "Set `darkMode: 'class'` in Tailwind config for user-controlled theme toggles."
  },
  {
    id: "tw-13",
    title: "13. Borders, Radii & Focus Rings",
    category: "Styling",
    difficulty: "Beginner",
    summary: "rounded-xl, rounded-full, border-2, border-slate-700, ring-2, and ring-offset.",
    explanation: "`rounded-none` to `rounded-full`, `border`, `border-t-2`, `divide-y divide-slate-800` (auto-borders between list items), and `ring-2 ring-indigo-500`.",
    classes: "flex gap-3 justify-center items-center",
    code: `<div class="p-3 bg-slate-900 border-2 border-indigo-500 rounded-lg text-xs text-indigo-300 font-mono">rounded-lg</div>
<div class="p-3 bg-slate-900 border border-slate-700 rounded-2xl text-xs text-slate-300 font-mono">rounded-2xl</div>
<div class="size-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs ring-4 ring-indigo-500/30">Full</div>`,
    tips: "`ring-offset-2 ring-offset-slate-950` creates a high-contrast gap around focused elements."
  },
  {
    id: "tw-14",
    title: "14. Shadows & Elevation",
    category: "Styling",
    difficulty: "Beginner",
    summary: "shadow-sm to shadow-2xl, inner shadows, colored shadow glow utilities.",
    explanation: "Tailwind includes soft box shadows (`shadow-sm`, `shadow-md`, `shadow-xl`) and colored glow shadows (`shadow-indigo-500/50`).",
    classes: "flex gap-4 justify-center",
    code: `<div class="p-4 bg-slate-900 rounded-xl shadow-md border border-slate-800 text-xs text-slate-300">
  Standard shadow-md
</div>
<div class="p-4 bg-slate-900 rounded-xl shadow-lg shadow-indigo-500/30 border border-indigo-500/30 text-xs text-indigo-300 font-semibold">
  Glow shadow-indigo-500/30
</div>`,
    tips: "Colored shadows like `shadow-indigo-500/20` look much more modern than plain black shadows."
  },
  {
    id: "tw-15",
    title: "15. Transitions & Animation Timings",
    category: "Animation",
    difficulty: "Intermediate",
    summary: "transition-all, duration-300, ease-in-out, delay-150 for smooth visual feedback.",
    explanation: "`transition-colors`, `transition-transform`, `transition-all`, `duration-200`, `duration-500`, `ease-out`, and `delay-100`.",
    classes: "flex gap-3 justify-center",
    code: `<button class="px-4 py-2 bg-indigo-600 hover:bg-emerald-600 text-white text-xs font-semibold rounded-lg transition-colors duration-500 ease-in-out">
  500ms Color Transition
</button>
<button class="px-4 py-2 bg-slate-800 hover:bg-slate-700 hover:-translate-y-1 text-white text-xs font-semibold rounded-lg transition-transform duration-200">
  Lift Transform
</button>`,
    tips: "Prefer `transition-transform` or `transition-opacity` over `transition-all` for optimal 60fps performance."
  },
  {
    id: "tw-16",
    title: "16. Transform Utilities: Scale, Rotate, Translate & Skew",
    category: "Animation",
    difficulty: "Intermediate",
    summary: "Scale-105, rotate-45, -translate-y-2, origin-center without manual CSS transform matrix.",
    explanation: "Compose transformations directly with `scale-95`, `hover:scale-105`, `rotate-12`, `-translate-y-1`, and `origin-top-left`.",
    classes: "flex gap-6 justify-center items-center p-2",
    code: `<div class="size-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xs font-bold hover:scale-125 transition-transform">
  Scale
</div>
<div class="size-12 bg-purple-600 rounded-lg flex items-center justify-center text-white text-xs font-bold hover:rotate-45 transition-transform">
  Rotate
</div>
<div class="size-12 bg-cyan-600 rounded-lg flex items-center justify-center text-white text-xs font-bold hover:-translate-y-2 transition-transform">
  Translate
</div>`,
    tips: "Negative transforms start with a minus sign: `-translate-x-4` or `-rotate-6`."
  },
  {
    id: "tw-17",
    title: "17. Gradients & Color Stops",
    category: "Styling",
    difficulty: "Beginner",
    summary: "bg-gradient-to-r, from-indigo-500, via-purple-500, to-pink-500 and text clip gradients.",
    explanation: "`bg-gradient-to-r`, `bg-gradient-to-br`, combined with `from-*`, `via-*`, and `to-*` stops. Use `bg-clip-text text-transparent` for shimmering gradient typography.",
    classes: "space-y-3 w-full max-w-sm mx-auto",
    code: `<!-- Gradient Background Card -->
<div class="h-14 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
  Multi-Stop Gradient
</div>

<!-- Gradient Text Clip -->
<h3 class="text-xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
  Gradient Text Heading
</h3>`,
    tips: "Use `from-indigo-500/20 to-transparent` for subtle ambient glow cards."
  },
  {
    id: "tw-18",
    title: "18. Backdrop Blur & Glassmorphism Utilities",
    category: "Modern UI",
    difficulty: "Intermediate",
    summary: "backdrop-blur-md, backdrop-saturate-150, bg-slate-900/60 for frosted glass UI.",
    explanation: "`backdrop-blur-sm` through `backdrop-blur-2xl` paired with alpha transparency `bg-white/10` or `bg-slate-900/70` and subtle borders `border-white/10`.",
    classes: "p-4 rounded-xl bg-slate-900/70 backdrop-blur-md border border-white/10 text-center text-xs text-slate-200 shadow-xl",
    code: `<div class="p-6 rounded-2xl bg-slate-900/65 backdrop-blur-xl border border-white/10 shadow-2xl text-center">
  <span class="text-indigo-400 font-bold text-xs uppercase tracking-wider">Glassmorphic Card</span>
  <h4 class="text-white font-semibold text-sm mt-1">Frosted Glass UI</h4>
  <p class="text-slate-400 text-xs mt-2">backdrop-blur-xl + bg-slate-900/65</p>
</div>`,
    tips: "Always test contrast ratio over background elements when using semi-transparent glass cards."
  },
  {
    id: "tw-19",
    title: "19. Filter Utilities: Blur, Grayscale, Brightness & Invert",
    category: "Styling",
    difficulty: "Intermediate",
    summary: "Apply visual filters: blur-sm, grayscale, brightness-125, contrast-125, drop-shadow.",
    explanation: "Tailwind includes `blur-sm`, `grayscale`, `brightness-110`, `contrast-125`, `hue-rotate-90`, and `invert`.",
    classes: "flex gap-3 justify-center items-center",
    code: `<div class="size-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xs font-bold grayscale hover:grayscale-0 transition">
  Gray
</div>
<div class="size-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xs font-bold blur-[1px] hover:blur-none transition">
  Blur
</div>
<div class="size-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xs font-bold brightness-150">
  Bright
</div>`,
    tips: "Combine `grayscale` with `hover:grayscale-0` for company logo partner grids."
  },
  {
    id: "tw-20",
    title: "20. Form Control Styling & Accent Colors",
    category: "Forms",
    difficulty: "Intermediate",
    summary: "Style inputs, checkboxes, radios, select dropdowns, and accent-indigo-600.",
    explanation: "Style form elements with `accent-indigo-600` (customizes native checkbox/radio/slider color), `placeholder-slate-500`, and `focus:ring-2`.",
    classes: "space-y-3 max-w-xs mx-auto text-left",
    code: `<div class="space-y-3">
  <input type="text" placeholder="Enter your email..." class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
  
  <label class="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
    <input type="checkbox" checked class="size-4 accent-indigo-600 rounded">
    <span>Subscribe to weekly digest</span>
  </label>
</div>`,
    tips: "Use `accent-{color}` to tint checkboxes and radio buttons in one single utility class."
  },
  {
    id: "tw-21",
    title: "21. Built-in Keyframe Animations",
    category: "Animation",
    difficulty: "Beginner",
    summary: "animate-spin, animate-ping, animate-pulse, and animate-bounce.",
    explanation: "Tailwind provides 4 production-ready animations: `animate-spin` (loading spinners), `animate-ping` (notification radar beacon), `animate-pulse` (skeleton loaders), and `animate-bounce` (scroll cues).",
    classes: "flex gap-6 justify-center items-center py-2",
    code: `<div class="flex items-center gap-6 justify-center">
  <!-- Loading Spinner -->
  <div class="size-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
  
  <!-- Notification Beacon -->
  <span class="relative flex size-3">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
    <span class="relative inline-flex rounded-full size-3 bg-sky-500"></span>
  </span>

  <!-- Bounce Indicator -->
  <div class="size-6 bg-indigo-600 rounded-md animate-bounce flex items-center justify-center text-white text-[10px] font-bold">↓</div>
</div>`,
    tips: "Combine `animate-pulse` with gray placeholder boxes to build instant skeleton loading states."
  },
  {
    id: "tw-22",
    title: "22. Arbitrary Values (`[value]`) & CSS Variables",
    category: "Advanced",
    difficulty: "Intermediate",
    summary: "Use exact custom pixels, calculations, or variables with bracket syntax: w-[350px], top-[12vh].",
    explanation: "When you need a one-off value outside the standard scale, use square brackets: `w-[320px]`, `bg-[#1e1b4b]`, `grid-cols-[1fr_2fr]`, or `text-[clamp(1rem,2vw,2rem)]`.",
    classes: "p-3 bg-[#0f172a] rounded-[14px] border border-[#6366f1]/40 text-center text-xs text-[#38bdf8] font-mono",
    code: `<div class="w-[280px] mx-auto p-[14px] bg-[#0c1222] rounded-[16px] border border-[#38bdf8]/30 shadow-[0_0_20px_rgba(56,189,248,0.2)] text-center text-xs text-white">
  Exact Arbitrary Dimensions: w-[280px]
</div>`,
    tips: "Avoid spaces inside arbitrary values; use underscores instead (e.g. `grid-cols-[100px_1fr]` instead of spaces)."
  },
  {
    id: "tw-23",
    title: "23. Aspect Ratio & Object Fit Utilities",
    category: "Media",
    difficulty: "Beginner",
    summary: "aspect-video, aspect-square, aspect-[4/3], object-cover, and object-center.",
    explanation: "`aspect-video` (16:9), `aspect-square` (1:1), and `object-cover` ensure images fill their aspect-locked frames without distortion.",
    classes: "w-full max-w-[220px] mx-auto",
    code: `<div class="aspect-video bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-md">
  aspect-video (16:9)
</div>`,
    tips: "`aspect-video` prevents layout shifting when embedding YouTube or Vimeo videos."
  },
  {
    id: "tw-24",
    title: "24. Cursor, Pointer Events & User Select",
    category: "Interactivity",
    difficulty: "Beginner",
    summary: "cursor-pointer, cursor-not-allowed, pointer-events-none, select-none.",
    explanation: "`cursor-pointer`, `cursor-wait`, `pointer-events-none` (click passes through to element underneath), and `select-none` (prevents text highlighting).",
    classes: "flex gap-3 justify-center items-center",
    code: `<div class="px-3 py-1.5 bg-slate-800 rounded text-xs text-slate-300 select-none cursor-pointer">
  select-none (Can't highlight)
</div>
<div class="px-3 py-1.5 bg-rose-950/40 border border-rose-500/30 rounded text-xs text-rose-300 cursor-not-allowed">
  cursor-not-allowed
</div>`,
    tips: "Use `pointer-events-none` on decorative floating icons so they don't block clicks to underlying buttons."
  },
  {
    id: "tw-25",
    title: "25. Container & Layout Max-Widths",
    category: "Layout",
    difficulty: "Intermediate",
    summary: "Responsive page constraints with container, mx-auto, and max-w-7xl.",
    explanation: "Center content across large monitors using `container mx-auto px-4` or `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.",
    classes: "w-full bg-slate-900 p-3 rounded-lg border border-slate-800 text-center text-xs text-slate-300",
    code: `<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="bg-indigo-950/40 border border-indigo-500/30 p-4 rounded-xl text-center text-xs text-indigo-200">
    max-w-5xl mx-auto px-4 (Centered Responsive Layout)
  </div>
</div>`,
    tips: "Pair `max-w-*` with `mx-auto` and horizontal padding (`px-4`) to ensure content never touches screen edges on mobile."
  }
];

// 5 Skill Check Quiz Questions for Tailwind CSS
window.tailwindQuiz = [
  {
    question: "What does the slash notation in `bg-indigo-600/50` represent?",
    options: ["50px blur", "50% opacity/alpha transparency", "50% width", "Dark mode variant 50"],
    correctAnswer: 1,
    explanation: "The slash notation `/50` specifies 50% opacity (alpha transparency) on the color."
  },
  {
    question: "Which modifier targets parent hover state to style child elements?",
    options: ["parent-hover:", "hover-child:", "group-hover:", "peer-hover:"],
    correctAnswer: 2,
    explanation: "Applying `group` to parent and `group-hover:` to children enables child styling on parent hover."
  },
  {
    question: "How do you specify an arbitrary one-off value of 350px width in Tailwind?",
    options: ["w-350px", "w-[350px]", "width-(350px)", "custom-w-350"],
    correctAnswer: 1,
    explanation: "Square brackets `w-[350px]` allow arbitrary custom CSS values directly in class names."
  },
  {
    question: "Which utility sets both width and height simultaneously to 48px (3rem)?",
    options: ["wh-12", "dim-12", "size-12", "box-12"],
    correctAnswer: 2,
    explanation: "The `size-12` utility sets both width and height to 3rem (48px) in one class."
  },
  {
    question: "Which built-in animation creates a continuous rotating loading spinner?",
    options: ["animate-rotate", "animate-spin", "animate-loop", "animate-turn"],
    correctAnswer: 1,
    explanation: "animate-spin continuously rotates an element 360 degrees, perfect for loading indicators."
  }
];
