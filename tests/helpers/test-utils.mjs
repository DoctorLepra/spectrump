import fs from 'node:fs';
import path from 'node:path';

// Project root resolution
export const PROJECT_ROOT = path.resolve(process.cwd());

export const testSuite = {
  currentSuite: 'Default Suite',
  tests: [],
  passed: 0,
  failed: 0,
  skipped: 0,
  suites: {},
};

export function describe(suiteName, fn) {
  testSuite.currentSuite = suiteName;
  if (!testSuite.suites[suiteName]) {
    testSuite.suites[suiteName] = { passed: 0, failed: 0, tests: [] };
  }
  fn();
}

export function test(testName, fn) {
  const suiteName = testSuite.currentSuite;
  try {
    fn();
    testSuite.passed++;
    testSuite.suites[suiteName].passed++;
    testSuite.tests.push({ suite: suiteName, name: testName, status: 'PASS' });
  } catch (err) {
    testSuite.failed++;
    testSuite.suites[suiteName].failed++;
    testSuite.tests.push({
      suite: suiteName,
      name: testName,
      status: 'FAIL',
      error: err.message || String(err),
      stack: err.stack,
    });
  }
}

export function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

export function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(
      `${message || 'Value mismatch'}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`
    );
  }
}

export function assertMatches(actual, regex, message) {
  if (!regex.test(actual)) {
    throw new Error(
      `${message || 'Regex mismatch'}: expected string to match ${regex.toString()}, got snippet: "${String(actual).slice(0, 100)}..."`
    );
  }
}

export function assertIncludes(actual, searchString, message) {
  if (typeof actual === 'string' && !actual.includes(searchString)) {
    throw new Error(
      `${message || 'Include mismatch'}: expected content to include "${searchString}"`
    );
  } else if (Array.isArray(actual) && !actual.includes(searchString)) {
    throw new Error(
      `${message || 'Array include mismatch'}: expected array to include ${JSON.stringify(searchString)}`
    );
  }
}

// File System Helpers
export function fileExists(relativeFilePath) {
  const fullPath = path.isAbsolute(relativeFilePath)
    ? relativeFilePath
    : path.join(PROJECT_ROOT, relativeFilePath);
  return fs.existsSync(fullPath);
}

export function readFile(relativeFilePath) {
  const fullPath = path.isAbsolute(relativeFilePath)
    ? relativeFilePath
    : path.join(PROJECT_ROOT, relativeFilePath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`File does not exist: ${relativeFilePath}`);
  }
  return fs.readFileSync(fullPath, 'utf8');
}

export function readJson(relativeFilePath) {
  const content = readFile(relativeFilePath);
  return JSON.parse(content);
}

export function listFilesRecursively(dirPath, extFilter = null) {
  const fullDir = path.isAbsolute(dirPath)
    ? dirPath
    : path.join(PROJECT_ROOT, dirPath);
  if (!fs.existsSync(fullDir)) return [];

  const results = [];
  function scan(currentDir) {
    const list = fs.readdirSync(currentDir);
    for (const item of list) {
      if (item === 'node_modules' || item === '.next' || item === '.git' || item === '.agents') {
        continue;
      }
      const fullItemPath = path.join(currentDir, item);
      const stat = fs.statSync(fullItemPath);
      if (stat.isDirectory()) {
        scan(fullItemPath);
      } else {
        if (!extFilter || fullItemPath.endsWith(extFilter)) {
          results.push(path.relative(PROJECT_ROOT, fullItemPath).replace(/\\/g, '/'));
        }
      }
    }
  }
  scan(fullDir);
  return results;
}

// Spanish Copy and Entity Validation Helpers
export const SPANISH_STOPWORDS_AND_KEYWORDS = [
  'conectividad',
  'energía',
  'futuro',
  'colombia',
  'licitación',
  'solar',
  'telecomunicaciones',
  'nosotros',
  'normativa',
  'protección',
  'infantil',
  'equipo',
  'contacto',
  'mintic',
  'crc',
  'secop',
  'misión',
  'visión',
  'valores',
  'propuesta',
];

export const CORE_ROUTES = [
  '/',
  '/nosotros',
  '/normativa',
  '/proteccion-infantil',
  '/equipo',
  '/contacto',
];

export const REQUIRED_DESIGN_TOKENS = {
  pureBlack: '#000000',
  cardDark: '#111111',
  borderSubtle: '#222222',
  electricBlue: '#0066FF',
  electricCyan: '#00D4FF',
};
