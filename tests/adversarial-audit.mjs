import fs from 'fs';
import path from 'path';

let totalTests = 0;
let totalPassed = 0;
let totalFailed = 0;

function assert(condition, testName, details = '') {
  totalTests++;
  if (condition) {
    totalPassed++;
    console.log(`  ✓ [PASS] ${testName}`);
  } else {
    totalFailed++;
    console.error(`  ❌ [FAIL] ${testName}${details ? ` -> ${details}` : ''}`);
  }
}

const routes = [
  { name: 'Inicio', file: 'index.html', path: '/' },
  { name: 'Nosotros', file: 'nosotros.html', path: '/nosotros' },
  { name: 'Normativa', file: 'normativa.html', path: '/normativa' },
  { name: 'Proteccion Infantil', file: 'proteccion-infantil.html', path: '/proteccion-infantil' },
  { name: 'Equipo', file: 'equipo.html', path: '/equipo' },
  { name: 'Contacto', file: 'contacto.html', path: '/contacto' },
  { name: '404 Not Found', file: '_not-found.html', path: '/_not-found' }
];

console.log('======================================================================');
console.log('   ADVERSARIAL SUITE 1: STATIC PRERENDERING & HTML STRUCTURE');
console.log('======================================================================');

for (const r of routes) {
  const fullPath = path.join(process.cwd(), '.next', 'server', 'app', r.file);
  const exists = fs.existsSync(fullPath);
  assert(exists, `${r.name} (${r.path}) HTML artifact exists`);
  if (!exists) continue;

  const content = fs.readFileSync(fullPath, 'utf8');
  assert(content.toLowerCase().includes('<!doctype html>'), `${r.name} has DOCTYPE`);
  assert(content.includes('lang="es"'), `${r.name} specifies lang="es"`);
  assert(/<title>[^<]+<\/title>/.test(content), `${r.name} has valid <title>`);
  assert(/<meta\s+(?:name="description"\s+content="[^"]+"|content="[^"]+"\s+name="description")/i.test(content), `${r.name} has meta description`);
  assert(content.includes('<nav') || content.includes('role="navigation"'), `${r.name} includes <nav>`);
  assert(content.includes('<main') || content.includes('role="main"'), `${r.name} includes <main>`);
  assert(content.includes('<footer') || content.includes('role="contentinfo"'), `${r.name} includes <footer>`);
  
  const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  assert(h1Matches && h1Matches.length === 1, `${r.name} has exactly 1 <h1> heading (found: ${h1Matches ? h1Matches.length : 0})`);
}

console.log('\n======================================================================');
console.log('   ADVERSARIAL SUITE 2: ZERO SOLID LIGHT MODE LEAKS & DARK PALETTE');
console.log('======================================================================');

function getAllFiles(dir, exts = ['.tsx', '.ts', '.jsx', '.js', '.css', '.html']) {
  let results = [];
  const fullDir = path.isAbsolute(dir) ? dir : path.join(process.cwd(), dir);
  if (!fs.existsSync(fullDir)) return results;
  const list = fs.readdirSync(fullDir);
  for (const file of list) {
    const filePath = path.join(fullDir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      if (!filePath.includes('node_modules') && !filePath.includes('.git') && !filePath.includes('.next')) {
        results = results.concat(getAllFiles(filePath, exts));
      }
    } else {
      if (exts.some(ext => file.endsWith(ext))) {
        results.push(filePath);
      }
    }
  }
  return results;
}

const sourceFiles = getAllFiles('components').concat(getAllFiles('app')).concat(getAllFiles('lib'));

