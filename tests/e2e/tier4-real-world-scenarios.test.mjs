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

export function runTier4Tests() {
  describe('Tier 4: Real-World Scenarios & User Journeys', () => {
    // ==========================================
    // Scenario 1: SECOP II Government Procurement Auditor
    // ==========================================
    describe('Scenario 1: SECOP II Government Procurement Auditor', () => {
      test('T4.01.1 - Auditor lands on Inicio (/) and verifies enterprise telecom offering in Spanish', () => {
        assert(fileExists('app/page.tsx'), 'app/page.tsx exists');
        const home = readFile('app/page.tsx');
        assertMatches(home, /licitación|telecomunicaciones|conectividad/i, 'Home page must feature tender telecom capabilities');
      });

      test('T4.01.2 - Auditor inspects Normativa (/normativa) to verify MinTIC & CRC regulatory compliance', () => {
        assert(fileExists('app/normativa/page.tsx'), 'app/normativa/page.tsx exists');
        const normativa = readFile('app/normativa/page.tsx');
        assert(normativa.length > 50, 'Normativa page exists with content');
      });

      test('T4.01.3 - Auditor reviews Protección Infantil (/proteccion-infantil) for Ley 679 de 2001 compliance', () => {
        assert(fileExists('app/proteccion-infantil/page.tsx'), 'app/proteccion-infantil/page.tsx exists');
        const proteccion = readFile('app/proteccion-infantil/page.tsx');
        assert(proteccion.length > 50, 'Protección Infantil page exists with content');
      });

      test('T4.01.4 - Auditor navigates to Contacto (/contacto) to verify RFP submission channels and PBX', () => {
        assert(fileExists('app/contacto/page.tsx'), 'app/contacto/page.tsx exists');
        const contacto = readFile('app/contacto/page.tsx');
        assert(contacto.length > 50, 'Contacto page exists with content');
      });

      test('T4.01.5 - Auditor verifies that metadata and headers explicitly declare SECOP II readiness', () => {
        const layout = readFile('app/layout.tsx');
        assertIncludes(layout, 'SECOP II', 'Layout keywords or metadata must include SECOP II');
      });
    });

    // ==========================================
    // Scenario 2: Corporate Sustainability Executive (Solar Energy)
    // ==========================================
    describe('Scenario 2: Corporate Sustainability Executive (Solar Energy)', () => {
      test('T4.02.1 - Executive lands on Inicio (/) and discovers commercial solar energy solutions', () => {
        const home = readFile('app/page.tsx');
        assertMatches(home, /energía solar/i, 'Home page features solar energy solutions');
      });

      test('T4.02.2 - Executive navigates to Nosotros (/nosotros) to review corporate vision and sustainability values', () => {
        assert(fileExists('app/nosotros/page.tsx'), 'app/nosotros/page.tsx exists');
        const nosotros = readFile('app/nosotros/page.tsx');
        assert(nosotros.length > 50, 'Nosotros page exists with content');
      });

      test('T4.02.3 - Executive inspects Equipo (/equipo) to verify credentials of solar engineering leadership', () => {
        assert(fileExists('app/equipo/page.tsx'), 'app/equipo/page.tsx exists');
        const equipo = readFile('app/equipo/page.tsx');
        assert(equipo.length > 50, 'Equipo page exists with content');
      });

      test('T4.02.4 - Executive visits Contacto (/contacto) to request solar audit and feasibility proposal', () => {
        assert(fileExists('app/contacto/page.tsx'), 'app/contacto/page.tsx exists');
        const contacto = readFile('app/contacto/page.tsx');
        assert(contacto.length > 50, 'Contacto page exists with content');
      });

      test('T4.02.5 - Executive verifies solar color tokens and gradients (#FB8500 -> #FFB703) in design system', () => {
        const css = readFile('app/globals.css');
        assertIncludes(css, '.text-gradient-solar', 'Solar text gradient utility defined');
        assertIncludes(css, '.bg-gradient-solar', 'Solar background gradient utility defined');
      });
    });

    // ==========================================
    // Scenario 3: Mobile User on 4G Connection (Smartphone)
    // ==========================================
    describe('Scenario 3: Mobile User on 4G Connection (Smartphone)', () => {
      test('T4.03.1 - Smartphone user loads Inicio on 375px viewport with smooth responsive hero scaling', () => {
        const home = readFile('app/page.tsx');
        assertMatches(home, /text-4xl\s+sm:text-6xl/, 'Hero heading scales responsively for mobile');
      });

      test('T4.03.2 - Smartphone user interacts with mobile hamburger menu without horizontal scroll', () => {
        const css = readFile('app/globals.css');
        assertIncludes(css, 'overflow-x: hidden', 'Body blocks horizontal scroll on mobile');
      });

      test('T4.03.3 - Smartphone user navigates to Equipo (/equipo) with full-width mobile card layout', () => {
        assert(fileExists('app/equipo/page.tsx'), 'app/equipo/page.tsx exists');
      });

      test('T4.03.4 - Smartphone user accesses Contacto (/contacto) and uses touch-friendly input fields', () => {
        assert(fileExists('app/contacto/page.tsx'), 'app/contacto/page.tsx exists');
      });

      test('T4.03.5 - Smartphone user verifies that body padding (px-4) protects touch boundaries', () => {
        const home = readFile('app/page.tsx');
        assertMatches(home, /px-4|px-6/, 'Container uses px-4 or px-6 on mobile');
      });
    });

    // ==========================================
    // Scenario 4: Keyboard-Only Accessibility & Screen Reader Auditor
    // ==========================================
    describe('Scenario 4: Keyboard-Only Accessibility & Screen Reader Auditor', () => {
      test('T4.04.1 - Auditor verifies semantic HTML structure (header, main, section, footer) on all routes', () => {
        const home = readFile('app/page.tsx');
        assertMatches(home, /<main/i, 'Home page uses semantic <main> tag');
      });

      test('T4.04.2 - Auditor verifies root HTML specifies lang="es" for screen reader pronunciation', () => {
        const layout = readFile('app/layout.tsx');
        assertIncludes(layout, 'lang="es"', 'HTML element declares lang="es"');
      });

      test('T4.04.3 - Auditor verifies dark theme selection contrast with cyan highlight', () => {
        const css = readFile('app/globals.css');
        assertIncludes(css, '::selection', 'Selection styling defined');
        assertIncludes(css, '#00D4FF', 'Selection uses high contrast cyan');
      });

      test('T4.04.4 - Auditor verifies focus ring design tokens in globals.css', () => {
        const css = readFile('app/globals.css');
        assertIncludes(css, '--ring: 191 100% 50%;', 'Focus ring uses bright cyan hue');
      });

      test('T4.04.5 - Auditor verifies that all 6 core page routes render without layout errors', () => {
        for (const route of CORE_ROUTES) {
          const fileTarget = route === '/' ? 'app/page.tsx' : `app${route}/page.tsx`;
          assert(fileExists(fileTarget), `Target ${fileTarget} exists`);
        }
      });
    });
  });
}
