/**
 * HTML 25+ Comprehensive Interactive Topics & Quiz Data
 */

window.htmlTopics = [
  {
    id: "html-1",
    title: "1. HTML5 Document Structure & DOCTYPE",
    category: "Structure",
    difficulty: "Beginner",
    summary: "The foundational blueprint of every modern webpage with doctype declaration and meta elements.",
    explanation: "HTML5 begins with `<!DOCTYPE html>` which tells the browser to render the page in standard modern mode. Key elements include `<html>`, `<head>` (containing metadata, title, viewport, and linked stylesheets), and `<body>` (containing all visible content).",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modern HTML5 Page</title>
</head>
<body>
  <h1>Welcome to DevMaster</h1>
  <p>Your journey to full-stack mastery starts here!</p>
</body>
</html>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; color:#f8fafc; border-radius:8px;">
  <h2 style="margin-top:0; color:#38bdf8;">Welcome to DevMaster</h2>
  <p>Your journey to full-stack mastery starts here!</p>
</div>`,
    tips: "Always include `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">` for responsive mobile scaling."
  },
  {
    id: "html-2",
    title: "2. Semantic Layout Elements",
    category: "Structure",
    difficulty: "Beginner",
    summary: "Structure content with meaningful tags: header, nav, main, article, section, aside, footer.",
    explanation: "Semantic HTML uses tags that convey the meaning of the content to both browsers, search engines (SEO), and screen readers (Accessibility). Instead of generic `<div>` soup, use `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, and `<footer>`.",
    code: `<header>
  <h1>Tech Today</h1>
  <nav><a href="#home">Home</a> | <a href="#articles">Articles</a></nav>
</header>
<main>
  <article>
    <h2>Semantic HTML Guide</h2>
    <p>Semantic markup enhances web accessibility and SEO.</p>
  </article>
</main>
<footer>
  <p>&copy; 2026 DevMaster Inc.</p>
</footer>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#0f172a; border:1px solid #334155; border-radius:8px;">
  <header style="border-bottom:1px solid #475569; padding-bottom:6px; margin-bottom:8px;">
    <h3 style="margin:0; color:#f97316;">Tech Today</h3>
    <nav style="font-size:12px; color:#94a3b8;"><a href="#" style="color:#38bdf8;">Home</a> &bull; <a href="#" style="color:#38bdf8;">Articles</a></nav>
  </header>
  <main>
    <article style="background:#1e293b; padding:8px; border-radius:6px; margin-bottom:8px;">
      <h4 style="margin:0 0 4px; color:#f8fafc;">Semantic HTML Guide</h4>
      <p style="margin:0; font-size:13px; color:#cbd5e1;">Semantic markup enhances web accessibility and SEO.</p>
    </article>
  </main>
  <footer style="font-size:11px; color:#64748b; text-align:center;">&copy; 2026 DevMaster Inc.</footer>
</div>`,
    tips: "Use `<main>` only once per page to signify the central unique content."
  },
  {
    id: "html-3",
    title: "3. Headings, Paragraphs & Text Formatting",
    category: "Typography",
    difficulty: "Beginner",
    summary: "Master headings h1-h6, paragraph formatting, strong, em, mark, del, and ins.",
    explanation: "Headings establish a document hierarchy from `<h1>` (most important, only one per page recommended) down to `<h6>`. Text formatting tags include `<strong>` (bold with semantic importance), `<em>` (italic stress), `<mark>` (highlight), `<del>` (deleted text), and `<ins>` (inserted text).",
    code: `<h1>Main Page Title</h1>
<h2>Section Subheading</h2>
<p>This is a <strong>strong statement</strong> and this is <em>emphasized</em>.</p>
<p>You can also <mark>highlight key terms</mark> or show <del>old price $99</del> <ins>new price $49</ins>.</p>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; color:#f8fafc; border-radius:8px; line-height:1.6;">
  <h3 style="margin:0; color:#38bdf8;">Main Page Title</h3>
  <h4 style="margin:4px 0 8px; color:#94a3b8;">Section Subheading</h4>
  <p style="margin:4px 0; font-size:13px;">This is a <strong style="color:#facc15;">strong statement</strong> and this is <em style="color:#a7f3d0;">emphasized</em>.</p>
  <p style="margin:4px 0; font-size:13px;">You can also <mark style="background:#ca8a04; color:#fff; padding:2px 4px; border-radius:3px;">highlight key terms</mark> or show <del style="color:#94a3b8;">old price $99</del> <ins style="color:#4ade80; text-decoration:none; font-weight:bold;">new price $49</ins>.</p>
</div>`,
    tips: "Never skip heading levels (e.g. from h2 directly to h4) to ensure clear document outline for assistive readers."
  },
  {
    id: "html-4",
    title: "4. Hyperlinks & Anchor Attributes",
    category: "Navigation",
    difficulty: "Beginner",
    summary: "Connecting pages, deep linking with IDs, download triggers, and target security.",
    explanation: "The `<a>` tag creates hyperlinks. When linking to external websites using `target=\"_blank\"`, always pair it with `rel=\"noopener noreferrer\"` to prevent security vulnerabilities (tabnabbing) and performance leaks.",
    code: `<!-- External link with security attributes -->
<a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">
  MDN Web Docs
</a>

<!-- Jump to Section ID & Mailto -->
<a href="#contact-section">Jump to Contact</a>
<a href="mailto:support@example.com">Email Support</a>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; border-radius:8px; display:flex; flex-wrap:wrap; gap:10px;">
  <a href="#" style="background:#3b82f6; color:#fff; padding:6px 12px; border-radius:6px; text-decoration:none; font-size:13px;">MDN Web Docs &UpperRightArrow;</a>
  <a href="#" style="background:#475569; color:#f8fafc; padding:6px 12px; border-radius:6px; text-decoration:none; font-size:13px;">Jump to Contact &DownArrow;</a>
  <a href="#" style="background:#059669; color:#fff; padding:6px 12px; border-radius:6px; text-decoration:none; font-size:13px;">Email Support &check;</a>
</div>`,
    tips: "Use `download=\"filename.pdf\"` attribute on an anchor tag to prompt direct download instead of navigation."
  },
  {
    id: "html-5",
    title: "5. Responsive Images & Picture Element",
    category: "Media",
    difficulty: "Intermediate",
    summary: "High-performance responsive graphics with picture, srcset, sizes, and loading='lazy'.",
    explanation: "Modern web performance relies on `<img loading=\"lazy\" alt=\"...\" srcset=\"...\">` and the `<picture>` element to serve WebP/AVIF formats conditionally depending on device pixel density and viewport width.",
    code: `<picture>
  <source srcset="hero-dark.webp" media="(prefers-color-scheme: dark)">
  <source srcset="hero-large.jpg" media="(min-width: 800px)">
  <img src="hero-default.jpg" alt="Developer coding at workstation" loading="lazy" width="600" height="400">
</picture>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#0f172a; border-radius:8px; text-align:center;">
  <div style="background:linear-gradient(135deg, #4f46e5, #06b6d4); height:120px; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:bold;">
    Responsive Banner (AVIF / WebP Loaded)
  </div>
  <p style="font-size:11px; color:#94a3b8; margin-top:6px;">Native lazy loading + resolution switching active</p>
</div>`,
    tips: "Always specify `width` and `height` attributes on images to prevent Cumulative Layout Shift (CLS)."
  },
  {
    id: "html-6",
    title: "6. Audio & Video Multimedia",
    category: "Media",
    difficulty: "Intermediate",
    summary: "Native multimedia players with controls, subtitles, posters, and multiple fallback sources.",
    explanation: "HTML5 `<video>` and `<audio>` tags allow seamless media streaming without third-party plugins. You can provide multiple `<source>` tags (MP4, WebM) for cross-browser fallback, plus `<track>` for subtitles/captions.",
    code: `<video controls poster="poster.jpg" width="100%" preload="metadata">
  <source src="demo.webm" type="video/webm">
  <source src="demo.mp4" type="video/mp4">
  <track src="captions_en.vtt" kind="subtitles" srclang="en" label="English">
  Your browser does not support HTML5 video.
</video>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; border-radius:8px;">
  <div style="background:#0f172a; border:1px dashed #64748b; padding:20px; text-align:center; border-radius:6px;">
    <span style="font-size:32px;">🎬</span>
    <p style="margin:4px 0 0; color:#38bdf8; font-weight:600; font-size:14px;">HTML5 Custom Video Component</p>
    <div style="display:flex; justify-content:center; gap:8px; margin-top:8px;">
      <button style="background:#334155; color:#fff; border:none; padding:4px 10px; border-radius:4px; font-size:12px;">▶ Play</button>
      <button style="background:#334155; color:#fff; border:none; padding:4px 10px; border-radius:4px; font-size:12px;">🔊 Mute</button>
    </div>
  </div>
</div>`,
    tips: "To autoplay a video on modern mobile browsers, you must also add the `muted` attribute."
  },
  {
    id: "html-7",
    title: "7. Ordered, Unordered & Description Lists",
    category: "Structure",
    difficulty: "Beginner",
    summary: "Organize items with ul, ol, dl, dt, dd for cleaner structuring and navigation.",
    explanation: "HTML offers `<ul>` for bulleted collections, `<ol>` for numbered sequential steps (with `start` and `reversed` attributes), and `<dl>` description lists for glossary/key-value terminology pairing.",
    code: `<!-- Description List for Key-Value pairs -->
<dl>
  <dt><strong>HTML</strong></dt>
  <dd>HyperText Markup Language</dd>
  <dt><strong>CSS</strong></dt>
  <dd>Cascading Style Sheets</dd>
</dl>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; color:#f8fafc; border-radius:8px;">
  <div style="display:grid; grid-template-columns: 80px 1fr; gap:6px; font-size:13px;">
    <span style="color:#f97316; font-weight:bold;">HTML:</span>
    <span style="color:#cbd5e1;">HyperText Markup Language</span>
    <span style="color:#38bdf8; font-weight:bold;">CSS:</span>
    <span style="color:#cbd5e1;">Cascading Style Sheets</span>
  </div>
</div>`,
    tips: "Description lists (`<dl>`) are the semantically correct structure for product specifications and FAQs."
  },
  {
    id: "html-8",
    title: "8. Accessible Data Tables",
    category: "Data",
    difficulty: "Intermediate",
    summary: "Structure tabular data with thead, tbody, tfoot, th scope, colspan, and rowspan.",
    explanation: "Tables require proper semantic tags: `<thead>`, `<tbody>`, `<tfoot>`, and `<th scope=\"col\">` or `<th scope=\"row\">` so assistive technologies can read data cells in relationship to their column or row header.",
    code: `<table border="1">
  <caption>Frontend Tech Stack 2026</caption>
  <thead>
    <tr>
      <th scope="col">Technology</th>
      <th scope="col">Role</th>
      <th scope="col">Popularity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tailwind CSS</td>
      <td>Styling</td>
      <td>95%</td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td>Logic & Interactivity</td>
      <td>99%</td>
    </tr>
  </tbody>
</table>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; border-radius:8px;">
  <table style="width:100%; text-align:left; border-collapse:collapse; font-size:12px; color:#e2e8f0;">
    <thead>
      <tr style="border-bottom:1px solid #475569; color:#38bdf8;">
        <th style="padding:6px;">Technology</th>
        <th style="padding:6px;">Role</th>
        <th style="padding:6px;">Popularity</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #334155;">
        <td style="padding:6px;">Tailwind CSS</td>
        <td style="padding:6px;">Styling</td>
        <td style="padding:6px; color:#4ade80;">95%</td>
      </tr>
      <tr>
        <td style="padding:6px;">JavaScript</td>
        <td style="padding:6px;">Logic</td>
        <td style="padding:6px; color:#4ade80;">99%</td>
      </tr>
    </tbody>
  </table>
</div>`,
    tips: "Always include `<caption>` as the first child of `<table>` to provide an accessible description."
  },
  {
    id: "html-9",
    title: "9. Interactive Forms & Essential Inputs",
    category: "Forms",
    difficulty: "Beginner",
    summary: "Capture user input with form, label, input, placeholder, and submit buttons.",
    explanation: "Every input field should be explicitly paired with a `<label for=\"inputId\">` element to ensure high usability and screen-reader accessibility.",
    code: `<form action="/submit" method="POST">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" placeholder="e.g. alex_dev" required>

  <label for="useremail">Email Address:</label>
  <input type="email" id="useremail" name="useremail" required>

  <button type="submit">Sign Up</button>
</form>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; border-radius:8px;">
  <div style="display:flex; flex-direction:column; gap:8px; max-width:280px;">
    <label style="font-size:12px; color:#94a3b8;">Username</label>
    <input type="text" value="alex_dev" style="background:#0f172a; border:1px solid #475569; padding:6px 10px; border-radius:6px; color:#fff; font-size:12px;">
    <button style="background:#6366f1; color:#fff; border:none; padding:8px; border-radius:6px; font-weight:600; font-size:12px; cursor:pointer;">Sign Up</button>
  </div>
</div>`,
    tips: "Clicking a `<label>` automatically focuses the associated input if the `for` attribute matches the input's `id`."
  },
  {
    id: "html-10",
    title: "10. Advanced Modern Form Inputs",
    category: "Forms",
    difficulty: "Intermediate",
    summary: "Range sliders, color pickers, date-time pickers, file uploads, and datalists.",
    explanation: "HTML5 provides native specialized widgets without requiring heavy JavaScript plugins: `type=\"range\"`, `type=\"color\"`, `type=\"date\"`, `type=\"file\"`, and the powerful `<datalist>` autocomplete component.",
    code: `<label for="rating">Skill Level:</label>
<input type="range" id="rating" min="1" max="100" value="85">

<label for="brandColor">Theme Color:</label>
<input type="color" id="brandColor" value="#6366f1">

<!-- Native Autocomplete Datalist -->
<label for="framework">Framework:</label>
<input list="frameworks" id="framework" name="framework">
<datalist id="frameworks">
  <option value="React">
  <option value="Vue">
  <option value="Angular">
  <option value="Svelte">
</datalist>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; border-radius:8px; display:flex; flex-direction:column; gap:10px;">
  <div style="display:flex; align-items:center; gap:8px;">
    <span style="font-size:12px; color:#cbd5e1;">Skill Level:</span>
    <input type="range" value="85" style="accent-color:#6366f1;">
  </div>
  <div style="display:flex; align-items:center; gap:8px;">
    <span style="font-size:12px; color:#cbd5e1;">Theme Color:</span>
    <input type="color" value="#6366f1" style="border:none; width:28px; height:28px; border-radius:4px; cursor:pointer;">
  </div>
</div>`,
    tips: "`<datalist>` provides autocomplete suggestions while still allowing users to type custom arbitrary values."
  },
  {
    id: "html-11",
    title: "11. HTML5 Native Form Validation",
    category: "Forms",
    difficulty: "Intermediate",
    summary: "Validate user inputs instantly using required, pattern regex, min/max, and minlength.",
    explanation: "Browsers provide built-in validation before JavaScript is even executed. You can use regex patterns via the `pattern` attribute, value bounds (`min`/`max`), text lengths (`minlength`/`maxlength`), and `step` for numeric precision.",
    code: `<input type="text" name="zip" pattern="[0-9]{5}" title="Five digit zip code" required>
<input type="password" minlength="8" placeholder="At least 8 characters" required>
<input type="number" min="18" max="99" value="21">`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; border-radius:8px;">
  <p style="font-size:12px; color:#a5b4fc; margin:0 0 6px;">Try submitting invalid input to trigger browser validation:</p>
  <div style="display:flex; gap:8px;">
    <input type="text" placeholder="5-digit PIN: 12345" style="background:#0f172a; border:1px solid #ef4444; padding:6px 10px; border-radius:6px; color:#fff; font-size:12px;">
    <span style="color:#f87171; font-size:11px; align-self:center;">⚠️ Pattern mismatch</span>
  </div>
</div>`,
    tips: "You can style valid and invalid inputs natively in CSS using `:valid` and `:user-invalid` pseudo-classes."
  },
  {
    id: "html-12",
    title: "12. Native `<dialog>` Modal & Popover API",
    category: "Interactive",
    difficulty: "Advanced",
    summary: "Build accessible native modal popups with zero external JavaScript libraries.",
    explanation: "The HTML `<dialog>` element provides built-in accessibility, backdrop styling via `::backdrop`, escape key handling, and focus trapping when opened via `dialog.showModal()`.",
    code: `<button onclick="document.getElementById('myModal').showModal()">Open Modal</button>

<dialog id="myModal">
  <h2>Native HTML Dialog</h2>
  <p>Press ESC or click close to dismiss.</p>
  <form method="dialog">
    <button>Close</button>
  </form>
</dialog>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; border-radius:8px; text-align:center;">
  <div style="background:#0f172a; border:1px solid #6366f1; padding:12px; border-radius:8px; max-width:260px; margin:0 auto;">
    <h4 style="margin:0 0 4px; color:#818cf8;">Dialog Window</h4>
    <p style="margin:0 0 8px; font-size:11px; color:#94a3b8;">Native backdrop blur & focus lock</p>
    <button style="background:#475569; color:#fff; border:none; padding:4px 8px; border-radius:4px; font-size:11px;">Close Dialog</button>
  </div>
</div>`,
    tips: "Always use `.showModal()` instead of `.show()` if you want the dialog to render on the top-layer with inert backdrop."
  },
  {
    id: "html-13",
    title: "13. Details & Summary Accordions",
    category: "Interactive",
    difficulty: "Beginner",
    summary: "Pure HTML collapsible accordions with no JavaScript required.",
    explanation: "The `<details>` tag creates an interactive widget that the user can open and close. The `<summary>` element provides the clickable heading label.",
    code: `<details>
  <summary>What is Tailwind CSS?</summary>
  <p>Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without leaving your HTML.</p>
</details>

<details open>
  <summary>Is JavaScript required for this accordion?</summary>
  <p>No! The details element is 100% native HTML.</p>
</details>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; border-radius:8px; color:#e2e8f0; font-size:13px;">
  <details open style="background:#0f172a; padding:8px 12px; border-radius:6px; border:1px solid #334155;">
    <summary style="font-weight:600; color:#38bdf8; cursor:pointer;">What is Tailwind CSS?</summary>
    <p style="margin:6px 0 0; color:#cbd5e1; font-size:12px;">Tailwind is a utility-first CSS framework for rapid UI styling.</p>
  </details>
</div>`,
    tips: "Add the `name` attribute across multiple `<details name=\"faq\">` tags in modern browsers to create exclusive single-open accordions!"
  },
  {
    id: "html-14",
    title: "14. Iframes & Security Sandboxing",
    category: "Embedding",
    difficulty: "Intermediate",
    summary: "Embed external widgets, videos, or documents securely using iframe sandbox attributes.",
    explanation: "Iframes (`<iframe>`) embed another HTML document inside the current page. For security, always utilize the `sandbox` attribute to restrict script execution, popups, and parent navigation from untrusted sources.",
    code: `<iframe 
  src="https://example.com/embed" 
  title="Interactive Widget Demo"
  width="100%" 
  height="300"
  loading="lazy"
  sandbox="allow-scripts allow-same-origin">
</iframe>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; border-radius:8px; text-align:center;">
  <div style="border:2px dashed #475569; padding:16px; border-radius:6px; background:#0f172a;">
    <p style="margin:0; font-size:12px; color:#94a3b8;">🔒 Sandboxed Iframe Container</p>
    <span style="font-size:11px; color:#38bdf8;">allow-scripts &bull; allow-same-origin</span>
  </div>
</div>`,
    tips: "Always provide a descriptive `title` attribute on every `<iframe>` for screen reader compliance."
  },
  {
    id: "html-15",
    title: "15. Meta Tags, SEO & OpenGraph",
    category: "SEO",
    difficulty: "Intermediate",
    summary: "Optimize search engine rankings and social media link previews with meta tags.",
    explanation: "Meta tags reside inside `<head>`. They guide Google indexing, social media card generation (Open Graph tags `og:image`, `og:title`), and browser theme customization.",
    code: `<head>
  <meta name="description" content="Master HTML, CSS, JavaScript, and Tailwind CSS with interactive exercises.">
  <meta name="theme-color" content="#6366f1">

  <!-- Open Graph / Social Media Preview -->
  <meta property="og:title" content="DevMaster Interactive Hub">
  <meta property="og:description" content="Comprehensive full-stack frontend guide">
  <meta property="og:image" content="https://example.com/og-banner.png">
</head>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#0f172a; border-radius:8px; border:1px solid #334155;">
  <div style="background:#1e293b; border-radius:6px; overflow:hidden; max-width:300px;">
    <div style="background:linear-gradient(135deg, #6366f1, #a855f7); height:80px; display:flex; align-items:center; justify-content:center; color:#fff; font-size:12px; font-weight:bold;">Social Share Preview</div>
    <div style="padding:8px;">
      <h5 style="margin:0; font-size:12px; color:#fff;">DevMaster Interactive Hub</h5>
      <p style="margin:2px 0 0; font-size:10px; color:#94a3b8;">Comprehensive full-stack frontend guide</p>
    </div>
  </div>
</div>`,
    tips: "Keep `<meta name=\"description\">` between 120 and 160 characters for optimal display in Google SERPs."
  },
  {
    id: "html-16",
    title: "16. Inline SVG & Vector Graphics",
    category: "Graphics",
    difficulty: "Intermediate",
    summary: "Render sharp, scalable, styleable icons and illustrations directly in markup.",
    explanation: "SVG (Scalable Vector Graphics) markup can be embedded directly into HTML. This allows you to style strokes, fills, and hover animations directly with CSS without downloading extra image files.",
    code: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"></circle>
  <line x1="12" y1="8" x2="12" y2="12"></line>
  <line x1="12" y1="16" x2="12.01" y2="16"></line>
</svg>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; border-radius:8px; display:flex; align-items:center; gap:12px;">
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
  <div>
    <h5 style="margin:0; color:#f8fafc; font-size:13px;">Scalable Vector Icon</h5>
    <p style="margin:0; font-size:11px; color:#94a3b8;">CSS fill: currentColor compatible</p>
  </div>
</div>`,
    tips: "Always specify `viewBox` on SVGs so they can scale responsively to any container size."
  },
  {
    id: "html-17",
    title: "17. HTML5 `<canvas>` 2D Graphics",
    category: "Graphics",
    difficulty: "Advanced",
    summary: "Draw dynamic raster graphics, animations, and game visuals with JavaScript.",
    explanation: "The `<canvas>` tag is a pixel-based drawing canvas. Unlike SVG, canvas renders raster pixels via JavaScript API (`ctx = canvas.getContext('2d')`), making it ideal for games, data charts, and particles.",
    code: `<canvas id="myCanvas" width="300" height="150"></canvas>

<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#6366f1';
  ctx.fillRect(20, 20, 100, 60);
</script>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; border-radius:8px; text-align:center;">
  <div style="background:#0f172a; border:1px solid #334155; height:70px; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#38bdf8; font-size:12px;">
    🎨 Canvas 2D Rendering Context
  </div>
</div>`,
    tips: "Always set canvas `width` and `height` as HTML attributes, not purely in CSS, to avoid coordinate distortion."
  },
  {
    id: "html-18",
    title: "18. Accessibility & WAI-ARIA Essentials",
    category: "Accessibility",
    difficulty: "Advanced",
    summary: "Make web applications fully usable by screen readers using roles, labels, and live regions.",
    explanation: "WAI-ARIA attributes (`role`, `aria-label`, `aria-expanded`, `aria-live=\"polite\"`) bridge the gap for custom UI components (like custom dropdowns or modals) so assistive technologies know their state and role.",
    code: `<!-- Custom Toggle Button with Accessible State -->
<button 
  aria-expanded="false" 
  aria-controls="mobile-menu"
  aria-label="Toggle navigation menu">
  <span>☰ Menu</span>
</button>

<div id="mobile-menu" role="region" aria-hidden="true">
  <!-- Nav links -->
</div>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; border-radius:8px;">
  <div style="display:flex; align-items:center; gap:8px; background:#0f172a; padding:8px; border-radius:6px;">
    <span style="background:#059669; color:#fff; font-size:10px; padding:2px 6px; border-radius:4px; font-weight:bold;">ARIA PASS</span>
    <span style="font-size:12px; color:#e2e8f0;">aria-label="Search topics"</span>
  </div>
</div>`,
    tips: "First rule of ARIA: Do not use ARIA if a native HTML element (e.g. `<button>`, `<nav>`) already exists!"
  },
  {
    id: "html-19",
    title: "19. Custom Data Attributes (`data-*`)",
    category: "Advanced",
    difficulty: "Intermediate",
    summary: "Embed private custom metadata on HTML elements and access them easily via dataset in JS.",
    explanation: "The `data-*` attribute allows you to store custom information directly in standard HTML elements without interfering with CSS presentation or browser rendering.",
    code: `<button data-topic-id="html-19" data-difficulty="advanced" data-category="frontend">
  Complete Topic
</button>

<script>
  const btn = document.querySelector('button');
  console.log(btn.dataset.topicId); // "html-19"
  console.log(btn.dataset.difficulty); // "advanced"
</script>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; border-radius:8px;">
  <div style="font-size:12px; color:#94a3b8; font-family:monospace;">
    &lt;div <span style="color:#facc15;">data-user-id="9842"</span> <span style="color:#38bdf8;">data-role="admin"</span>&gt;
  </div>
</div>`,
    tips: "You can also target data attributes in CSS selectors, e.g. `[data-status=\"active\"] { color: green; }`."
  },
  {
    id: "html-20",
    title: "20. HTML Entities & Special Characters",
    category: "Typography",
    difficulty: "Beginner",
    summary: "Safely display reserved characters like <, >, &, copyright, and non-breaking spaces.",
    explanation: "Characters like `<` and `>` are reserved in HTML because they define tags. Use entity names or numbers like `&lt;` (<), `&gt;` (>), `&amp;` (&), `&copy;` (©), and `&nbsp;` (non-breaking space) to display them as plain text.",
    code: `<p>To write a tag in HTML, type &lt;h1&gt;Hello&lt;/h1&gt;.</p>
<p>&copy; 2026 CodeLab &amp; Partners. Price: &euro;49 &bull; &infin;</p>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; color:#f8fafc; border-radius:8px; font-size:13px;">
  <p style="margin:0 0 4px;">Code: <code style="color:#facc15; background:#0f172a; padding:2px 6px; border-radius:4px;">&lt;h1&gt;Hello&lt;/h1&gt;</code></p>
  <p style="margin:0; color:#94a3b8;">&copy; 2026 DevMaster &bull; &hearts; Built with passion</p>
</div>`,
    tips: "Always use `&nbsp;` when you want to prevent two words from breaking onto separate lines on small screens."
  },
  {
    id: "html-21",
    title: "21. The `<template>` & `<slot>` Elements",
    category: "Web Components",
    difficulty: "Advanced",
    summary: "Define inert reusable HTML fragments for client-side JavaScript cloning and Web Components.",
    explanation: "Content inside a `<template>` tag is parsed by the browser but NOT rendered on screen until instantiated via JavaScript using `document.importNode(template.content, true)`.",
    code: `<template id="user-card-template">
  <div class="card">
    <h3 class="user-name"></h3>
    <p class="user-role"></p>
  </div>
</template>

<script>
  const temp = document.getElementById('user-card-template');
  const clone = temp.content.cloneNode(true);
  clone.querySelector('.user-name').textContent = "Priya Sharma";
  document.body.appendChild(clone);
</script>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; border-radius:8px;">
  <div style="border:1px solid #6366f1; background:#0f172a; padding:8px; border-radius:6px;">
    <span style="font-size:10px; color:#818cf8; text-transform:uppercase; font-weight:bold;">Instantiated Template Clone</span>
    <p style="margin:2px 0 0; font-size:12px; color:#fff;">Priya Sharma (Frontend Architect)</p>
  </div>
</div>`,
    tips: "Scripts inside `<template>` do not execute and images do not load until the template is cloned into the DOM."
  },
  {
    id: "html-22",
    title: "22. Script Loading: `async`, `defer` & `type=module`",
    category: "Performance",
    difficulty: "Advanced",
    summary: "Master script execution timing to eliminate render-blocking resources and boost speed.",
    explanation: "Standard `<script>` blocks HTML parsing. Adding `defer` downloads the script in parallel and executes it after DOM parsing completes (preserving order). `async` executes immediately as soon as downloaded.",
    code: `<!-- Deferred: executes in order after DOM parsing -->
<script src="app.js" defer></script>

<!-- Async: for independent scripts like analytics -->
<script src="analytics.js" async></script>

<!-- ES Module: automatically deferred & scoped -->
<script type="module" src="main.js"></script>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; border-radius:8px; font-size:12px;">
  <div style="display:flex; flex-direction:column; gap:4px;">
    <span style="color:#4ade80;">✅ defer: Non-blocking, executes in order</span>
    <span style="color:#38bdf8;">⚡ async: Non-blocking, executes on download</span>
    <span style="color:#facc15;">📦 type="module": ES6 imports + deferred by default</span>
  </div>
</div>`,
    tips: "`type=\"module\"` scripts are automatically deferred by default and execute in strict mode."
  },
  {
    id: "html-23",
    title: "23. `contenteditable` & Native Drag and Drop",
    category: "Interactive",
    difficulty: "Intermediate",
    summary: "Turn any HTML element into a rich text editor or draggable interactive element.",
    explanation: "Adding `contenteditable=\"true\"` allows users to edit text directly in the browser. The `draggable=\"true\"` attribute enables HTML5 drag and drop events (`dragstart`, `dragover`, `drop`).",
    code: `<div contenteditable="true" style="border: 1px dashed #6366f1; padding: 10px;">
  Click here to edit this text live in the browser!
</div>

<div draggable="true" ondragstart="event.dataTransfer.setData('text', 'card-1')">
  🖐️ Drag me into another box!
</div>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; border-radius:8px;">
  <div contenteditable="true" style="border:1px dashed #38bdf8; background:#0f172a; padding:8px 12px; border-radius:6px; color:#f8fafc; font-size:12px; outline:none; cursor:text;">
    ✏️ Try editing this text right now!
  </div>
</div>`,
    tips: "Combine `contenteditable` with `document.execCommand` or Modern Selection API to build custom rich-text editors."
  },
  {
    id: "html-24",
    title: "24. Keyboard Accessibility & `tabindex`",
    category: "Accessibility",
    difficulty: "Intermediate",
    summary: "Control keyboard focus navigation order and make non-interactive elements focusable.",
    explanation: "`tabindex=\"0\"` inserts an element into natural tab order. `tabindex=\"-1\"` makes an element programmatically focusable via `.focus()` without being in the tab sequence. Avoid positive values (`tabindex=\"1\"`).",
    code: `<!-- Make custom div card accessible by keyboard -->
<div tabindex="0" role="button" onkeydown="if(event.key==='Enter') handleClick()">
  Accessible Card Button
</div>

<!-- Skip link for keyboard users -->
<a href="#main-content" class="skip-link">Skip to Main Content</a>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; border-radius:8px; display:flex; gap:8px;">
  <div tabindex="0" style="background:#0f172a; border:1px solid #6366f1; padding:6px 12px; border-radius:6px; font-size:12px; color:#a5b4fc; cursor:pointer;">
    Focusable Item (tabindex="0")
  </div>
</div>`,
    tips: "Always include a visible `:focus-visible` outline for keyboard navigation users."
  },
  {
    id: "html-25",
    title: "25. Web App Manifest & Progressive Web Apps",
    category: "Advanced",
    difficulty: "Advanced",
    summary: "Transform standard websites into installable desktop and mobile applications.",
    explanation: "Linking `<link rel=\"manifest\" href=\"/manifest.json\">` allows web browsers to prompt installation, specify full-screen app modes, provide app icons, and configure splash screens.",
    code: `<head>
  <link rel="manifest" href="/manifest.json">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <link rel="apple-touch-icon" href="/icons/icon-192.png">
</head>`,
    preview: `<div style="font-family:sans-serif; padding:12px; background:#1e293b; border-radius:8px; text-align:center;">
  <div style="background:#0f172a; border:1px solid #10b981; padding:8px; border-radius:6px; display:inline-flex; align-items:center; gap:6px;">
    <span style="font-size:16px;">📱</span>
    <span style="font-size:12px; color:#6ee7b7; font-weight:bold;">PWA Installable &bull; Standalone Mode Ready</span>
  </div>
</div>`,
    tips: "Combine the manifest file with a Service Worker to provide complete offline caching functionality."
  }
];