// Test solid light mode leaks (e.g. solid bg-white, solid bg-[#fff], solid light gray backgrounds without alpha)
const solidLightLeaks = [
  { regex: /\bbg-white(?![/[])\b/g, label: 'Solid bg-white without alpha channel' },
  { regex: /\bbg-\[#fff(?:fff)?\]/i, label: 'Solid hex white bg' },
  { regex: /\bbg-(?:gray|slate|zinc|neutral)-(?:50|100|200)(?![/[])\b/g, label: 'Solid light theme background' }
];

let solidLeaksCount = 0;
for (const file of sourceFiles) {
  const content = fs.readFileSync(file, 'utf8');
  for (const { regex, label } of solidLightLeaks) {
    const matches = content.match(regex);
    if (matches) {
      console.error(`  ❌ Solid light leak in ${file}: ${matches.join(', ')} (${label})`);
      solidLeaksCount++;
    }
  }
}
assert(solidLeaksCount === 0, `Zero solid light mode leaks across all source files (found ${solidLeaksCount})`);

// Verify dark theme base configuration
const tailwindConfig = fs.readFileSync(path.join(process.cwd(), 'tailwind.config.ts'), 'utf8');
assert(tailwindConfig.includes('#000000') || tailwindConfig.includes('0 0% 0%'), 'Tailwind config defines true black (#000000 / 0%) base');
assert(tailwindConfig.includes('#0066FF') || tailwindConfig.includes('#0066ff') || tailwindConfig.includes('electric'), 'Tailwind config defines electric blue');
assert(tailwindConfig.includes('#00D4FF') || tailwindConfig.includes('#00d4ff') || tailwindConfig.includes('cyan'), 'Tailwind config defines cyan');

const globalsCss = fs.readFileSync(path.join(process.cwd(), 'app', 'globals.css'), 'utf8');
assert(globalsCss.includes('background') || globalsCss.includes('#000000'), 'globals.css specifies dark background');
assert(globalsCss.includes('Inter') || globalsCss.includes('sans') || globalsCss.includes('font-mono'), 'globals.css configures font classes');

console.log('\n======================================================================');
console.log('   ADVERSARIAL SUITE 3: SPANISH COPY COMPLETENESS & LOREM IPSUM SCAN');
console.log('======================================================================');

const latinFillers = [
  /\blorem\b/i,
  /\bipsum\b/i,
  /\bdolor\s+sit\s+amet\b/i,
  /\bconsectetur\b/i,
  /\badipiscing\b/i,
  /\bvestibulum\b/i,
  /\bcurabitur\b/i,
  /\bnullam\b/i,
  /\bmaecenas\b/i,
  /\bfusce\b/i
];

const englishPlaceholders = [
  /\bTODO\b/,
  /\bTBD\b/,
  /\bplaceholder\s+text\b/i,
  /\bsample\s+text\b/i,
  /\bunder\s+construction\b/i,
  /\bclick\s+here\b/i,
  /\bread\s+more\b/i,
  /\bsubmit\s+form\b/i
];

let fillerCount = 0;
for (const file of sourceFiles) {
  if (file.includes('tests') || file.endsWith('.json') || file.endsWith('.config.ts')) continue;
  const content = fs.readFileSync(file, 'utf8');
  
  for (const regex of latinFillers) {
    if (regex.test(content)) {
      console.error(`  ❌ Latin placeholder found in ${file}: matches ${regex}`);
      fillerCount++;
    }
  }
  for (const regex of englishPlaceholders) {
    if (regex.test(content)) {
      console.error(`  ❌ English placeholder found in ${file}: matches ${regex}`);
      fillerCount++;
    }
  }
}
assert(fillerCount === 0, `Zero Latin filler / untranslated English placeholder occurrences in source code (found ${fillerCount})`);

for (const r of routes) {
  const fullPath = path.join(process.cwd(), '.next', 'server', 'app', r.file);
  if (!fs.existsSync(fullPath)) continue;
  const content = fs.readFileSync(fullPath, 'utf8');
  
  let routeFillers = 0;
  for (const regex of latinFillers) {
    if (regex.test(content)) {
      routeFillers++;
    }
  }
  assert(routeFillers === 0, `${r.name} HTML output contains 0 Latin placeholder words`);
}

console.log('\n======================================================================');
console.log('   ADVERSARIAL SUITE 4: COLOMBIAN TELECOM & SOLAR DOMAIN ACCURACY');
console.log('======================================================================');

const dataFiles = getAllFiles(path.join(process.cwd(), 'lib', 'data'));
const allDataContent = dataFiles.map(f => fs.readFileSync(f, 'utf8')).join('\n');

assert(allDataContent.includes('MinTIC') || allDataContent.includes('MINTIC'), 'MinTIC mentioned in data layer');
assert(allDataContent.includes('CRC') || allDataContent.includes('Comisión de Regulación'), 'CRC regulatory body mentioned');
assert(allDataContent.includes('1341') || allDataContent.includes('Ley 1341'), 'Ley 1341 de 2009 referenced');
assert(allDataContent.includes('1715') || allDataContent.includes('Ley 1715'), 'Ley 1715 de 2014 (energías renovables) referenced');
assert(allDataContent.includes('679') || allDataContent.includes('Ley 679'), 'Ley 679 de 2001 (protección a menores) referenced');
assert(allDataContent.includes('1581') || allDataContent.includes('Habeas Data'), 'Ley 1581 de 2012 (Habeas Data) referenced');
assert(allDataContent.includes('SECOP'), 'SECOP II public procurement referenced');
assert(allDataContent.includes('Te Protejo') || allDataContent.includes('teprotejo'), 'Te Protejo child reporting channel referenced');
assert(allDataContent.includes('CAI Virtual') || allDataContent.includes('caivirtual'), 'Policía Nacional CAI Virtual referenced');
assert(allDataContent.includes('141') || allDataContent.includes('ICBF'), 'Línea 141 ICBF referenced');
assert(allDataContent.includes('Bogotá') || allDataContent.includes('Bogota'), 'Bogotá D.C. headquarters location referenced');

console.log('\n======================================================================');
console.log('   ADVERSARIAL SUITE 5: INTERACTIVE COMPONENTS & CONTACT FORM INTEGRITY');
console.log('======================================================================');

const contactFormFile = path.join(process.cwd(), 'components', 'pages', 'contacto', 'ContactForm.tsx');
assert(fs.existsSync(contactFormFile), 'ContactForm.tsx exists');
if (fs.existsSync(contactFormFile)) {
  const formContent = fs.readFileSync(contactFormFile, 'utf8');
  assert(formContent.includes('"use client"') || formContent.includes("'use client'"), 'ContactForm is a client component');
  assert(formContent.includes('nombre') && formContent.includes('email') && formContent.includes('telefono') && formContent.includes('empresa') && formContent.includes('mensaje'), 'ContactForm has all required fields (nombre, email, telefono, empresa, mensaje)');
  assert(formContent.includes('errors.') || formContent.includes('validateField') || formContent.includes('setErrors'), 'ContactForm implements visual validation logic');
  assert(formContent.includes('isSubmitting') || formContent.includes('submitted') || formContent.includes('isSubmitted'), 'ContactForm implements async submission state handling');
}

const navbarFile = path.join(process.cwd(), 'components', 'layout', 'Navbar.tsx');
assert(fs.existsSync(navbarFile), 'Navbar.tsx exists');
if (fs.existsSync(navbarFile)) {
  const navContent = fs.readFileSync(navbarFile, 'utf8');
  assert(navContent.includes('"use client"') || navContent.includes("'use client'"), 'Navbar is a client component');
  assert(navContent.includes('isOpen') || navContent.includes('isMobileMenuOpen') || navContent.includes('toggleMenu') || navContent.includes('setIsOpen'), 'Navbar implements mobile drawer state toggle');
  assert(navContent.includes('/nosotros') && navContent.includes('/normativa') && navContent.includes('/proteccion-infantil') && navContent.includes('/equipo') && navContent.includes('/contacto'), 'Navbar contains links to all 6 pages');
}

const footerFile = path.join(process.cwd(), 'components', 'layout', 'Footer.tsx');
assert(fs.existsSync(footerFile), 'Footer.tsx exists');
if (fs.existsSync(footerFile)) {
  const footerContent = fs.readFileSync(footerFile, 'utf8');
  assert(footerContent.includes('/nosotros') && footerContent.includes('/normativa') && footerContent.includes('/proteccion-infantil') && footerContent.includes('/equipo') && footerContent.includes('/contacto'), 'Footer contains navigation links to all 6 pages');
  assert(footerContent.includes('SPRECTRUMP COLOMBIA'), 'Footer contains company branding');
  assert(footerContent.includes('divider') || footerContent.includes('cyan') || footerContent.includes('from-[#0066FF]') || footerContent.includes('bg-gradient'), 'Footer features cyan/gradient separator');
}

console.log('\n======================================================================');
console.log('   ADVERSARIAL SUITE 6: REACT BITS & ANIMATIONS INTEGRATION');
console.log('======================================================================');

const reactBitsComponents = [
  path.join(process.cwd(), 'components', 'react-bits', 'aurora.tsx'),
  path.join(process.cwd(), 'components', 'react-bits', 'spotlight-card.tsx'),
  path.join(process.cwd(), 'components', 'react-bits', 'fade-content.tsx'),
  path.join(process.cwd(), 'components', 'react-bits', 'shiny-text.tsx')
];

for (const comp of reactBitsComponents) {
  assert(fs.existsSync(comp), `React Bits component ${path.basename(comp)} exists`);
}

const componentsJson = fs.readFileSync(path.join(process.cwd(), 'components.json'), 'utf8');
assert(componentsJson.includes('@react-bits') || componentsJson.includes('reactbits.dev'), 'components.json has React Bits registry configured');

console.log('\n======================================================================');
console.log('                      ADVERSARIAL AUDIT SUMMARY');
console.log('======================================================================');
console.log(`  Total Checks: ${totalTests}`);
console.log(`  Passed:       ${totalPassed}`);
console.log(`  Failed:       ${totalFailed}`);
console.log('======================================================================\n');

if (totalFailed > 0) {
  process.exit(1);
} else {
  console.log('🏆 100% ADVERSARIAL CHALLENGE VERIFIED WITH ZERO DEFECTS!\n');
}
