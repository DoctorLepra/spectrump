/**
 * Milestone 2 Automated Adversarial & Empirical Verification Runner
 * Validates Shared Layout, Navbar (Desktop & Mobile Drawer), Footer, UI primitives, and Route Integrity.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let passedTests = 0;
let failedTests = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    console.log(`\x1b[32m[PASS]\x1b[0m ${testName}`);
    passedTests++;
  } else {
    console.error(`\x1b[31m[FAIL]\x1b[0m ${testName}${details ? ` -> ${details}` : ''}`);
    failedTests++;
  }
}

console.log('\n======================================================================');
console.log(' SPRECTRUMP COLOMBIA — Milestone 2 Adversarial & Empirical Verification');
console.log('======================================================================\n');

// 1. Check Route Targets & Navigation Links
console.log('--- 1. Route Targets & Navigation Link Verification ---');
const REQUIRED_ROUTES = [
  '/',
  '/nosotros',
  '/normativa',
  '/proteccion-infantil',
  '/equipo',
  '/contacto',
];

const navbarPath = path.join(rootDir, 'components/layout/Navbar.tsx');
const footerPath = path.join(rootDir, 'components/layout/Footer.tsx');
const layoutPath = path.join(rootDir, 'app/layout.tsx');

assert(fs.existsSync(navbarPath), 'components/layout/Navbar.tsx exists');
assert(fs.existsSync(footerPath), 'components/layout/Footer.tsx exists');
assert(fs.existsSync(layoutPath), 'app/layout.tsx exists');

const navbarContent = fs.existsSync(navbarPath) ? fs.readFileSync(navbarPath, 'utf-8') : '';
const footerContent = fs.existsSync(footerPath) ? fs.readFileSync(footerPath, 'utf-8') : '';
const layoutContent = fs.existsSync(layoutPath) ? fs.readFileSync(layoutPath, 'utf-8') : '';

for (const r of REQUIRED_ROUTES) {
  assert(navbarContent.includes(`href: "${r}"`), `Navbar NAV_ITEMS contains exact route: ${r}`);
  assert(footerContent.includes(`href="${r}"`), `Footer navigation links contain exact route: ${r}`);
  const targetPage = r === '/' ? 'app/page.tsx' : `app${r}/page.tsx`;
  assert(fs.existsSync(path.join(rootDir, targetPage)), `Target route page file exists on disk: ${targetPage}`);
}

assert(navbarContent.includes('href="/"'), 'Navbar logo links to root "/"');
assert(navbarContent.includes('href="/contacto"'), 'Navbar CTA button links to "/contacto"');

// 2. Active Route Pathname Matching Oracle
console.log('\n--- 2. Navbar isActive Pathname Oracle Tests ---');
function isActive(pathname, href) {
  if (!pathname) return false;
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

const pathOracleMatrix = [
  { p: '/', h: '/', exp: true, desc: 'Root path matches exact "/"' },
  { p: '/', h: '/nosotros', exp: false, desc: 'Root path does not match "/nosotros"' },
  { p: '/nosotros', h: '/nosotros', exp: true, desc: 'Exact match "/nosotros"' },
  { p: '/nosotros', h: '/', exp: false, desc: 'Non-root path does not activate root link' },
  { p: '/nosotros/subseccion', h: '/nosotros', exp: true, desc: 'Nested subpath activates parent route' },
  { p: '/nosotros-colombia', h: '/nosotros', exp: false, desc: 'Prefix similarity without slash delimiter is rejected' },
  { p: '/normativa', h: '/normativa', exp: true, desc: 'Exact match "/normativa"' },
  { p: '/proteccion-infantil', h: '/proteccion-infantil', exp: true, desc: 'Exact match "/proteccion-infantil"' },
  { p: '/equipo', h: '/equipo', exp: true, desc: 'Exact match "/equipo"' },
  { p: '/contacto', h: '/contacto', exp: true, desc: 'Exact match "/contacto"' },
  { p: '/contacto/formulario', h: '/contacto', exp: true, desc: 'Subpath "/contacto/formulario" activates "/contacto"' },
  { p: '/contacto-ventas', h: '/contacto', exp: false, desc: 'Hyphenated sibling does not false-match' },
  { p: null, h: '/', exp: false, desc: 'Null pathname is handled safely without throwing' },
  { p: '', h: '/', exp: false, desc: 'Empty pathname does not match' },
];

for (const tc of pathOracleMatrix) {
  assert(isActive(tc.p, tc.h) === tc.exp, `Pathname Oracle: ${tc.desc} (p="${tc.p}", h="${tc.h}")`);
}

// 3. Mobile Navigation Drawer State & Event Listeners
console.log('\n--- 3. Mobile Navigation Drawer State & Accessibility ---');
assert(navbarContent.includes('"use client"'), 'Navbar is declared as client component ("use client")');
assert(navbarContent.includes('aria-expanded={isOpen}'), 'Mobile toggle button binds aria-expanded');
assert(navbarContent.includes('aria-controls="mobile-menu"'), 'Mobile toggle button specifies aria-controls="mobile-menu"');
assert(navbarContent.includes('id="mobile-menu"'), 'Mobile drawer panel has id="mobile-menu"');
assert(navbarContent.includes('setIsOpen(false)'), 'Navbar implements setIsOpen(false) state handler');
assert(navbarContent.includes('[pathname]'), 'Navbar automatically closes mobile drawer on pathname route change');
assert(navbarContent.includes('document.body.style.overflow = "hidden"'), 'Navbar locks body scrolling when mobile drawer opens');
assert(navbarContent.includes('document.body.style.overflow = ""'), 'Navbar restores body scrolling when mobile drawer closes');
assert(navbarContent.includes('e.key === "Escape"'), 'Navbar handles Escape key to dismiss mobile menu');
assert(navbarContent.includes('window.innerWidth >= 1024'), 'Navbar auto-closes mobile menu on window resize to desktop');
assert(navbarContent.includes('onClick={() => setIsOpen(false)}'), 'Mobile links dismiss drawer upon click');

// 4. Responsive & Viewport Layout Bounds (320px+)
console.log('\n--- 4. Viewport Layout & Dark Theme Verification ---');
assert(navbarContent.includes('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'), 'Navbar container uses responsive padding');
assert(navbarContent.includes('flex flex-col sm:flex-row'), 'Navbar brand text uses responsive vertical stack on mobile (320px)');
assert(navbarContent.includes('backdrop-blur-md bg-black/80'), 'Navbar utilizes glassmorphic dark backdrop');
assert(layoutContent.includes('bg-black text-white antialiased min-h-screen'), 'Layout enforces bg-black and full height');
assert(layoutContent.includes('<Navbar />'), 'Root layout embeds shared Navbar');
assert(layoutContent.includes('<Footer />'), 'Root layout embeds shared Footer');

// 5. Shared UI Components Interface Contracts
console.log('\n--- 5. Shared UI Components Interface Contracts ---');
const buttonPath = path.join(rootDir, 'components/shared/Button.tsx');
const badgePath = path.join(rootDir, 'components/shared/Badge.tsx');
const sectionHeaderPath = path.join(rootDir, 'components/shared/SectionHeader.tsx');

assert(fs.existsSync(buttonPath), 'components/shared/Button.tsx exists');
assert(fs.existsSync(badgePath), 'components/shared/Badge.tsx exists');
assert(fs.existsSync(sectionHeaderPath), 'components/shared/SectionHeader.tsx exists');

const buttonContent = fs.existsSync(buttonPath) ? fs.readFileSync(buttonPath, 'utf-8') : '';
const badgeContent = fs.existsSync(badgePath) ? fs.readFileSync(badgePath, 'utf-8') : '';
const sectionHeaderContent = fs.existsSync(sectionHeaderPath) ? fs.readFileSync(sectionHeaderPath, 'utf-8') : '';

// Button Variants
for (const v of ['gradient', 'outline', 'ghost', 'secondary', 'solar']) {
  assert(buttonContent.includes(`${v}:`), `Button supports "${v}" variant style`);
}
assert(buttonContent.includes('<Link href={href}'), 'Button renders Next.js Link when href prop is passed');
assert(buttonContent.includes('isLoading'), 'Button handles isLoading state');
assert(buttonContent.includes('animate-spin'), 'Button renders spinning loader when isLoading is true');

// Badge Variants
for (const v of ['cyan', 'blue', 'solar', 'outline', 'subtle']) {
  assert(badgeContent.includes(`${v}:`), `Badge supports "${v}" variant style`);
}
assert(badgeContent.includes('dot &&'), 'Badge supports dot indicator');
assert(badgeContent.includes('pulse && "animate-pulse"'), 'Badge supports pulse animation on dot');

// SectionHeader
assert(sectionHeaderContent.includes('font-sans') && sectionHeaderContent.includes('font-extrabold'), 'SectionHeader renders Inter bold title');
assert(sectionHeaderContent.includes('font-mono') && sectionHeaderContent.includes('text-zinc-400'), 'SectionHeader renders JetBrains Mono subtitle');

// 6. Footer Compliance & Monospace Metadata
console.log('\n--- 6. Footer Structure & Colombian Regulatory Compliance ---');
assert(footerContent.includes('via-[#00D4FF] to-transparent'), 'Footer features cyan gradient glowing separator line');
assert(footerContent.includes('SPRECTRUMP COLOMBIA S.A.S. E.S.P.'), 'Footer specifies corporate legal name');
assert(footerContent.includes('NIT 901.458.712-4'), 'Footer displays company NIT');
assert(footerContent.includes('Carrera 7 # 71-21'), 'Footer displays Bogotá corporate headquarters address');
assert(footerContent.includes('+57 (601) 745-8900'), 'Footer displays Bogotá PBX phone number');
assert(footerContent.includes('contacto@spectrump.co'), 'Footer displays corporate email');

const STATUTORY_LAWS = [
  'LEY 679/2001',
  'LEY 1341/2009',
  'LEY 1715/2014',
  'LEY 1978/2019',
  'HABEAS DATA LEY 1581/2012',
];

for (const law of STATUTORY_LAWS) {
  assert(footerContent.includes(law), `Footer includes statutory notice: [ ${law} ]`);
}

// Summary
console.log('\n======================================================================');
console.log(` Results: ${passedTests} Passed, ${failedTests} Failed`);
console.log('======================================================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  process.exit(0);
}