// 5 Skill Check Quiz Questions for HTML
window.htmlQuiz = [
  {
    question: "Which HTML5 semantic element is best suited for wrapping the main navigation links?",
    options: ["<navigation>", "<menu>", "<nav>", "<links>"],
    correctAnswer: 2,
    explanation: "<nav> is the official HTML5 semantic tag intended for major navigation link groups."
  },
  {
    question: "What attribute prevents a page opened via target='_blank' from accessing window.opener?",
    options: ["rel='noopener noreferrer'", "safe='true'", "protect='window'", "sandbox='strict'"],
    correctAnswer: 0,
    explanation: "rel='noopener noreferrer' prevents the opened page from tampering with window.opener."
  },
  {
    question: "Which HTML script attribute downloads the script in parallel and executes it only after DOM parsing is complete?",
    options: ["async", "defer", "lazy", "preload"],
    correctAnswer: 1,
    explanation: "'defer' ensures parallel downloading and defers execution until DOM construction completes."
  },
  {
    question: "How do you open a native HTML <dialog> element as a modal with focus trapping and backdrop?",
    options: ["dialog.open()", "dialog.show()", "dialog.showModal()", "dialog.display()"],
    correctAnswer: 2,
    explanation: "dialog.showModal() opens the dialog in the top-layer with native backdrop and focus trapping."
  },
  {
    question: "Which attribute allows users to edit the text inside an element directly on the webpage?",
    options: ["editable='true'", "contenteditable='true'", "text-edit='on'", "allow-input"],
    correctAnswer: 1,
    explanation: "contenteditable='true' enables in-browser rich text editing directly on standard HTML tags."
  }
];
