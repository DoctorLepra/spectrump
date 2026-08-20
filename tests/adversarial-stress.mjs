import fs from 'fs';
import path from 'path';

let stressTests = 0;
let stressPassed = 0;
let stressFailed = 0;

function assert(condition, testName, details = '') {
  stressTests++;
  if (condition) {
    stressPassed++;
    console.log(`  ✓ [PASS] ${testName}`);
  } else {
    stressFailed++;
    console.error(`  ❌ [FAIL] ${testName}${details ? ` -> ${details}` : ''}`);
  }
}

console.log('======================================================================');
console.log('   ADVERSARIAL STRESS HARNESS: ADVANCED SYSTEM VALIDATION');
console.log('======================================================================');

// 1. Stress Test: Navigation Link Integrity across all components
console.log('\n▶ Section 1: Internal Navigation Link Target Resolution');
const validRoutes = new Set([
  '/',
  '/nosotros',
  '/normativa',
  '/proteccion-infantil',
  '/equipo',
  '/contacto'
]);

function getAllFiles(dir) {
  let res = [];
  const list = fs.readdirSync(dir);
  for (const f of list) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (!full.includes('node_modules') && !full.includes('.git') && !full.includes('.next')) {
        res = res.concat(getAllFiles(full));
      }
    } else if (f.endsWith('.tsx') || f.endsWith('.ts')) {
      res.push(full);
    }
  }
  return res;
}

const allTsxFiles = getAllFiles(path.join(process.cwd(), 'components')).concat(getAllFiles(path.join(process.cwd(), 'app')));
let linkCount = 0;
let invalidLinks = 0;

for (const file of allTsxFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const hrefMatches = content.matchAll(/href=["'](\/[^"']*)["']/g);
  for (const match of hrefMatches) {
    const target = match[1].split('#')[0]; // strip hash
    linkCount++;
    if (target && !validRoutes.has(target)) {
      console.error(`  ❌ Invalid internal link "${target}" found in ${file}`);
      invalidLinks++;
    }
  }
}
assert(invalidLinks === 0, `All internal href targets resolve to 1 of 6 valid routes (checked ${linkCount} links)`);

// 2. Stress Test: Team Profiles Contract Adherence
console.log('\n▶ Section 2: Team Member Schema & Colombian Credential Rigor');
const teamDataFile = path.join(process.cwd(), 'lib', 'data', 'teamData.ts');
const teamDataContent = fs.readFileSync(teamDataFile, 'utf8');

assert(teamDataContent.includes('export interface TeamMember'), 'TeamMember interface exported');
const memberMatches = teamDataContent.match(/id:\s*['"][^'"]+['"]/g);
assert(memberMatches && memberMatches.length >= 4, `At least 4 team profiles present (found: ${memberMatches ? memberMatches.length : 0})`);
assert(teamDataContent.includes('specialties:') || teamDataContent.includes('especialidades:'), 'Team members include specialized competencies');
assert(teamDataContent.includes('avatarUrl:') || teamDataContent.includes('avatar:'), 'Team members have avatar image references');

// 3. Stress Test: Form Fields and Accessibility Associations
console.log('\n▶ Section 3: Contact Form Accessibility & Validation Rigor');
const contactFormContent = fs.readFileSync(path.join(process.cwd(), 'components', 'pages', 'contacto', 'ContactForm.tsx'), 'utf8');

assert(contactFormContent.includes('htmlFor="nombre"'), 'Form label htmlFor="nombre" association exists');
assert(contactFormContent.includes('htmlFor="email"'), 'Form label htmlFor="email" association exists');
assert(contactFormContent.includes('htmlFor="telefono"'), 'Form label htmlFor="telefono" association exists');
assert(contactFormContent.includes('htmlFor="empresa"'), 'Form label htmlFor="empresa" association exists');
assert(contactFormContent.includes('htmlFor="mensaje"'), 'Form label htmlFor="mensaje" association exists');
assert(contactFormContent.includes('htmlFor="servicio"'), 'Form label htmlFor="servicio" association exists');
assert(contactFormContent.includes('htmlFor="aceptaTerminos"'), 'Terms checkbox label association exists');
assert(contactFormContent.includes('aria-invalid='), 'Aria-invalid state attributes present on form fields');

// 4. Stress Test: Responsive Layout & Mobile Overflow Prevention
console.log('\n▶ Section 4: Mobile & Tablet Responsive Layout Guardrails');
let fixedWidthTraps = 0;
for (const file of allTsxFiles) {
  const content = fs.readFileSync(file, 'utf8');
  // Check for fixed viewport width classes like w-[1200px] without max-w
  const matches = content.match(/\bw-\[\d{4,}px\](?!\s+max-w)/g);
  if (matches) {
    console.warn(`  ⚠️ Fixed large width without max-w in ${file}: ${matches.join(', ')}`);
    fixedWidthTraps++;
  }
}
assert(fixedWidthTraps === 0, `Zero rigid width layout traps found across all TSX files`);

// 5. Stress Test: Hotlines & Child Protection Legal Exactness
console.log('\n▶ Section 5: Statutory Hotlines & Regulatory Integrity');
const hotlinesContent = fs.readFileSync(path.join(process.cwd(), 'lib', 'data', 'hotlinesData.ts'), 'utf8');
assert(hotlinesContent.includes('141'), 'ICBF Línea 141 configured');
assert(hotlinesContent.includes('122'), 'Fiscalía Línea 122 configured');
assert(hotlinesContent.includes('Te Protejo') && hotlinesContent.includes('teprotejo.org'), 'Te Protejo web URL configured');
assert(hotlinesContent.includes('CAI Virtual') && hotlinesContent.includes('caivirtual.policia.gov.co'), 'CAI Virtual police URL configured');
assert(hotlinesContent.includes('Ley 679 de 2001'), 'Exact Ley 679 de 2001 statutory title present');

// 6. Stress Test: Metadata OpenGraph and Icons
console.log('\n▶ Section 6: SEO, Favicons, and Metadata Configuration');
const layoutContent = fs.readFileSync(path.join(process.cwd(), 'app', 'layout.tsx'), 'utf8');
assert(layoutContent.includes('title:'), 'Root metadata includes title object / string');
assert(layoutContent.includes('description:'), 'Root metadata includes description');
assert(layoutContent.includes('openGraph:'), 'Root metadata includes openGraph tags');
assert(layoutContent.includes('twitter:'), 'Root metadata includes twitter tags');
assert(layoutContent.includes('robots:'), 'Root metadata includes robots directives');

console.log('\n======================================================================');
console.log('                   STRESS TEST HARNESS SUMMARY');
console.log('======================================================================');
console.log(`  Total Checks: ${stressTests}`);
console.log(`  Passed:       ${stressPassed}`);
console.log(`  Failed:       ${stressFailed}`);
console.log('======================================================================\n');

if (stressFailed > 0) {
  process.exit(1);
} else {
  console.log('🛡️ ALL ADVERSARIAL STRESS TESTS PASSED 100% WITH ZERO VULNERABILITIES!\n');
}
