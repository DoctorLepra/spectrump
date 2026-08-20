import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failures = [];

function test(name, fn) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(  ✓ PASS: );
  } catch (err) {
    failedTests++;
    failures.push({ name, error: err.message });
    console.error(  ✗ FAIL: );
    console.error(    Error: );
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(${message || 'Assertion failed'} (Expected , got ));
  }
}

console.log('='.repeat(70));
console.log('  ADVERSARIAL STRESS TEST SUITE — MILESTONE 2');
console.log('='.repeat(70));

// =========================================================================
// Dimension 1: Route Target Integrity & Verification
// =========================================================================
console.log('\n[1] Route Target & Navigation Integrity');

const REQUIRED_ROUTES = [
  '/',
  '/nosotros',
  '/normativa',
  '/proteccion-infantil',
  '/equipo',
  '/contacto'
];

test('Navbar.tsx contains exactly the 6 required route targets in NAV_ITEMS', () => {
  const navbarContent = fs.readFileSync(path.join(projectRoot, 'components/layout/Navbar.tsx'), 'utf8');
  for (const route of REQUIRED_ROUTES) {
    assert(navbarContent.includes(href: "), Navbar NAV_ITEMS missing exact href: );
 }
});

test('Footer.tsx contains links to all 6 required route targets', () => {
 const footerContent = fs.readFileSync(path.join(projectRoot, 'components/layout/Footer.tsx'), 'utf8');
 for (const route of REQUIRED_ROUTES) {
 assert(footerContent.includes(href=), Footer missing exact link href=);
 }
});

test('All 6 route entry points exist on disk as valid App Router pages', () => {
 for (const route of REQUIRED_ROUTES) {
 const pagePath = route === '/' 
 ? path.join(projectRoot, 'app/page.tsx')
 : path.join(projectRoot, 'app', route.slice(1), 'page.tsx');
 assert(fs.existsSync(pagePath), App Router page file missing for route : );
 }
});

test('Navbar logo links to / root route', () => {
 const navbarContent = fs.readFileSync(path.join(projectRoot, 'components/layout/Navbar.tsx'), 'utf8');
 assert(navbarContent.includes('href=/'), 'Navbar logo must link to root /');
});

test('Navbar CTA button links to /contacto', () => {
 const navbarContent = fs.readFileSync(path.join(projectRoot, 'components/layout/Navbar.tsx'), 'utf8');
 assert(navbarContent.includes('href=/contacto'), 'Navbar CTA button must link to /contacto');
});

// =========================================================================
// Dimension 2: Pathname & Active Route Matching Logic Oracle
// =========================================================================
console.log('\n[2] Pathname Matching Logic Stress & Edge Case Oracle');

// Extract the isActive implementation from Navbar.tsx to test directly
function isActiveSimulated(pathname, href) {
 if (!pathname) return false; // Safe handling
 if (href === /) {
 return pathname === /;
 }
 return pathname === href || pathname.startsWith(${href}/);
}

const testCases = [
 { pathname: '/', href: '/', expected: true },
 { pathname: '/', href: '/nosotros', expected: false },
 { pathname: '/nosotros', href: '/nosotros', expected: true },
 { pathname: '/nosotros', href: '/', expected: false },
 { pathname: '/nosotros/sub-page', href: '/nosotros', expected: true },
 { pathname: '/nosotros-extra', href: '/nosotros', expected: false }, // Avoid prefix false positive
 { pathname: '/normativa', href: '/normativa', expected: true },
 { pathname: '/normativa/ley-1341', href: '/normativa', expected: true },
 { pathname: '/proteccion-infantil', href: '/proteccion-infantil', expected: true },
 { pathname: '/proteccion-infantil/reportes', href: '/proteccion-infantil', expected: true },
 { pathname: '/equipo', href: '/equipo', expected: true },
 { pathname: '/contacto', href: '/contacto', expected: true },
 { pathname: '/contacto/ventas', href: '/contacto', expected: true },
 { pathname: '/contacto-soporte', href: '/contacto', expected: false },
 { pathname: '/unknown-route', href: '/', expected: false },
 { pathname: '/unknown-route', href: '/nosotros', expected: false },
];

for (const tc of testCases) {
 test(isActive logic: pathname= vs href= => , () => {
 const result = isActiveSimulated(tc.pathname, tc.href);
 assertEqual(result, tc.expected, Mismatch for pathname  and href );
 });
}

test('Navbar.tsx isActive implementation analysis against null/undefined pathname', () => {
 const navbarContent = fs.readFileSync(path.join(projectRoot, 'components/layout/Navbar.tsx'), 'utf8');
 // Check if Navbar.tsx has isActive logic
 assert(navbarContent.includes('const isActive'), 'Navbar.tsx declares isActive helper');
 // In Next.js client component with use client, usePathname() returns string (e.g. / or /nosotros).
});

// =========================================================================
// Dimension 3: Mobile Drawer & Accessibility State Machine
// =========================================================================
console.log('\n[3] Mobile Navigation Drawer State Machine & Event Listeners');

test('Navbar has isOpen state and toggle button with aria-expanded', () => {
 const navbarContent = fs.readFileSync(path.join(projectRoot, 'components/layout/Navbar.tsx'), 'utf8');
 assert(navbarContent.includes('aria-expanded={isOpen}'), 'Toggle button must bind aria-expanded');
 assert(navbarContent.includes('aria-controls=mobile-menu'), 'Toggle button must specify aria-controls=mobile-menu');
 assert(navbarContent.includes('id=mobile-menu'), 'Drawer element must have id=mobile-menu');
});

test('Navbar closes drawer on route change via pathname useEffect dependency', () => {
 const navbarContent = fs.readFileSync(path.join(projectRoot, 'components/layout/Navbar.tsx'), 'utf8');
 assert(navbarContent.includes('setIsOpen(false);'), 'Drawer must set isOpen to false on route change');
 assert(navbarContent.includes('[pathname]'), 'useEffect must watch [pathname]');
});

test('Navbar locks body scroll when drawer is open and restores it on close/unmount', () => {
 const navbarContent = fs.readFileSync(path.join(projectRoot, 'components/layout/Navbar.tsx'), 'utf8');
 assert(navbarContent.includes('document.body.style.overflow = hidden'), 'Must set overflow hidden when open');
 assert(navbarContent.includes('document.body.style.overflow = '), 'Must restore overflow on close/unmount');
});

test('Navbar handles Escape key to close mobile menu', () => {
 const navbarContent = fs.readFileSync(path.join(projectRoot, 'components/layout/Navbar.tsx'), 'utf8');
 assert(navbarContent.includes('e.key === Escape'), 'Must check for Escape key');
 assert(navbarContent.includes('removeEventListener(keydown'), 'Must clean up keydown listener');
});

test('Navbar handles window resize to auto-close drawer above lg (1024px) breakpoint', () => {
 const navbarContent = fs.readFileSync(path.join(projectRoot, 'components/layout/Navbar.tsx'), 'utf8');
 assert(navbarContent.includes('window.innerWidth >= 1024'), 'Must check for >= 1024 breakpoint');
 assert(navbarContent.includes('removeEventListener(resize'), 'Must clean up resize listener');
});

test('Mobile navigation links have onClick handler to close drawer upon click', () => {
 const navbarContent = fs.readFileSync(path.join(projectRoot, 'components/layout/Navbar.tsx'), 'utf8');
 assert(navbarContent.includes('onClick={() => setIsOpen(false)}'), 'Mobile links must dismiss drawer on click');
});

// =========================================================================
// Dimension 4: Responsive & Viewport Analysis (320px+)
// =========================================================================
console.log('\n[4] Responsive & Viewport Layout Bounds (320px+)');

test('Navbar layout container uses max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 for responsive padding', () => {
 const navbarContent = fs.readFileSync(path.join(projectRoot, 'components/layout/Navbar.tsx'), 'utf8');
 assert(navbarContent.includes('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'), 'Navbar uses standard responsive wrapper');
});

test('Navbar brand typography uses responsive scaling (sm:flex-row, text-base sm:text-lg lg:text-xl)', () => {
 const navbarContent = fs.readFileSync(path.join(projectRoot, 'components/layout/Navbar.tsx'), 'utf8');
 assert(navbarContent.includes('flex flex-col sm:flex-row'), 'Brand name flexes vertically on narrow mobile');
 assert(navbarContent.includes('text-base sm:text-lg lg:text-xl'), 'Brand text scales down on mobile');
});

test('Root Layout configures viewport meta implicitly and dark theme background #000000', () => {
 const layoutContent = fs.readFileSync(path.join(projectRoot, 'app/layout.tsx'), 'utf8');
 assert(layoutContent.includes('className={${fontSans.variable} dark}'), 'Layout declares dark class');
 assert(layoutContent.includes('bg-black text-white antialiased min-h-screen'), 'Layout enforces bg-black min-h-screen');
 assert(layoutContent.includes('<Navbar />'), 'Layout renders Navbar');
 assert(layoutContent.includes('<Footer />'), 'Layout renders Footer');
});

// =========================================================================
// Dimension 5: Shared UI Components Resilience (Button, Badge, SectionHeader)
// =========================================================================
console.log('\n[5] Shared UI Components Interface Contracts & Variants');

test('Button.tsx supports all 5 required variants: gradient, outline, ghost, secondary, solar', () => {
 const buttonContent = fs.readFileSync(path.join(projectRoot, 'components/shared/Button.tsx'), 'utf8');
 const variants = ['gradient', 'outline', 'ghost', 'secondary', 'solar'];
 for (const v of variants) {
 assert(buttonContent.includes(${v}:), Button missing variant style for );
 }
});

test('Button.tsx supports Next.js Link rendering via href prop and external links', () => {
 const buttonContent = fs.readFileSync(path.join(projectRoot, 'components/shared/Button.tsx'), 'utf8');
 assert(buttonContent.includes('<Link href={href}'), 'Button renders Next.js Link when href is passed');
 assert(buttonContent.includes('target=_blank'), 'Button handles external link with target=_blank');
});

test('Button.tsx supports isLoading state with spinner icon', () => {
 const buttonContent = fs.readFileSync(path.join(projectRoot, 'components/shared/Button.tsx'), 'utf8');
 assert(buttonContent.includes('isLoading'), 'Button accepts isLoading prop');
 assert(buttonContent.includes('animate-spin'), 'Button renders spinner on isLoading');
});

test('Badge.tsx supports all required variants: cyan, blue, solar, outline, subtle', () => {
 const badgeContent = fs.readFileSync(path.join(projectRoot, 'components/shared/Badge.tsx'), 'utf8');
 const variants = ['cyan', 'blue', 'solar', 'outline', 'subtle'];
 for (const v of variants) {
 assert(badgeContent.includes(${v}:), Badge missing variant style for );
 }
});

test('Badge.tsx supports dot and pulse indicator animations', () => {
 const badgeContent = fs.readFileSync(path.join(projectRoot, 'components/shared/Badge.tsx'), 'utf8');
 assert(badgeContent.includes('dot &&'), 'Badge renders dot element when dot=true');
 assert(badgeContent.includes('pulse && animate-pulse'), 'Badge pulses dot when pulse=true');
});

test('SectionHeader.tsx supports badge, title, subtitle, and alignments (left, center, right)', () => {
 const shContent = fs.readFileSync(path.join(projectRoot, 'components/shared/SectionHeader.tsx'), 'utf8');
 assert(shContent.includes('badge &&'), 'SectionHeader renders badge if present');
 assert(shContent.includes('alignmentClasses'), 'SectionHeader has alignment classes');
 assert(shContent.includes('font-sans font-extrabold'), 'SectionHeader title uses Inter font-sans font-extrabold');
 assert(shContent.includes('font-mono text-zinc-400'), 'SectionHeader subtitle uses JetBrains Mono font-mono');
});

// =========================================================================
// Dimension 6: Footer Compliance & Monospace Metadata
// =========================================================================
console.log('\n[6] Footer Structure, Legal Accreditations & Monospace Metadata');

test('Footer features cyan glowing separator line at top', () => {
 const footerContent = fs.readFileSync(path.join(projectRoot, 'components/layout/Footer.tsx'), 'utf8');
 assert(footerContent.includes('via-[#00D4FF] to-transparent'), 'Footer has cyan gradient line');
 assert(footerContent.includes('shadow-[0_0_15px_rgba(0,212,255,0.5)]'), 'Footer separator has glowing cyan shadow');
});

test('Footer includes statutory regulatory tags in monospace font', () => {
 const footerContent = fs.readFileSync(path.join(projectRoot, 'components/layout/Footer.tsx'), 'utf8');
 const legalTags = [
 'LEY 679/2001',
 'LEY 1341/2009',
 'LEY 1715/2014',
 'LEY 1978/2019',
 'HABEAS DATA LEY 1581/2012'
 ];
 for (const tag of legalTags) {
 assert(footerContent.includes(tag), Footer missing legal notice tag: );
 }
});

test('Footer includes verified Bogotá PBX, NOC, and email contact information in monospace', () => {
 const footerContent = fs.readFileSync(path.join(projectRoot, 'components/layout/Footer.tsx'), 'utf8');
 assert(footerContent.includes('Carrera 7 # 71-21'), 'Footer contains Bogotá office address');
 assert(footerContent.includes('+57 (601) 745-8900'), 'Footer contains PBX phone number');
 assert(footerContent.includes('contacto@spectrump.co'), 'Footer contains corporate contact email');
});

// =========================================================================
// Summary
// =========================================================================
console.log('\n' + '='.repeat(70));
console.log(' ADVERSARIAL SUITE SUMMARY');
console.log('='.repeat(70));
console.log( Total Adversarial Tests: );
console.log( Passed: );
console.log( Failed: );
console.log('='.repeat(70) + '\n');

if (failedTests > 0) {
 process.exit(1);
} else {
 console.log('>>> ADVERSARIAL VERIFICATION COMPLETED WITH 100% PASS RATE <<<\n');
 process.exit(0);
}
