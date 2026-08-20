#!/usr/bin/env node

import { testSuite } from './helpers/test-utils.mjs';
import { runTier1Tests } from './e2e/tier1-feature-coverage.test.mjs';
import { runTier2Tests } from './e2e/tier2-boundary-corner.test.mjs';
import { runTier3Tests } from './e2e/tier3-cross-feature.test.mjs';
import { runTier4Tests } from './e2e/tier4-real-world-scenarios.test.mjs';

const startTime = Date.now();

console.log('\n' + '='.repeat(70));
console.log('  SPRECTRUMP COLOMBIA — 4-TIER E2E TEST RUNNER');
console.log('='.repeat(70) + '\n');

// 1. Execute Tier 1: Feature Coverage
console.log('▶ Running Tier 1: Feature Coverage (21 Features, >=5 tests/feature)...');
const t1Start = testSuite.passed;
runTier1Tests();
const t1Passed = testSuite.passed - t1Start;
console.log(`  ✓ Tier 1 Completed: ${t1Passed} tests executed.\n`);

// 2. Execute Tier 2: Boundary & Corner Cases
console.log('▶ Running Tier 2: Boundary & Corner Cases (21 Features, >=5 tests/feature)...');
const t2Start = testSuite.passed;
runTier2Tests();
const t2Passed = testSuite.passed - t2Start;
console.log(`  ✓ Tier 2 Completed: ${t2Passed} tests executed.\n`);

// 3. Execute Tier 3: Cross-Feature Combinations
console.log('▶ Running Tier 3: Cross-Feature Combinations & State Transitions...');
const t3Start = testSuite.passed;
runTier3Tests();
const t3Passed = testSuite.passed - t3Start;
console.log(`  ✓ Tier 3 Completed: ${t3Passed} tests executed.\n`);

// 4. Execute Tier 4: Real-World Scenarios
console.log('▶ Running Tier 4: Real-World Scenarios (SECOP II, Solar, Mobile, A11y)...');
const t4Start = testSuite.passed;
runTier4Tests();
const t4Passed = testSuite.passed - t4Start;
console.log(`  ✓ Tier 4 Completed: ${t4Passed} tests executed.\n`);

const duration = Date.now() - startTime;

console.log('='.repeat(70));
console.log('                      TEST EXECUTION SUMMARY');
console.log('='.repeat(70));
console.log(`  Tier 1 (Feature Coverage):           ${t1Passed.toString().padStart(4)} passed`);
console.log(`  Tier 2 (Boundary & Corner Cases):     ${t2Passed.toString().padStart(4)} passed`);
console.log(`  Tier 3 (Cross-Feature Combinations):  ${t3Passed.toString().padStart(4)} passed`);
console.log(`  Tier 4 (Real-World Scenarios):       ${t4Passed.toString().padStart(4)} passed`);
console.log('-'.repeat(70));
console.log(`  Total Tests Executed:                ${testSuite.tests.length.toString().padStart(4)}`);
console.log(`  Total Passed:                        ${testSuite.passed.toString().padStart(4)}`);
console.log(`  Total Failed:                        ${testSuite.failed.toString().padStart(4)}`);
console.log(`  Execution Time:                      ${duration} ms`);
console.log('='.repeat(70));

if (testSuite.failed > 0) {
  console.log('\n❌ TEST FAILURES DETECTED:');
  const failures = testSuite.tests.filter((t) => t.status === 'FAIL');
  for (const failure of failures) {
    console.log(`\n• [${failure.suite}] ${failure.name}`);
    console.log(`  Error: ${failure.error}`);
  }
  console.log('\n');
  process.exit(1);
} else {
  console.log('\n✅ ALL TESTS PASSED SUCCESSFULLY! Ready for deployment.\n');
  process.exit(0);
}
