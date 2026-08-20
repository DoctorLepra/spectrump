/**
 * Milestone 1 Automated Verification Runner
 * Validates configurations, directory structure, design tokens, and build integrity.
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

console.log('\n========================================');
console.log(' SPRECTRUMP COLOMBIA — Milestone 1 Verification');
console.log('========================================\n');

// 1. Check Directory Tree
console.log('--- 1. Directory Structure Verification ---');
const requiredDirs = [
  'app',
  'app/nosotros',
  'app/normativa',
  'app/proteccion-infantil',
  'app/equipo',
  'app/contacto',
  'components/layout',
  'components/shared',
  'components/ui',
  'components/pages/home',
  'components/pages/nosotros',
  'components/pages/normativa',
  'components/pages/proteccion',
  'components/pages/equipo',
  'components/pages/contacto',
  'components/react-bits',
  'lib/data',
  'tests/e2e',
  'tests/unit',
  'public/images',
  'public/icons',
];

for (const dir of requiredDirs) {
  const fullPath = path.join(rootDir, dir);
  assert(fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory(), `Directory exists: ${dir}`);
}

// 2. Check components.json Configuration
console.log('\n--- 2. components.json Registry Verification ---');
const componentsJsonPath = path.join(rootDir, 'components.json');
let componentsJsonValid = false;
if (fs.existsSync(componentsJsonPath)) {
  try {
    const raw = fs.readFileSync(componentsJsonPath, 'utf-8');
    const parsed = JSON.parse(raw);
    assert(parsed.rsc === true, 'components.json: rsc is true');
    assert(parsed.tsx === true, 'components.json: tsx is true');
    assert(parsed.tailwind?.config === 'tailwind.config.ts', 'components.json: tailwind config points to tailwind.config.ts');
    assert(
      parsed.registries && parsed.registries['@react-bits'] === 'https://reactbits.dev/r/{name}.json',
      'components.json: @react-bits registry mapped to https://reactbits.dev/r/{name}.json'
    );
    assert(parsed.aliases?.components === '@/components', 'components.json: aliases.components is "@/components"');
    assert(parsed.aliases?.utils === '@/lib/utils', 'components.json: aliases.utils is "@/lib/utils"');
    componentsJsonValid = true;
  } catch (err) {
    assert(false, 'components.json: valid JSON syntax', err.message);
  }
} else {
  assert(false, 'components.json exists');
}

// 3. Check next.config.mjs
console.log('\n--- 3. next.config.mjs Verification ---');
const nextConfigPath = path.join(rootDir, 'next.config.mjs');
if (fs.existsSync(nextConfigPath)) {
  const content = fs.readFileSync(nextConfigPath, 'utf-8');
  assert(content.includes('reactStrictMode: true'), 'next.config.mjs: reactStrictMode is enabled');
  assert(content.includes("'image/avif'") && content.includes("'image/webp'"), 'next.config.mjs: image formats AVIF and WebP configured');
  assert(content.includes('images.unsplash.com'), 'next.config.mjs: remotePatterns includes images.unsplash.com');
  assert(content.includes('poweredByHeader: false'), 'next.config.mjs: poweredByHeader is false');
} else {
  assert(false, 'next.config.mjs exists');
}

// 4. Check lib/utils.ts
console.log('\n--- 4. lib/utils.ts Verification ---');
const utilsPath = path.join(rootDir, 'lib', 'utils.ts');
if (fs.existsSync(utilsPath)) {
  const content = fs.readFileSync(utilsPath, 'utf-8');
  assert(content.includes('export function cn'), 'lib/utils.ts exports cn function');
  assert(content.includes('clsx') && content.includes('twMerge'), 'lib/utils.ts uses clsx and twMerge');
} else {
  assert(false, 'lib/utils.ts exists');
}

// 5. Check tailwind.config.ts Design Tokens
console.log('\n--- 5. tailwind.config.ts Design Tokens Verification ---');
const tailwindConfigPath = path.join(rootDir, 'tailwind.config.ts');
if (fs.existsSync(tailwindConfigPath)) {
  const content = fs.readFileSync(tailwindConfigPath, 'utf-8');
  assert(content.includes('#000000') || content.includes('#0a0a0a'), 'tailwind.config.ts includes base dark background');
  assert(content.includes('#0066FF') && content.includes('#00D4FF'), 'tailwind.config.ts includes electric blue -> cyan gradient colors');
  assert(content.includes('--font-sans') && content.includes('--font-mono'), 'tailwind.config.ts configures sans and mono font variables');
} else {
  assert(false, 'tailwind.config.ts exists');
}

// 6. Check app/layout.tsx
console.log('\n--- 6. app/layout.tsx Font & Structure Verification ---');
const layoutPath = path.join(rootDir, 'app', 'layout.tsx');
if (fs.existsSync(layoutPath)) {
  const content = fs.readFileSync(layoutPath, 'utf-8');
  assert(content.includes('Inter') && content.includes('JetBrains_Mono'), 'app/layout.tsx loads Inter and JetBrains_Mono from next/font/google');
  assert(content.includes('--font-sans') && content.includes('--font-mono'), 'app/layout.tsx exposes --font-sans and --font-mono variables');
  assert(content.includes('lang="es"'), 'app/layout.tsx sets lang="es"');
  assert(content.includes('dark'), 'app/layout.tsx sets dark theme class');
} else {
  assert(false, 'app/layout.tsx exists');
}

// 7. Check all 6 route pages
console.log('\n--- 7. Route Pages Verification ---');
const routes = [
  'app/page.tsx',
  'app/nosotros/page.tsx',
  'app/normativa/page.tsx',
  'app/proteccion-infantil/page.tsx',
  'app/equipo/page.tsx',
  'app/contacto/page.tsx',
];

for (const r of routes) {
  const fullPath = path.join(rootDir, r);
  assert(fs.existsSync(fullPath), `Route page exists: ${r}`);
}

// 8. Summary
console.log('\n========================================');
console.log(`Results: ${passedTests} Passed, ${failedTests} Failed`);
console.log('========================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
