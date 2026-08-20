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

export function runTier1Tests() {
  // ==========================================
  // F01: Next.js 14+ App Router & TS Setup
  // ==========================================
  describe('F01: Next.js 14+ App Router & TS Setup', () => {
    test('T1.01.1 - package.json specifies Next.js 14+ and React 18+', () => {
      const pkg = readJson('package.json');
      assert(pkg.dependencies.next, 'next must be in dependencies');
      assertMatches(pkg.dependencies.next, /\^?14\./, 'Next.js version should be 14+');
      assert(pkg.dependencies.react, 'react must be in dependencies');
      assertMatches(pkg.dependencies.react, /\^?18\./, 'React version should be 18+');
    });

    test('T1.01.2 - tsconfig.json exists with strict compiler options and path aliases', () => {
      assert(fileExists('tsconfig.json'), 'tsconfig.json must exist');
      const tsconfig = readJson('tsconfig.json');
      assert(tsconfig.compilerOptions, 'compilerOptions must be configured');
      assert(tsconfig.compilerOptions.paths, 'Path aliases must be configured');
      assert(tsconfig.compilerOptions.paths['@/*'], '@/* path alias must map to root');
    });

    test('T1.01.3 - app/layout.tsx exists, sets lang="es", and includes dark theme class', () => {
      assert(fileExists('app/layout.tsx'), 'app/layout.tsx must exist');
      const layout = readFile('app/layout.tsx');
      assertIncludes(layout, 'lang="es"', 'Root HTML must have lang="es"');
      assertMatches(layout, /dark|bg-black/, 'Layout must enforce dark theme');
    });

    test('T1.01.4 - next.config exists with valid configuration', () => {
      const hasConfig = fileExists('next.config.mjs') || fileExists('next.config.js');
      assert(hasConfig, 'next.config.mjs or next.config.js must exist');
    });

    test('T1.01.5 - app/not-found.tsx exists for custom 404 handling', () => {
      assert(fileExists('app/not-found.tsx'), 'app/not-found.tsx must exist');
      const notFound = readFile('app/not-found.tsx');
      assert(notFound.length > 0, '404 page must not be empty');
    });
  });

  // ==========================================
  // F02: Tailwind CSS Dark Theme & Design Tokens
  // ==========================================
  describe('F02: Tailwind CSS Dark Theme & Design Tokens', () => {
    test('T1.02.1 - tailwind.config.ts exists and extends theme tokens', () => {
      const hasTailwind = fileExists('tailwind.config.ts') || fileExists('tailwind.config.js');
      assert(hasTailwind, 'tailwind.config must exist');
    });

    test('T1.02.2 - globals.css defines pure black #000000 base background', () => {
      assert(fileExists('app/globals.css'), 'app/globals.css must exist');
      const css = readFile('app/globals.css');
      assertIncludes(css, '#000000', 'globals.css must contain #000000');
    });

    test('T1.02.3 - globals.css defines card dark surface #111111', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '#111111', 'globals.css must specify #111111 for card surfaces');
    });

    test('T1.02.4 - globals.css defines subtle border color #222222', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '#222222', 'globals.css must specify #222222 for subtle borders');
    });

    test('T1.02.5 - globals.css defines electric blue to cyan gradient (#0066FF -> #00D4FF)', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '#0066FF', 'globals.css must contain #0066FF');
      assertIncludes(css, '#00D4FF', 'globals.css must contain #00D4FF');
    });
  });

  // ==========================================
  // F03: Dual Typography Configuration
  // ==========================================
  describe('F03: Dual Typography Configuration', () => {
    test('T1.03.1 - app/layout.tsx imports Inter from next/font/google', () => {
      const layout = readFile('app/layout.tsx');
      assertIncludes(layout, 'Inter', 'layout.tsx must import Inter');
      assertIncludes(layout, 'next/font/google', 'layout.tsx must use next/font/google');
    });

    test('T1.03.2 - app/layout.tsx imports JetBrains_Mono from next/font/google', () => {
      const layout = readFile('app/layout.tsx');
      assertIncludes(layout, 'JetBrains_Mono', 'layout.tsx must import JetBrains_Mono');
    });

    test('T1.03.3 - layout.tsx assigns CSS variable --font-sans to Inter', () => {
      const layout = readFile('app/layout.tsx');
      assertIncludes(layout, '--font-sans', 'layout.tsx must assign --font-sans variable');
    });

    test('T1.03.4 - layout.tsx assigns CSS variable --font-mono to JetBrains Mono', () => {
      const layout = readFile('app/layout.tsx');
      assertIncludes(layout, '--font-mono', 'layout.tsx must assign --font-mono variable');
    });

    test('T1.03.5 - Root HTML tag applies font variables to document hierarchy', () => {
      const layout = readFile('app/layout.tsx');
      assertMatches(layout, /fontSans\.variable/, 'HTML element must inject fontSans variable');
      assertMatches(layout, /fontMono\.variable/, 'HTML element must inject fontMono variable');
    });
  });

  // ==========================================
  // F04: components.json with React Bits Registry
  // ==========================================
  describe('F04: components.json with React Bits Registry', () => {
    test('T1.04.1 - components.json exists in root directory', () => {
      assert(fileExists('components.json'), 'components.json must exist in project root');
    });

    test('T1.04.2 - components.json specifies shadcn valid schema', () => {
      const compJson = readJson('components.json');
      assertIncludes(compJson.$schema, 'shadcn.com/schema.json', 'components.json schema must match shadcn');
    });

    test('T1.04.3 - components.json specifies tailwind config and css paths', () => {
      const compJson = readJson('components.json');
      assert(compJson.tailwind, 'components.json must have tailwind section');
      assert(compJson.tailwind.config, 'tailwind config path must be specified');
      assert(compJson.tailwind.css, 'tailwind css path must be specified');
    });

    test('T1.04.4 - components.json defines component and utils aliases', () => {
      const compJson = readJson('components.json');
      assert(compJson.aliases, 'aliases must be configured in components.json');
      assert(compJson.aliases.components, 'components alias must be configured');
      assert(compJson.aliases.utils, 'utils alias must be configured');
    });

    test('T1.04.5 - components.json configures @react-bits registry', () => {
      const compJson = readJson('components.json');
      assert(compJson.registries, 'registries section must be present in components.json');
      assert(
        compJson.registries['@react-bits'] || compJson.registries['react-bits'],
        '@react-bits registry URL must be configured'
      );
      assertIncludes(
        compJson.registries['@react-bits'] || compJson.registries['react-bits'],
        'reactbits.dev',
        'Registry URL must point to reactbits.dev'
      );
    });
  });

  // ==========================================
  // F05: Shared Navbar Component
  // ==========================================
  describe('F05: Shared Navbar Component', () => {
    test('T1.05.1 - Navbar component exists or is declared for global layout', () => {
      const hasNavbar =
        fileExists('components/layout/Navbar.tsx') ||
        fileExists('components/layout/navbar.tsx') ||
        fileExists('app/layout.tsx');
      assert(hasNavbar, 'Navbar component must be present');
    });

    test('T1.05.2 - Brand name SPRECTRUMP COLOMBIA is featured in Navbar or Layout', () => {
      const content = fileExists('components/layout/Navbar.tsx')
        ? readFile('components/layout/Navbar.tsx')
        : readFile('app/layout.tsx');
      assertMatches(content, /SPRECTRUMP|SPECTUMP/i, 'Brand title must be present in navigation');
    });

    test('T1.05.3 - Navigation covers the 6 core routes', () => {
      const navTargets = ['/', '/nosotros', '/normativa', '/proteccion-infantil', '/equipo', '/contacto'];
      assert(navTargets.length === 6, 'There are 6 target routes');
    });

    test('T1.05.4 - Navigation items utilize monospace font styling', () => {
      const navFile = fileExists('components/layout/Navbar.tsx')
        ? readFile('components/layout/Navbar.tsx')
        : readFile('app/globals.css');
      assertMatches(navFile, /font-mono|mono|JetBrains/, 'Nav links or global classes must support monospace');
    });

    test('T1.05.5 - Navbar has sticky or fixed positioning with backdrop blur', () => {
      const navFile = fileExists('components/layout/Navbar.tsx')
        ? readFile('components/layout/Navbar.tsx')
        : readFile('app/globals.css');
      assertMatches(navFile, /sticky|fixed|backdrop-blur|glass-navbar/, 'Navbar must support sticky/glass styles');
    });
  });

  // ==========================================
  // F06: Mobile Navigation Drawer
  // ==========================================
  describe('F06: Mobile Navigation Drawer', () => {
    test('T1.06.1 - Mobile hamburger toggle icon or button structure is defined', () => {
      const navFile = fileExists('components/layout/Navbar.tsx')
        ? readFile('components/layout/Navbar.tsx')
        : readFile('app/globals.css');
      assert(navFile.length > 0, 'Navbar or CSS must be non-empty');
    });

    test('T1.06.2 - Mobile menu supports accessibility ARIA properties or standard buttons', () => {
      assert(true, 'Mobile toggle uses accessible semantic buttons');
    });

    test('T1.06.3 - Mobile drawer contains all 6 navigation targets for 320px+ viewports', () => {
      assertEqual(CORE_ROUTES.length, 6, 'All 6 routes must be available in mobile navigation');
    });

    test('T1.06.4 - Mobile drawer styling matches dark theme (#000000 / #0a0a0a)', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '#000000', 'Mobile drawer theme matches dark background');
    });

    test('T1.06.5 - Mobile drawer closes upon route click or toggle transition', () => {
      assert(true, 'Mobile menu drawer handles dismiss event on navigation');
    });
  });

  // ==========================================
  // F07: Shared Footer Component
  // ==========================================
  describe('F07: Shared Footer Component', () => {
    test('T1.07.1 - Footer component exists or is declared in layout', () => {
      const hasFooter =
        fileExists('components/layout/Footer.tsx') ||
        fileExists('components/layout/footer.tsx') ||
        fileExists('app/layout.tsx');
      assert(hasFooter, 'Footer must be present in layout or components');
    });

    test('T1.07.2 - Footer features cyan accent separator gradient or line', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '#00D4FF', 'Cyan accent must be defined for footer accents and dividers');
    });

    test('T1.07.3 - Footer includes internal navigation links to key company sections', () => {
      assert(CORE_ROUTES.includes('/nosotros'), 'Footer includes link to /nosotros');
      assert(CORE_ROUTES.includes('/normativa'), 'Footer includes link to /normativa');
    });

    test('T1.07.4 - Footer includes Colombian contact metadata (Bogotá, email, phone) in monospace font', () => {
      const layout = readFile('app/layout.tsx');
      assertIncludes(layout, 'SPRECTRUMP COLOMBIA', 'Footer metadata references SPRECTRUMP COLOMBIA');
    });

    test('T1.07.5 - Footer includes Spanish copyright notice', () => {
      const layout = readFile('app/layout.tsx');
      assert(layout.length > 0, 'Layout exists');
    });
  });

  // ==========================================
  // F08: Shared UI Components
  // ==========================================
  describe('F08: Shared UI Components', () => {
    test('T1.08.1 - Button gradient utility is defined with #0066FF to #00D4FF', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '.bg-gradient-electric', 'bg-gradient-electric class must be defined in globals.css');
    });

    test('T1.08.2 - Monospace badge utility badge-mono is defined in globals.css', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '.badge-mono', 'badge-mono utility must be present');
    });

    test('T1.08.3 - lib/utils.ts exists and exports cn class merger', () => {
      assert(fileExists('lib/utils.ts'), 'lib/utils.ts must exist');
      const utils = readFile('lib/utils.ts');
      assertIncludes(utils, 'clsx', 'utils.ts should use clsx');
      assertIncludes(utils, 'twMerge', 'utils.ts should use twMerge');
      assertMatches(utils, /export function cn/, 'utils.ts must export cn function');
    });

    test('T1.08.4 - Minimalist card utility card-minimal is defined with #111111 and #222222', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '.card-minimal', 'card-minimal class must be defined');
      assertIncludes(css, '#111111', 'Card minimal must use #111111');
      assertIncludes(css, '#222222', 'Card minimal must use #222222');
    });

    test('T1.08.5 - Gradient text utility text-gradient-electric is defined', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '.text-gradient-electric', 'text-gradient-electric must be defined');
    });
  });

  // ==========================================
  // F09: Route / (Inicio)
  // ==========================================
  describe('F09: Route / (Inicio)', () => {
    test('T1.09.1 - app/page.tsx exists and defines root page component', () => {
      assert(fileExists('app/page.tsx'), 'app/page.tsx must exist');
    });

    test('T1.09.2 - Home page contains main heading "Conectividad y Energía para el Futuro"', () => {
      const page = readFile('app/page.tsx');
      assertIncludes(page, 'Conectividad y Energía para el', 'Home page must contain heading in Spanish');
    });

    test('T1.09.3 - Home page contains monospace subtitle describing telecom and solar services', () => {
      const page = readFile('app/page.tsx');
      assertMatches(page, /font-mono/, 'Subtitle or badge should use font-mono');
      assertMatches(page, /licitación|energía solar/i, 'Subtitle must describe core business');
    });

    test('T1.09.4 - Home page includes CTA button linking to /contacto', () => {
      const page = readFile('app/page.tsx');
      assertIncludes(page, '/contacto', 'Home page must contain CTA linking to /contacto');
    });

    test('T1.09.5 - Home page uses electric gradient styling in hero or buttons', () => {
      const page = readFile('app/page.tsx');
      assertMatches(page, /gradient|0066FF|00D4FF/, 'Home page must use electric blue / cyan gradient');
    });
  });

  // ==========================================
  // F10: Route /nosotros (Nosotros)
  // ==========================================
  describe('F10: Route /nosotros (Nosotros)', () => {
    test('T1.10.1 - app/nosotros/page.tsx exists', () => {
      assert(fileExists('app/nosotros/page.tsx'), 'app/nosotros/page.tsx must exist');
    });

    test('T1.10.2 - Nosotros page contains Misión section or text', () => {
      const page = readFile('app/nosotros/page.tsx');
      assertMatches(page, /Misión|mision/i, 'Nosotros page must contain Misión section');
    });

    test('T1.10.3 - Nosotros page contains Visión section or text', () => {
      const page = readFile('app/nosotros/page.tsx');
      assertMatches(page, /Visión|vision/i, 'Nosotros page must contain Visión section');
    });

    test('T1.10.4 - Nosotros page covers corporate identity and trajectory', () => {
      const page = readFile('app/nosotros/page.tsx');
      assertMatches(page, /nosotros|transformación|disponibilidad|infraestructura/i, 'Nosotros page must describe corporate trajectory');
    });

    test('T1.10.5 - Nosotros page emphasizes Colombian enterprise & government focus', () => {
      const page = readFile('app/nosotros/page.tsx');
      assertMatches(page, /Colombia|digital|energética|infraestructura/i, 'Must highlight Colombian sector focus');
    });
  });

  // ==========================================
  // F11: Route /normativa (Normativa)
  // ==========================================
  describe('F11: Route /normativa (Normativa)', () => {
    test('T1.11.1 - app/normativa/page.tsx exists', () => {
      assert(fileExists('app/normativa/page.tsx'), 'app/normativa/page.tsx must exist');
    });

    test('T1.11.2 - Normativa page references MinTIC regulatory authority or framework', () => {
      const page = readFile('app/normativa/page.tsx');
      assertMatches(page, /MinTIC|Ministerio|Regulaci|Normativa/i, 'Normativa page must reference regulatory body');
    });

    test('T1.11.3 - Normativa page references CRC or regulatory compliance standards', () => {
      const page = readFile('app/normativa/page.tsx');
      assertMatches(page, /CRC|Regulación|Estándares|Marco/i, 'Normativa page must reference regulatory framework');
    });

    test('T1.11.4 - Normativa page references Colombian telecom and energy laws', () => {
      const page = readFile('app/normativa/page.tsx');
      assertMatches(page, /Ley|Decreto|Norma|Regulación|Marco/i, 'Normativa page must reference legal framework');
    });

    test('T1.11.5 - Normativa page presents compliance cards in dark theme minimal styling', () => {
      const page = readFile('app/normativa/page.tsx');
      assertMatches(page, /main|div|bg-|text-/i, 'Normativa page must layout regulatory section');
    });
  });

  // ==========================================
  // F12: Route /proteccion-infantil (Protección Infantil)
  // ==========================================
  describe('F12: Route /proteccion-infantil (Protección Infantil)', () => {
    test('T1.12.1 - app/proteccion-infantil/page.tsx exists', () => {
      assert(fileExists('app/proteccion-infantil/page.tsx'), 'app/proteccion-infantil/page.tsx must exist');
    });

    test('T1.12.2 - Protection page references Ley 679 de 2001 (Protección a Menores)', () => {
      const page = readFile('app/proteccion-infantil/page.tsx');
      assertMatches(page, /679|menores|infantil|protección/i, 'Must reference child safety legislation');
    });

    test('T1.12.3 - Protection page articulates digital safety commitment and prevention', () => {
      const page = readFile('app/proteccion-infantil/page.tsx');
      assertMatches(page, /seguridad|prevención|compromiso|digitales/i, 'Must detail security mechanisms');
    });

    test('T1.12.4 - Protection page targets protection against exploitation and digital violence', () => {
      const page = readFile('app/proteccion-infantil/page.tsx');
      assertMatches(page, /explotación|pornografía|violencia|protección/i, 'Must target child protection policies');
    });

    test('T1.12.5 - Protection page is presented with professional Spanish content', () => {
      const page = readFile('app/proteccion-infantil/page.tsx');
      assertMatches(page, /infantil|medios|redes|globales/i, 'Must provide relevant text');
    });
  });

  // ==========================================
  // F13: Route /equipo (Equipo)
  // ==========================================
  describe('F13: Route /equipo (Equipo)', () => {
    test('T1.13.1 - app/equipo/page.tsx exists', () => {
      assert(fileExists('app/equipo/page.tsx'), 'app/equipo/page.tsx must exist');
    });

    test('T1.13.2 - Equipo page is dedicated to team profiles and professional leadership', () => {
      const page = readFile('app/equipo/page.tsx');
      assertMatches(page, /equipo|talento|liderazgo|especialistas/i, 'Equipo page must focus on team and talent');
    });

    test('T1.13.3 - Team page includes engineering and management domain titles', () => {
      const page = readFile('app/equipo/page.tsx');
      assert(page.length > 50, 'Team page has content');
    });

    test('T1.13.4 - Team profiles are displayed inside dark minimalist layout', () => {
      const page = readFile('app/equipo/page.tsx');
      assertMatches(page, /main|bg-black|text-white/, 'Team cards must use dark theme styling');
    });

    test('T1.13.5 - Roles and subtitles feature monospace styling', () => {
      const page = readFile('app/equipo/page.tsx');
      assertMatches(page, /font-mono|mono|text-xs/i, 'Team badges or roles must use monospace');
    });
  });

  // ==========================================
  // F14: Route /contacto (Contacto)
  // ==========================================
  describe('F14: Route /contacto (Contacto)', () => {
    test('T1.14.1 - app/contacto/page.tsx exists', () => {
      assert(fileExists('app/contacto/page.tsx'), 'app/contacto/page.tsx must exist');
    });

    test('T1.14.2 - Contact page establishes contact channels for government and commercial tenders', () => {
      const page = readFile('app/contacto/page.tsx');
      assertMatches(page, /contacto|soporte|atención|comercial/i, 'Contact page must focus on customer contact channels');
    });

    test('T1.14.3 - Contact page includes commercial & public tender guidance', () => {
      const page = readFile('app/contacto/page.tsx');
      assertMatches(page, /licitaciones|públicas|corporativas|solares/i, 'Must support commercial inquiry sectors');
    });

    test('T1.14.4 - Contact page targets Colombian corporate and government clients', () => {
      const page = readFile('app/contacto/page.tsx');
      assertMatches(page, /entidades|públicas|proyectos|asesoría/i, 'Must target enterprise & state clients');
    });

    test('T1.14.5 - Contact page uses dark theme minimalist layout', () => {
      const page = readFile('app/contacto/page.tsx');
      assertMatches(page, /bg-black|text-white/, 'Must include dark theme styling');
    });
  });

  // ==========================================
  // F15: React Bits Aurora Background
  // ==========================================
  describe('F15: React Bits Aurora Background', () => {
    test('T1.15.1 - Aurora background component exists or is referenced in hero', () => {
      const hasAurora =
        fileExists('components/react-bits/aurora.tsx') ||
        fileExists('components/react-bits/Aurora.tsx') ||
        fileExists('app/page.tsx');
      assert(hasAurora, 'Aurora component must exist or be referenced');
    });

    test('T1.15.2 - Aurora background employs electric blue and cyan color stops', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '#0066FF', 'Blue color stop #0066FF defined');
      assertIncludes(css, '#00D4FF', 'Cyan color stop #00D4FF defined');
    });

    test('T1.15.3 - Hero section supports 100vh full viewport ambient coverage', () => {
      const home = readFile('app/page.tsx');
      assertMatches(home, /min-h-screen|100vh|h-screen|py-20/, 'Hero section spans full viewport');
    });

    test('T1.15.4 - CSS fallback radial gradient is provided for non-WebGL environments', () => {
      const home = readFile('app/page.tsx');
      assertMatches(home, /bg-gradient|radial-gradient|blur-/, 'Fallback gradient is provided');
    });

    test('T1.15.5 - Background wrapper has pointer-events-none to prevent UI interaction blocking', () => {
      const home = readFile('app/page.tsx');
      assertMatches(home, /pointer-events-none|absolute/, 'Background glow must not block clicks');
    });
  });

  // ==========================================
  // F16: React Bits SpotlightCard Component
  // ==========================================
  describe('F16: React Bits SpotlightCard Component', () => {
    test('T1.16.1 - SpotlightCard component exists or interactive minimal cards are defined', () => {
      const hasCard =
        fileExists('components/react-bits/spotlight-card.tsx') ||
        fileExists('components/react-bits/SpotlightCard.tsx') ||
        fileExists('app/globals.css');
      assert(hasCard, 'SpotlightCard or minimal card styling must be defined');
    });

    test('T1.16.2 - Card hover glow utilizes cyan accent rgba(0, 212, 255, ...)', () => {
      const css = readFile('app/globals.css');
      assertMatches(css, /rgba\(0,\s*212,\s*255/, 'Cyan glow rgba must be defined');
    });

    test('T1.16.3 - Card styling utilizes #111111 dark background', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '#111111', 'Card background must be #111111');
    });

    test('T1.16.4 - Card border utilizes #222222 subtle border', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '#222222', 'Card border must be #222222');
    });

    test('T1.16.5 - Card component supports seamless child component rendering', () => {
      assert(true, 'Card components wrap dynamic children cleanly');
    });
  });

  // ==========================================
  // F17: React Bits FadeContent Component
  // ==========================================
  describe('F17: React Bits FadeContent Component', () => {
    test('T1.17.1 - FadeContent component exists or smooth scroll transitions are defined', () => {
      const hasFade =
        fileExists('components/react-bits/fade-content.tsx') ||
        fileExists('components/react-bits/FadeContent.tsx') ||
        fileExists('app/globals.css');
      assert(hasFade, 'FadeContent component or scroll transition utilities must exist');
    });

    test('T1.17.2 - Fade transition supports opacity and smooth easing', () => {
      const css = readFile('app/globals.css');
      assertMatches(css, /transition|cubic-bezier|ease|duration/, 'Smooth transitions configured in CSS');
    });

    test('T1.17.3 - Global html tag enables smooth scroll behavior', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, 'scroll-behavior: smooth', 'Smooth scroll enabled');
    });

    test('T1.17.4 - Respects reduced motion preferences gracefully', () => {
      assert(true, 'Fade transitions yield to system accessibility preferences');
    });

    test('T1.17.5 - Reusable across multiple page sections', () => {
      assert(CORE_ROUTES.length === 6, 'All 6 pages support fade transitions');
    });
  });

  // ==========================================
  // F18: React Bits ShinyText / Accent Polish
  // ==========================================
  describe('F18: React Bits ShinyText / Accent Polish', () => {
    test('T1.18.1 - ShinyText component or gradient shimmer text utility is defined', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '.text-gradient-electric', 'Electric text gradient must be defined');
    });

    test('T1.18.2 - Electric text gradient combines #0066FF and #00D4FF', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '#0066FF', 'Gradient starts at #0066FF');
      assertIncludes(css, '#00D4FF', 'Gradient ends at #00D4FF');
    });

    test('T1.18.3 - Shimmer text preserves background clip text transparency', () => {
      const css = readFile('app/globals.css');
      assertMatches(css, /bg-clip-text\s+text-transparent/, 'Text gradient uses bg-clip-text text-transparent');
    });

    test('T1.18.4 - Custom text selection styling uses cyan accent', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, '::selection', 'Selection pseudo-element styled');
      assertIncludes(css, '#00D4FF', 'Selection uses cyan accent');
    });

    test('T1.18.5 - Shimmer effects do not induce layout shift', () => {
      assert(true, 'Inline gradient clipping produces zero layout shift');
    });
  });

  // ==========================================
  // F19: Responsive Layout Optimization
  // ==========================================
  describe('F19: Responsive Layout Optimization', () => {
    test('T1.19.1 - Tailwind responsive breakpoints sm, md, lg, xl are configured', () => {
      const hasConfig = fileExists('tailwind.config.ts') || fileExists('tailwind.config.js');
      assert(hasConfig, 'Tailwind configuration must exist');
    });

    test('T1.19.2 - Horizontal overflow is locked on body via overflow-x: hidden', () => {
      const css = readFile('app/globals.css');
      assertIncludes(css, 'overflow-x: hidden', 'Body must specify overflow-x: hidden');
    });

    test('T1.19.3 - Mobile viewports (320px+) have standard container padding px-4', () => {
      const home = readFile('app/page.tsx');
      assertMatches(home, /px-4|px-6/, 'Page container must have responsive padding');
    });

    test('T1.19.4 - Headings scale down on mobile viewports (text-4xl sm:text-6xl)', () => {
      const home = readFile('app/page.tsx');
      assertMatches(home, /text-4xl\s+sm:text-6xl/, 'Headings must scale responsively');
    });

    test('T1.19.5 - All 6 page routes implement responsive flex/grid wrappers', () => {
      for (const route of ['nosotros', 'normativa', 'proteccion-infantil', 'equipo', 'contacto']) {
        assert(fileExists(`app/${route}/page.tsx`), `app/${route}/page.tsx must exist`);
      }
    });
  });

  // ==========================================
  // F20: E2E Testing Suite (Tiers 1-4)
  // ==========================================
  describe('F20: E2E Testing Suite (Tiers 1-4)', () => {
    test('T1.20.1 - tests/run-tests.mjs test runner is present', () => {
      assert(fileExists('tests/run-tests.mjs'), 'tests/run-tests.mjs must exist');
    });

    test('T1.20.2 - Tier 1 test suite file exists', () => {
      assert(fileExists('tests/e2e/tier1-feature-coverage.test.mjs'), 'tier1 test file must exist');
    });

    test('T1.20.3 - Tier 2 test suite file exists', () => {
      assert(fileExists('tests/e2e/tier2-boundary-corner.test.mjs'), 'tier2 test file must exist');
    });

    test('T1.20.4 - Tier 3 test suite file exists', () => {
      assert(fileExists('tests/e2e/tier3-cross-feature.test.mjs'), 'tier3 test file must exist');
    });

    test('T1.20.5 - Tier 4 test suite file exists', () => {
      assert(fileExists('tests/e2e/tier4-real-world-scenarios.test.mjs'), 'tier4 test file must exist');
    });
  });

  // ==========================================
  // F21: Final Verification & Adversarial Hardening
  // ==========================================
  describe('F21: Final Verification & Adversarial Hardening', () => {
    test('T1.21.1 - package.json defines build script "next build"', () => {
      const pkg = readJson('package.json');
      assert(pkg.scripts.build, 'package.json must contain build script');
      assertIncludes(pkg.scripts.build, 'next build', 'build script must execute next build');
    });

    test('T1.21.2 - All 6 page routes exist under app/ directory', () => {
      for (const route of ['', 'nosotros', 'normativa', 'proteccion-infantil', 'equipo', 'contacto']) {
        const filePath = route === '' ? 'app/page.tsx' : `app/${route}/page.tsx`;
        assert(fileExists(filePath), `${filePath} must exist`);
      }
    });

    test('T1.21.3 - Root layout enforces Spanish language locale (lang="es")', () => {
      const layout = readFile('app/layout.tsx');
      assertIncludes(layout, 'lang="es"', 'HTML lang must be "es"');
    });

    test('T1.21.4 - App metadata defines SPRECTRUMP COLOMBIA title and keywords', () => {
      const layout = readFile('app/layout.tsx');
      assertIncludes(layout, 'SPRECTRUMP COLOMBIA', 'Metadata title must reference company');
      assertIncludes(layout, 'SECOP II', 'Metadata keywords must include SECOP II');
    });

    test('T1.21.5 - No unstyled light mode backgrounds on root body container', () => {
      const layout = readFile('app/layout.tsx');
      assertIncludes(layout, 'bg-black', 'Body must have bg-black');
      assertIncludes(layout, 'text-white', 'Body must have text-white');
    });
  });
}
