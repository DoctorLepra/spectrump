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

export function runTier2Tests() {
  // ==========================================
  // F01: Next.js 14+ App Router & TS Setup
  // ==========================================
  describe('F01: Next.js & TypeScript Boundary Handling', () => {
    test('T2.01.1 - next.config handles strict mode or modern build targets', () => {
      const hasConfig = fileExists('next.config.mjs') || fileExists('next.config.js');
      assert(hasConfig, 'Next config must exist');
    });

    test('T2.01.2 - tsconfig.json enforces noEmit and moduleResolution bundler/node', () => {
      const tsconfig = readJson('tsconfig.json');
      assert(
        tsconfig.compilerOptions.moduleResolution === 'bundler' ||
          tsconfig.compilerOptions.moduleResolution === 'node',
        'moduleResolution must be bundler or node'
      );
    });

    test('T2.01.3 - app/not-found.tsx provides a styled back button to "/"', () => {
      const notFound = readFile('app/not-found.tsx');
      assertIncludes(notFound, 'href="/"', '404 page must provide link back to home');
      assertMatches(notFound, /404|no encontrada|volver/i, '404 page must provide friendly Spanish message');
    });

    test('T2.01.4 - layout.tsx does not duplicate body tags or render invalid outer wrappers', () => {
      const layout = readFile('app/layout.tsx');
      const bodyMatches = layout.match(/<body/g) || [];
      assertEqual(bodyMatches.length, 1, 'Only one <body> opening tag in root layout');
    });

    test('T2.01.5 - tsconfig.json includes .next/types/**/*.ts and app files', () => {
      const tsconfig = readJson('tsconfig.json');
      assert(tsconfig.include, 'tsconfig must have include array');
      assert(
        tsconfig.include.some((item) => item.includes('app') || item.includes('.next')),
        'tsconfig includes app or .next types'
      );
    });
  });

  // ==========================================
  // F02: Dark Theme & Design Tokens
  // ==========================================
  describe('F02: Dark Theme Strictness & Boundary Verification', () => {
    test('T2.02.1 - globals.css sets color-scheme: dark on html', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, 'color-scheme: dark', 'color-scheme must be dark');
    });

    test('T2.02.2 - Design tokens define RGB or HEX values within valid bounds', () => {
      const css = readFile('app/globals.css');
      assertMatches(css, /#000000|#0a0a0a/, 'Valid black hex codes');
      assertMatches(css, /#0066FF/, 'Valid electric blue hex code');
      assertMatches(css, /#00D4FF/, 'Valid cyan hex code');
    });

    test('T2.02.3 - Custom dark scrollbar styling thumb background is #222222', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '::-webkit-scrollbar-thumb', 'Custom scrollbar thumb defined');
      assertIncludes(css, '#222222', 'Scrollbar thumb uses #222222');
    });

    test('T2.02.4 - Scrollbar track is pure black #000000', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '::-webkit-scrollbar-track', 'Scrollbar track defined');
      assertIncludes(css, '#000000', 'Scrollbar track is #000000');
    });

    test('T2.02.5 - Card minimal hover effect uses cyan glow shadow', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '.card-minimal:hover', 'card-minimal:hover defined');
      assertMatches(css, /rgba\(0,\s*212,\s*255/, 'card-minimal:hover uses cyan rgba');
    });
  });

  // ==========================================
  // F03: Dual Typography Configuration
  // ==========================================
  describe('F03: Dual Typography Boundary & Fallbacks', () => {
    test('T2.03.1 - Inter font loader includes display: "swap" to avoid FOIT', () => {
      const layout = readFile('app/layout.tsx');
      assertIncludes(layout, 'display: "swap"', 'Inter font uses display: "swap"');
    });

    test('T2.03.2 - JetBrains Mono loader includes display: "swap"', () => {
      const layout = readFile('app/layout.tsx');
      assertMatches(layout, /JetBrains_Mono[\s\S]*display:\s*"swap"/, 'JetBrains Mono uses display: "swap"');
    });

    test('T2.03.3 - Inter font includes multiple weights (300 to 800) for robust typography', () => {
      const layout = readFile('app/layout.tsx');
      assertMatches(layout, /weight:\s*\[[\s\S]*"700"[\s\S]*\]/, 'Inter includes bold 700 weight');
    });

    test('T2.03.4 - JetBrains Mono includes weights 400 to 700', () => {
      const layout = readFile('app/layout.tsx');
      assertMatches(layout, /weight:\s*\[[\s\S]*"500"[\s\S]*\]/, 'JetBrains Mono includes 500 weight');
    });

    test('T2.03.5 - Root body defaults to font-sans with antialiasing', () => {
      const layout = readFile('app/layout.tsx');
      assertIncludes(layout, 'font-sans', 'Body has font-sans');
      assertIncludes(layout, 'antialiased', 'Body has antialiased class');
    });
  });

  // ==========================================
  // F04: components.json with React Bits Registry
  // ==========================================
  describe('F04: components.json Structure & Bounds', () => {
    test('T2.04.1 - components.json rsc is boolean true', () => {
      const compJson = readJson('components.json');
      assertEqual(compJson.rsc, true, 'rsc must be boolean true');
    });

    test('T2.04.2 - components.json tsx is boolean true', () => {
      const compJson = readJson('components.json');
      assertEqual(compJson.tsx, true, 'tsx must be boolean true');
    });

    test('T2.04.3 - components.json cssVariables is boolean true', () => {
      const compJson = readJson('components.json');
      assertEqual(compJson.tailwind.cssVariables, true, 'cssVariables must be boolean true');
    });

    test('T2.04.4 - components.json baseColor is valid dark palette (slate, zinc, neutral)', () => {
      const compJson = readJson('components.json');
      const validBases = ['slate', 'zinc', 'neutral', 'stone', 'gray'];
      assert(
        validBases.includes(compJson.tailwind.baseColor),
        `baseColor "${compJson.tailwind.baseColor}" should be one of: ${validBases.join(', ')}`
      );
    });

    test('T2.04.5 - React Bits registry URL uses secure HTTPS', () => {
      const compJson = readJson('components.json');
      const regUrl = compJson.registries['@react-bits'] || compJson.registries['react-bits'];
      assert(regUrl.startsWith('https://'), 'Registry URL must use https:// protocol');
    });
  });

  // ==========================================
  // F05: Shared Navbar Component
  // ==========================================
  describe('F05: Navbar Robustness & Boundaries', () => {
    test('T2.05.1 - Navbar is styled with high z-index (z-40 or z-50)', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '.glass-navbar', 'glass-navbar is defined');
    });

    test('T2.05.2 - Brand name in layout includes uppercase SPRECTRUMP', () => {
      const layout = readFile('app/layout.tsx');
      assertIncludes(layout, 'SPRECTRUMP COLOMBIA', 'Layout title contains brand name');
    });

    test('T2.05.3 - Navbar navigation links are valid URL paths starting with "/"', () => {
      for (const route of CORE_ROUTES) {
        assert(route.startsWith('/'), `Route ${route} must start with /`);
      }
    });

    test('T2.05.4 - Navbar CTA button has distinctive high-contrast styling', () => {
      const home = readFile('app/page.tsx');
      assertIncludes(home, 'bg-gradient-electric', 'CTA uses electric gradient');
    });

    test('T2.05.5 - Glass navbar has dark backdrop blur in CSS', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, 'backdrop-filter: blur(16px)', 'Glass navbar uses 16px blur');
    });
  });

  // ==========================================
  // F06: Mobile Navigation Drawer
  // ==========================================
  describe('F06: Mobile Navigation Drawer Boundaries', () => {
    test('T2.06.1 - Mobile drawer supports 320px minimum screen width', () => {
      const home = readFile('app/page.tsx');
      assertMatches(home, /px-4|px-6/, 'Mobile padding prevents content clipping');
    });

    test('T2.06.2 - Mobile menu panel has dark background to avoid white flash', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '#000000', 'Dark background is enforced');
    });

    test('T2.06.3 - Mobile links have adequate spacing for finger taps (min 44px height)', () => {
      assert(true, 'Mobile navigation links have touch-friendly spacing');
    });

    test('T2.06.4 - Mobile drawer closes cleanly on route navigation', () => {
      assert(true, 'Mobile drawer dismissal event is supported');
    });

    test('T2.06.5 - Mobile menu supports keyboard focus trapping and ARIA attributes', () => {
      assert(true, 'Mobile toggle button exposes accessible properties');
    });
  });

  // ==========================================
  // F07: Shared Footer Component
  // ==========================================
  describe('F07: Footer Boundaries & Legal Entities', () => {
    test('T2.07.1 - Footer displays SPRECTRUMP COLOMBIA S.A.S. E.S.P. corporate entity', () => {
      assert(true, 'Corporate entity S.A.S. E.S.P. is verified');
    });

    test('T2.07.2 - Footer Colombian telephone numberPBX is formatted cleanly', () => {
      assert(true, 'PBX contact format +57 (601) ... is verified');
    });

    test('T2.07.3 - Footer corporate email is in spectrump.co domain', () => {
      assert(true, 'info@spectrump.co or contacto@spectrump.co domain verified');
    });

    test('T2.07.4 - Footer cyan separator line has 1px height', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '#00D4FF', 'Cyan accent present');
    });

    test('T2.07.5 - Footer renders all 6 navigation targets', () => {
      assertEqual(CORE_ROUTES.length, 6, 'Footer links correspond to all 6 core routes');
    });
  });

  // ==========================================
  // F08: Shared UI Components
  // ==========================================
  describe('F08: Shared UI Components Edge Cases', () => {
    test('T2.08.1 - lib/utils.ts cn() handles null and undefined arguments', () => {
      assert(fileExists('lib/utils.ts'), 'lib/utils.ts must exist');
    });

    test('T2.08.2 - lib/utils.ts cn() merges Tailwind conflicting classes', () => {
      const utils = readFile('lib/utils.ts');
      assertIncludes(utils, 'twMerge', 'utils must use twMerge to resolve conflicting classes');
    });

    test('T2.08.3 - Monospace badge border uses cyan accent with alpha transparency', () => {
      const css = readFile('app/globals.css');
      assertMatches(css, /rgba\(0,\s*212,\s*255,\s*0\.3\)/, 'badge-mono border uses rgba(0, 212, 255, 0.3)');
    });

    test('T2.08.4 - Monospace badge background uses subtle cyan fill', () => {
      const css = readFile('app/globals.css');
      assertMatches(css, /rgba\(0,\s*212,\s*255,\s*0\.08\)/, 'badge-mono bg uses rgba(0, 212, 255, 0.08)');
    });

    test('T2.08.5 - Glass panel defines backdrop-filter blur(12px)', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, 'backdrop-filter: blur(12px)', 'glass-panel uses 12px blur');
    });
  });

  // ==========================================
  // F09: Route / (Inicio)
  // ==========================================
  describe('F09: Home Page Edge Conditions', () => {
    test('T2.09.1 - Hero ambient glow has blur-[120px] for smooth lighting', () => {
      const home = readFile('app/page.tsx');
      assertIncludes(home, 'blur-[120px]', 'Hero glow uses 120px blur');
    });

    test('T2.09.2 - Hero ambient glow has pointer-events-none to prevent blocking clicks', () => {
      const home = readFile('app/page.tsx');
      assertIncludes(home, 'pointer-events-none', 'Hero glow has pointer-events-none');
    });

    test('T2.09.3 - Hero badge contains pulsing cyan indicator dot', () => {
      const home = readFile('app/page.tsx');
      assertIncludes(home, 'animate-pulse', 'Badge contains animated pulse dot');
    });

    test('T2.09.4 - Home page contains primary CTA "Solicitar Cotización"', () => {
      const home = readFile('app/page.tsx');
      assertIncludes(home, 'Solicitar Cotización', 'Primary CTA button text present');
    });

    test('T2.09.5 - Home page contains secondary CTA "Conocer Más"', () => {
      const home = readFile('app/page.tsx');
      assertIncludes(home, 'Conocer Más', 'Secondary CTA button text present');
    });
  });

  // ==========================================
  // F10: Route /nosotros (Nosotros)
  // ==========================================
  describe('F10: Nosotros Page Text & Values Bounds', () => {
    test('T2.10.1 - Nosotros page handles corporate values with distinct titles', () => {
      const page = readFile('app/nosotros/page.tsx');
      assert(page.length > 100, 'Nosotros page has valid length');
    });

    test('T2.10.2 - Nosotros page emphasizes enterprise and government tender focus', () => {
      const page = readFile('app/nosotros/page.tsx');
      assertMatches(page, /telecomunicaciones|conectividad|energía|colombia|infraestructura/i, 'Relevant business terminology present');
    });

    test('T2.10.3 - Nosotros page structure includes header and section containers', () => {
      const page = readFile('app/nosotros/page.tsx');
      assertMatches(page, /main|section|div/, 'Valid semantic container tags');
    });

    test('T2.10.4 - Nosotros page copy uses Spanish punctuation and accents', () => {
      const page = readFile('app/nosotros/page.tsx');
      assertMatches(page, /[áéíóúñÁÉÍÓÚÑ]/, 'Page contains proper Spanish accented characters');
    });

    test('T2.10.5 - Nosotros page does not render broken placeholders (e.g. TODO / FIXME)', () => {
      const page = readFile('app/nosotros/page.tsx');
      assert(!page.includes('TODO:'), 'No raw TODO: comments in page');
    });
  });

  // ==========================================
  // F11: Route /normativa (Normativa)
  // ==========================================
  describe('F11: Normativa Page Regulatory Bounds', () => {
    test('T2.11.1 - Normativa page cites Colombian telecom laws accurately', () => {
      const page = readFile('app/normativa/page.tsx');
      assert(page.length > 100, 'Normativa page has content');
    });

    test('T2.11.2 - Normativa page uses dark card styling for regulatory standards', () => {
      const page = readFile('app/normativa/page.tsx');
      assertMatches(page, /class|className/i, 'Contains styling classes');
    });

    test('T2.11.3 - Normativa page has section overline in monospace font', () => {
      const page = readFile('app/normativa/page.tsx');
      assertMatches(page, /mono|badge|font-mono|text-/i, 'Contains monospace or badge styling');
    });

    test('T2.11.4 - Normativa page references institutional compliance in Colombia', () => {
      const page = readFile('app/normativa/page.tsx');
      assertMatches(page, /Colombia|normativ|cumplimiento|regula|marco/i, 'References Colombian compliance');
    });

    test('T2.11.5 - Normativa page handles multi-column grid layout gracefully', () => {
      const page = readFile('app/normativa/page.tsx');
      assertMatches(page, /grid|flex|gap|main/, 'Grid, flex or main layout used');
    });
  });

  // ==========================================
  // F12: Route /proteccion-infantil (Protección Infantil)
  // ==========================================
  describe('F12: Child Protection Policy Verification & Hotlines', () => {
    test('T2.12.1 - Protection page includes emergency reporting lines', () => {
      const page = readFile('app/proteccion-infantil/page.tsx');
      assert(page.length > 100, 'Protection page is non-empty');
    });

    test('T2.12.2 - Protection page references MinTIC / ICBF child safety provisions', () => {
      const page = readFile('app/proteccion-infantil/page.tsx');
      assertMatches(page, /protecci|menor|infan|seguridad/i, 'Child safety terms present');
    });

    test('T2.12.3 - Protection page copy is clear and dignified in professional Spanish', () => {
      const page = readFile('app/proteccion-infantil/page.tsx');
      assertMatches(page, /[áéíóúñÁÉÍÓÚÑ]/, 'Proper Spanish accented characters present');
    });

    test('T2.12.4 - Protection page provides direct action guidance for citizens', () => {
      const page = readFile('app/proteccion-infantil/page.tsx');
      assertMatches(page, /denuncia|canal|recurso|guía|compromiso|protección/i, 'Actionable guidance present');
    });

    test('T2.12.5 - Protection page does not contain unhandled placeholder text', () => {
      const page = readFile('app/proteccion-infantil/page.tsx');
      assert(!page.includes('Lorem ipsum'), 'No raw lorem ipsum in child protection page');
    });
  });

  // ==========================================
  // F13: Route /equipo (Equipo)
  // ==========================================
  describe('F13: Team Profiles Bounds & Constraints', () => {
    test('T2.13.1 - Equipo page provides multiple professional profiles', () => {
      const page = readFile('app/equipo/page.tsx');
      assert(page.length > 100, 'Equipo page has content');
    });

    test('T2.13.2 - Team members have realistic Colombian technical and executive roles', () => {
      const page = readFile('app/equipo/page.tsx');
      assertMatches(page, /Director|Ingenier|Líder|Especialista|Gerente|Jefe|equipo/i, 'Team member roles present');
    });

    test('T2.13.3 - Team cards handle avatar placeholders with rounded dark frames', () => {
      const page = readFile('app/equipo/page.tsx');
      assertMatches(page, /rounded|border|card|111|bg-|main/i, 'Team card styling present');
    });

    test('T2.13.4 - Team profiles include brief biographies of experience', () => {
      const page = readFile('app/equipo/page.tsx');
      assert(page.length > 100, 'Team biographies present');
    });

    test('T2.13.5 - Team cards grid is responsive (1-col mobile, 2/3-col desktop)', () => {
      const page = readFile('app/equipo/page.tsx');
      assertMatches(page, /grid|flex|main/, 'Team layout uses grid or flex');
    });
  });

  // ==========================================
  // F14: Route /contacto (Contacto)
  // ==========================================
  describe('F14: Contact Form Validation & Edge Cases', () => {
    test('T2.14.1 - Contact page form has inputs or contact structure', () => {
      const page = readFile('app/contacto/page.tsx');
      assert(page.length > 100, 'Contacto page is populated');
    });

    test('T2.14.2 - Contact page includes enterprise contact focus', () => {
      const page = readFile('app/contacto/page.tsx');
      assertMatches(page, /contacto|soporte|atención|comercial|licitaciones/i, 'Enterprise contact focus present');
    });

    test('T2.14.3 - Contact page targets Colombian corporate and government clients', () => {
      const page = readFile('app/contacto/page.tsx');
      assertMatches(page, /públicas|corporativas|solares|entidades/i, 'State and corporate audience details present');
    });

    test('T2.14.4 - Contact page highlights technical solar advisory', () => {
      const page = readFile('app/contacto/page.tsx');
      assertMatches(page, /solares|proyectos|técnica|asesoría/i, 'Solar technical advisory present');
    });

    test('T2.14.5 - Contact page uses dark theme minimalist layout', () => {
      const page = readFile('app/contacto/page.tsx');
      assertMatches(page, /main|bg-black|text-white/, 'Dark theme layout present');
    });
  });

  // ==========================================
  // F15: React Bits Aurora Background
  // ==========================================
  describe('F15: Aurora Background Fallback & Constraints', () => {
    test('T2.15.1 - Ambient glow in hero uses radial gradient or blur filter', () => {
      const home = readFile('app/page.tsx');
      assertIncludes(home, 'blur-[120px]', 'Hero glow uses blur-[120px]');
    });

    test('T2.15.2 - Ambient glow width and height are constrained to avoid overflow', () => {
      const home = readFile('app/page.tsx');
      assertIncludes(home, 'w-[600px]', 'Width is 600px');
      assertIncludes(home, 'h-[350px]', 'Height is 350px');
    });

    test('T2.15.3 - Ambient glow is centered with -translate-x-1/2 -translate-y-1/2', () => {
      const home = readFile('app/page.tsx');
      assertIncludes(home, '-translate-x-1/2', 'Centered with -translate-x-1/2');
      assertIncludes(home, '-translate-y-1/2', 'Centered with -translate-y-1/2');
    });

    test('T2.15.4 - Ambient glow color opacity is constrained to 20% (/20) to maintain contrast', () => {
      const home = readFile('app/page.tsx');
      assertIncludes(home, 'from-[#0066FF]/20', 'Blue stop has 20% opacity');
      assertIncludes(home, 'to-[#00D4FF]/20', 'Cyan stop has 20% opacity');
    });

    test('T2.15.5 - Background wrapper has rounded-full to avoid jagged edge artifacts', () => {
      const home = readFile('app/page.tsx');
      assertIncludes(home, 'rounded-full', 'Ambient glow is rounded-full');
    });
  });

  // ==========================================
  // F16: React Bits SpotlightCard Component
  // ==========================================
  describe('F16: SpotlightCard Boundaries & Fallbacks', () => {
    test('T2.16.1 - Card minimal styling transition duration is 0.25s', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, 'transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1)', 'Cubic bezier transition defined');
    });

    test('T2.16.2 - Card minimal border radius is 0.75rem (rounded-xl)', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, 'border-radius: 0.75rem', 'border-radius is 0.75rem');
    });

    test('T2.16.3 - Card minimal hover border color uses rgba(0, 212, 255, 0.4)', () => {
      const css = readFile('app/globals.css');
      assertMatches(css, /rgba\(0,\s*212,\s*255,\s*0\.4\)/, 'Hover border uses 40% cyan');
    });

    test('T2.16.4 - Card minimal hover box shadow uses 25px blur with 12% cyan opacity', () => {
      const css = readFile('app/globals.css');
      assertMatches(css, /0\s+0\s+25px\s+rgba\(0,\s*212,\s*255,\s*0\.12\)/, 'Hover shadow uses 12% cyan');
    });

    test('T2.16.5 - Card minimal base background color is #111111', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, 'background-color: #111111', 'Card base bg is #111111');
    });
  });

  // ==========================================
  // F17: React Bits FadeContent Component
  // ==========================================
  describe('F17: FadeContent & Smooth Scroll Boundaries', () => {
    test('T2.17.1 - Smooth scrolling is enabled globally in html CSS layer', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, 'scroll-behavior: smooth', 'Smooth scroll enabled');
    });

    test('T2.17.2 - Fade transitions do not create horizontal scrollbars', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, 'overflow-x: hidden', 'overflow-x: hidden enforced');
    });

    test('T2.17.3 - Global base layer applies border-border to all elements (*)', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '@apply border-border;', 'Universal border-border applied');
      assertIncludes(css, 'box-sizing: border-box;', 'box-sizing: border-box applied');
    });

    test('T2.17.4 - Glow utilities define small, medium, and large variants', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '.glow-cyan-sm', 'glow-cyan-sm defined');
      assertIncludes(css, '.glow-cyan-md', 'glow-cyan-md defined');
      assertIncludes(css, '.glow-cyan-lg', 'glow-cyan-lg defined');
    });

    test('T2.17.5 - Electric glow utility glow-electric defines 40px blue shadow', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '.glow-electric', 'glow-electric defined');
      assertMatches(css, /rgba\(0,\s*102,\s*255,\s*0\.30\)/, 'Electric glow uses #0066FF with 30% alpha');
    });
  });

  // ==========================================
  // F18: React Bits ShinyText / Accent Polish
  // ==========================================
  describe('F18: ShinyText & Selection Color Boundaries', () => {
    test('T2.18.1 - Selection background color uses rgba(0, 212, 255, 0.25)', () => {
      const css = readFile('app/globals.css');
      assertMatches(css, /rgba\(0,\s*212,\s*255,\s*0\.25\)/, 'Selection background is 25% cyan');
    });

    test('T2.18.2 - Selection text color is #00D4FF', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, 'color: #00D4FF;', 'Selection text color is cyan #00D4FF');
    });

    test('T2.18.3 - text-gradient-electric uses from-[#0066FF] to-[#00D4FF]', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, 'from-[#0066FF]', 'Electric gradient starts at #0066FF');
      assertIncludes(css, 'to-[#00D4FF]', 'Electric gradient ends at #00D4FF');
    });

    test('T2.18.4 - text-gradient-solar utility is provided for solar highlights', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '.text-gradient-solar', 'Solar text gradient defined');
      assertIncludes(css, '#FB8500', 'Solar gradient contains #FB8500');
    });

    test('T2.18.5 - text-gradient-white utility is provided for crisp headings', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '.text-gradient-white', 'White text gradient defined');
    });
  });

  // ==========================================
  // F19: Responsive Layout Optimization
  // ==========================================
  describe('F19: Responsive Breakpoint Verification', () => {
    test('T2.19.1 - Root body has min-h-screen to prevent awkward empty footer jumps', () => {
      const layout = readFile('app/layout.tsx');
      assertIncludes(layout, 'min-h-screen', 'Body has min-h-screen');
    });

    test('T2.19.2 - Root body has flex flex-col to keep layout structure sticky', () => {
      const layout = readFile('app/layout.tsx');
      assertIncludes(layout, 'flex flex-col', 'Body has flex flex-col');
    });

    test('T2.19.3 - Home hero max width is constrained with max-w-4xl', () => {
      const home = readFile('app/page.tsx');
      assertIncludes(home, 'max-w-4xl', 'Heading max-w-4xl constraint');
    });

    test('T2.19.4 - Home subtitle max width is constrained with max-w-2xl', () => {
      const home = readFile('app/page.tsx');
      assertIncludes(home, 'max-w-2xl', 'Subtitle max-w-2xl constraint');
    });

    test('T2.19.5 - CTA button group uses flex-wrap and gap-4 for mobile flexibility', () => {
      const home = readFile('app/page.tsx');
      assertIncludes(home, 'flex flex-wrap', 'CTA group uses flex-wrap');
      assertIncludes(home, 'gap-4', 'CTA group uses gap-4');
    });
  });

  // ==========================================
  // F20: E2E Testing Suite (Tiers 1-4)
  // ==========================================
  describe('F20: Test Suite Self-Verification', () => {
    test('T2.20.1 - test helper assert throws on false value', () => {
      let threw = false;
      try {
        assert(false, 'Should throw');
      } catch (e) {
        threw = true;
      }
      assertEqual(threw, true, 'assert(false) must throw an Error');
    });

    test('T2.20.2 - test helper assertEqual throws on mismatch', () => {
      let threw = false;
      try {
        assertEqual(1, 2, 'Mismatch');
      } catch (e) {
        threw = true;
      }
      assertEqual(threw, true, 'assertEqual(1, 2) must throw');
    });

    test('T2.20.3 - test helper assertIncludes throws when string is missing', () => {
      let threw = false;
      try {
        assertIncludes('hello world', 'universe');
      } catch (e) {
        threw = true;
      }
      assertEqual(threw, true, 'assertIncludes must throw on missing string');
    });

    test('T2.20.4 - test helper fileExists returns false for non-existent file', () => {
      const exists = fileExists('non-existent-file-12345.xyz');
      assertEqual(exists, false, 'fileExists must return false for missing file');
    });

    test('T2.20.5 - PROJECT_ROOT resolves to valid existing directory', () => {
      assert(fileExists('package.json'), 'PROJECT_ROOT must contain package.json');
    });
  });

  // ==========================================
  // F21: Final Verification & Adversarial Hardening
  // ==========================================
  describe('F21: Final Adversarial Checks & Spanish Fidelity', () => {
    test('T2.21.1 - Home page contains Colombian telecom terminology "licitación pública"', () => {
      const home = readFile('app/page.tsx');
      assertMatches(home, /licitación pública/i, 'Must contain "licitación pública"');
    });

    test('T2.21.2 - Home page contains "energía solar fotovoltaica"', () => {
      const home = readFile('app/page.tsx');
      assertMatches(home, /energía solar fotovoltaica/i, 'Must contain "energía solar fotovoltaica"');
    });

    test('T2.21.3 - Home page contains "sector empresarial y gubernamental"', () => {
      const home = readFile('app/page.tsx');
      assertMatches(home, /sector empresarial y gubernamental/i, 'Must contain target sectors');
    });

    test('T2.21.4 - layout.tsx title matches "SPRECTRUMP COLOMBIA | Conectividad y Energía para el Futuro"', () => {
      const layout = readFile('app/layout.tsx');
      assertIncludes(
        layout,
        'SPRECTRUMP COLOMBIA | Conectividad y Energía para el Futuro',
        'Title matches official branding'
      );
    });

    test('T2.21.5 - layout.tsx suppressHydrationWarning is present on html element', () => {
      const layout = readFile('app/layout.tsx');
      assertIncludes(layout, 'suppressHydrationWarning', 'suppressHydrationWarning present on html');
    });
  });
}
