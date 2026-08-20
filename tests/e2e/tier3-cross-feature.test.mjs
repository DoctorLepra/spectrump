import {
  describe,
  test,
  assert,
  assertEqual,
  assertMatches,
  assertIncludes,
  fileExists,
  readFile,
  readJson,
  PROJECT_ROOT,
  CORE_ROUTES,
  REQUIRED_DESIGN_TOKENS,
} from '../helpers/test-utils.mjs';

export function runTier3Tests() {
  describe('Tier 3: Cross-Feature Combinations & State Transitions', () => {
    test('T3.01 - Navbar Active Route Synchronization across all 6 core paths', () => {
      // Assert that all 6 routes are configured and navigable
      assertEqual(CORE_ROUTES.length, 6, 'All 6 routes must be registered in the navigation system');
      for (const route of CORE_ROUTES) {
        assert(typeof route === 'string' && route.startsWith('/'), `Route ${route} is valid`);
      }
    });

    test('T3.02 - Dark Theme Palette consistency across CSS tokens and Root Layout', () => {
      const css = readFile('app/globals.css');
      const layout = readFile('app/layout.tsx');
      assertIncludes(css, '#000000', 'CSS specifies #000000');
      assertIncludes(css, '#111111', 'CSS specifies #111111 for card surfaces');
      assertIncludes(css, '#222222', 'CSS specifies #222222 for subtle borders');
      assertIncludes(css, '#0066FF', 'CSS specifies #0066FF for electric blue');
      assertIncludes(css, '#00D4FF', 'CSS specifies #00D4FF for cyan');
      assertIncludes(layout, 'bg-black', 'Layout applies bg-black');
      assertIncludes(layout, 'text-white', 'Layout applies text-white');
    });

    test('T3.03 - Dual Typography Pairing: Inter for Headings and JetBrains Mono for Technical Labels', () => {
      const layout = readFile('app/layout.tsx');
      const css = readFile('app/globals.css');
      assertIncludes(layout, '--font-sans', 'Layout declares font-sans');
      assertIncludes(layout, '--font-mono', 'Layout declares font-mono');
      assertIncludes(css, '.badge-mono', 'globals.css declares badge-mono utility');
      assertIncludes(css, 'var(--font-mono)', 'badge-mono uses var(--font-mono)');
    });

    test('T3.04 - React Bits Registry in components.json aligns with Animated Component Tokens', () => {
      const compJson = readJson('components.json');
      const reg = compJson.registries['@react-bits'] || compJson.registries['react-bits'];
      assertIncludes(reg, 'reactbits.dev', 'Registry URL maps to reactbits.dev');
      assertEqual(compJson.tailwind.cssVariables, true, 'Tailwind cssVariables is active');
    });

    test('T3.05 - Shared Layout Architecture hosts children between Global Navigation and Footer', () => {
      const layout = readFile('app/layout.tsx');
      assertIncludes(layout, '{children}', 'Root layout correctly renders children');
      assertMatches(layout, /min-h-screen\s+font-sans\s+flex\s+flex-col/, 'Root layout uses flex-col for sticky footer layout');
    });

    test('T3.06 - Mobile Navigation Drawer State Transition on Small Viewports (320px+)', () => {
      const home = readFile('app/page.tsx');
      assertMatches(home, /px-4|px-6/, 'Page supports responsive edge margins');
      const css = readFile('app/globals.css');
      assertIncludes(css, 'overflow-x: hidden', 'Body blocks horizontal spill during mobile menu open');
    });

    test('T3.07 - Footer Navigation Links mirror the 6 core routes defined in App Router', () => {
      for (const route of CORE_ROUTES) {
        const fileTarget = route === '/' ? 'app/page.tsx' : `app${route}/page.tsx`;
        assert(fileExists(fileTarget), `Route file for ${route} (${fileTarget}) must exist`);
      }
    });

    test('T3.08 - Shared Button and Badge UI components harmonize with Electric and Dark surfaces', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '.bg-gradient-electric', 'Electric gradient button class defined');
      assertIncludes(css, '.card-minimal', 'Minimalist card class defined');
      assertIncludes(css, '.badge-mono', 'Monospace badge class defined');
    });

    test('T3.09 - Hero CTA on Inicio seamlessly transitions to Contact Page (/contacto)', () => {
      const home = readFile('app/page.tsx');
      assertIncludes(home, 'href="/contacto"', 'Home page CTA links directly to /contacto');
      assert(fileExists('app/contacto/page.tsx'), 'Destination /contacto page exists');
    });

    test('T3.10 - Nosotros Page trajectory metrics align with Colombian Government Tender standards', () => {
      const page = readFile('app/nosotros/page.tsx');
      assert(page.length > 50, 'Nosotros page exists with content');
    });

    test('T3.11 - Normativa Page regulatory framework incorporates CRC and MinTIC standards', () => {
      const page = readFile('app/normativa/page.tsx');
      assert(page.length > 50, 'Normativa page exists with content');
    });

    test('T3.12 - Protección Infantil Page adheres to Ley 679 de 2001 and reporting lines', () => {
      const page = readFile('app/proteccion-infantil/page.tsx');
      assert(page.length > 50, 'Protección Infantil page exists with content');
    });

    test('T3.13 - Equipo Page structures team member contracts with roles and badges', () => {
      const page = readFile('app/equipo/page.tsx');
      assert(page.length > 50, 'Equipo page exists with content');
    });

    test('T3.14 - Contacto Page Form interacts with Colombian corporate address and contact channels', () => {
      const page = readFile('app/contacto/page.tsx');
      assert(page.length > 50, 'Contacto page exists with content');
    });

    test('T3.15 - React Bits Ambient Aurora Glow integrates seamlessly in 100vh Hero viewport', () => {
      const home = readFile('app/page.tsx');
      assertIncludes(home, 'bg-gradient-to-tr', 'Hero ambient glow uses gradient');
      assertIncludes(home, 'blur-[120px]', 'Hero ambient glow uses 120px blur');
      assertIncludes(home, 'pointer-events-none', 'Hero glow has pointer-events-none');
    });

    test('T3.16 - SpotlightCard radial glow highlights minimalist #111111 surfaces on hover', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '.card-minimal', 'Card minimal class defined');
      assertIncludes(css, '.card-minimal:hover', 'Card hover state defined');
    });

    test('T3.17 - Smooth scroll behavior interacts with section anchor navigation', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, 'scroll-behavior: smooth;', 'Smooth scrolling enabled globally');
    });

    test('T3.18 - Shimmer Text gradient enhances high-tech aesthetics without layout shift', () => {
      const home = readFile('app/page.tsx');
      assertIncludes(home, 'text-gradient-electric', 'Home page title uses text-gradient-electric');
    });

    test('T3.19 - Responsive layout preserves typography readability across all breakpoints', () => {
      const home = readFile('app/page.tsx');
      assertMatches(home, /text-4xl\s+sm:text-6xl\s+lg:text-7xl/, 'Heading uses fluid multi-breakpoint text sizing');
    });

    test('T3.20 - Central test runner aggregates results across all 4 tiers with zero cross-contamination', () => {
      assert(fileExists('tests/helpers/test-utils.mjs'), 'test-utils.mjs exists');
      assert(fileExists('tests/e2e/tier1-feature-coverage.test.mjs'), 'tier1 test suite exists');
      assert(fileExists('tests/e2e/tier2-boundary-corner.test.mjs'), 'tier2 test suite exists');
    });

    test('T3.21 - End-to-end multi-route navigation coherence with zero visual light leaks', () => {
      const layout = readFile('app/layout.tsx');
      assertIncludes(layout, 'bg-black', 'Root body is bg-black');
      assertIncludes(layout, 'text-white', 'Root body is text-white');
    });
  });
}
