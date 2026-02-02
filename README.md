<img width="1910" height="824" alt="image" src="https://github.com/user-attachments/assets/4c43463b-7237-4260-98f6-4da119d94539" />
<img width="1913" height="818" alt="image" src="https://github.com/user-attachments/assets/c636982c-b897-418e-8a10-fda0f9c64880" />
<img width="1910" height="841" alt="image" src="https://github.com/user-attachments/assets/370d8830-c0f6-4b75-9d6e-892be41255ba" />
<img width="1914" height="823" alt="image" src="https://github.com/user-attachments/assets/98d1ffbd-702f-490c-b923-c379739ffbed" />
<img width="1916" height="837" alt="image" src="https://github.com/user-attachments/assets/f26046a5-e47b-4f4a-a349-6c91e32b5a66" />
<img width="1912" height="835" alt="image" src="https://github.com/user-attachments/assets/d678d28a-d2ee-49f1-a9b0-3a9c389aeb6f" />
<img width="1918" height="829" alt="image" src="https://github.com/user-attachments/assets/58d9207e-e6b8-4d18-8408-f836414a7013" />
<img width="1909" height="820" alt="image" src="https://github.com/user-attachments/assets/3c54fe8c-34e6-41fc-af59-0efe24b54275" />
<img width="1919" height="824" alt="image" src="https://github.com/user-attachments/assets/cd73cd21-1687-4a38-bd55-bebe136a1aca" />

Bootstrap
Purpose: Demonstrates integrating Vite with Bootstrap to prototype responsive layouts quickly.
Contents: A Vite project scaffold, index.html, and a simple component structure in src showcasing grid, navbar, and utility classes.
Experiments: Tested Bootstrap CDN vs. local npm install, examined theming by overriding CSS variables, and compared performance between compiled and dev modes.
Learnings: How to scope Bootstrap styles to avoid global collisions and how to combine Bootstrap with custom CSS modules.
Notes: Useful as a quick UI prototype; keep vendor CSS minimal to reduce bundle size.
Files of interest: App.jsx and public/index.html demonstrate Bootstrap usage.

card
Purpose: Small playground for card components and visual styling patterns.
Contents: Multiple card variations (image top, side-by-side, with footer), CSS demos in App.css, and small layout experiments.
Experiments: Explored shadow/light modes, hover interactions, and image aspect handling with object-fit.
Learnings: Best practices for accessible card markup, focus states, and responsive breakpoints for cards.
Notes: Intended as a component reference for reuse across other projects.
Files of interest: App.jsx, App.css.

ComLib
Purpose: Component library experiment to centralize reusable UI pieces.
Contents: Small set of components (buttons, inputs, badges) with consistent props and style tokens.
Experiments: Prop-driven theming, API surface design, and packaging components for reuse across projects.
Learnings: Component API ergonomics, default props vs. CSS-only variants, and lightweight documentation patterns.
Notes: Not published—kept local; consider moving to a mono-repo or npm package later.
Files of interest: src components folder.

FormSPA
Purpose: Single-page app focused on form handling, validation, and UX patterns.
Contents: Forms with controlled inputs, client-side validation, and example submission flows.
Experiments: Implemented both simple validators and schema-based validation (pattern demonstration), and used debounced input checks.
Learnings: UX for inline errors, preventing double submissions, and basic accessibility improvements for forms (aria attributes).
Notes: Good reference for future signup/login forms; consider integrating a validation lib if complexity grows.
Files of interest: App.jsx, src/components/* form pieces.

LinkNav
Purpose: Explore link navigation behaviors and router link patterns.
Contents: Small demos showing Link, NavLink, anchor fallback, and programmatic navigation.
Experiments: Compared NavLink active styles, hash vs. pathname navigation, and external link handling.
Learnings: How to maintain active state, accessibility of link text, and when to prefer programmatic navigation.
Notes: Useful reference for routing style guidelines in other SPAs.
Files of interest: main.jsx, App.jsx (navigation examples).

MultiSPARouting
Purpose: Demonstrates multiple SPA routing techniques and nested route patterns.
Contents: A Vite app with multiple routes (/, /dashboard) and simple page components.
Experiments: Implemented nested routes, Link navigation, and asset imports (images/SVG). Also tested route-based code-splitting ideas.
Learnings: How BrowserRouter, Routes, and Route compose; pitfalls with JSX syntax (fixed an img duplication in App.jsx).
Notes: The routing demo is minimal and intended for teaching route structure; can be expanded with lazy loading.
Files of interest: App.jsx (fixed JSX), assets for images.

RoutingSPA
Purpose: A deeper SPA routing example covering dynamic routes, params, and protected routes patterns.
Contents: Multiple pages, sample protected route logic, and route guards for basic auth flows.
Experiments: Simulated auth context to gate routes, used route params for detail pages, and tested 404 handling.
Learnings: Patterns for route protection, location-based redirects, and structuring route config for scalability.
Notes: Good starting point for apps requiring auth + nested routing; integrate real auth provider later.
Files of interest: pages, App.jsx routing config.

Simple
Purpose: Minimal starter app to test Vite, JSX, and basic asset loading without extra dependencies.
Contents: Barebones index.html, main.jsx, and a single App.jsx with trivial markup.
Experiments: Fast feedback loop for testing framework upgrades and small CSS experiments.
Learnings: Useful for isolating issues—if a bug appears here, it's likely infra-related.
Notes: Keep it tiny; use for reproducing minimal test cases.
Files of interest: main.jsx, App.jsx.

SPA
Purpose: Larger SPA example combining routing, assets, and multiple pages into a demo application.
Contents: Pages, shared components, assets, and a slightly richer layout than the minimal examples.
Experiments: Tested layout composition, global state patterns, and asset optimizations in Vite build.
Learnings: How to structure a mid-size SPA; tradeoffs between centralized state vs. local state per page.
Notes: Serves as an integration playground; consider adding tests and CI for stability.
Files of interest: pages, components, vite.config.js.

UIDesign
Purpose: Visual and UI experimentation—color systems, spacing, and component visuals.
Contents: Style explorations, mockups, and working prototypes of UI components with CSS focus.
Experiments: Design tokens, CSS variables, and different layout systems (flex vs. grid).
Learnings: How small token systems make theme changes easier; recommended CSS organization strategies.
Notes: Treat as a design system seed for future component libraries.
Files of interest: src styles and pattern files.
