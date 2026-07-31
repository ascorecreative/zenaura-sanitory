/**
 * fix-rollup.cjs
 * 
 * DEFINITIVE Hostinger GLIBC fix.
 * 
 * Problem: Hostinger has GLIBC 2.28, but rollup's native binary needs 2.29.
 * Deleting the binary doesn't help because rollup has no WASM fallback —
 * it just crashes with MODULE_NOT_FOUND.
 *
 * Solution: Replace the ENTIRE rollup package directory with @rollup/wasm-node,
 * which is an official drop-in replacement that uses pure WebAssembly
 * instead of native C++ bindings. Zero GLIBC dependency.
 */

const fs = require('fs');
const path = require('path');

const nodeModules = path.join(__dirname, '..', 'node_modules');
const rollupDir = path.join(nodeModules, 'rollup');
const wasmNodeDir = path.join(nodeModules, '@rollup', 'wasm-node');

// Only patch on Linux (i.e., Hostinger server), skip on Mac/Windows dev machines
if (process.platform !== 'linux') {
  console.log('[fix-rollup] Not Linux — skipping patch (native rollup works here)');
  process.exit(0);
}

if (!fs.existsSync(wasmNodeDir)) {
  console.error('[fix-rollup] ERROR: @rollup/wasm-node not found in node_modules!');
  process.exit(1);
}

if (!fs.existsSync(rollupDir)) {
  console.error('[fix-rollup] ERROR: rollup not found in node_modules!');
  process.exit(1);
}

console.log('[fix-rollup] Linux detected — replacing native rollup with @rollup/wasm-node...');

// Step 1: Delete the native rollup package entirely
fs.rmSync(rollupDir, { recursive: true, force: true });
console.log('[fix-rollup] Deleted native rollup package');

// Step 2: Copy @rollup/wasm-node in its place as "rollup"
fs.cpSync(wasmNodeDir, rollupDir, { recursive: true });
console.log('[fix-rollup] Copied @rollup/wasm-node -> rollup');

// Step 3: Fix the package name in the copied package.json so node resolves it as "rollup"
const pkgJsonPath = path.join(rollupDir, 'package.json');
if (fs.existsSync(pkgJsonPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
  pkg.name = 'rollup';
  fs.writeFileSync(pkgJsonPath, JSON.stringify(pkg, null, 2));
  console.log('[fix-rollup] Patched package.json name to "rollup"');
}

console.log('[fix-rollup] Done! Rollup will use pure WASM — zero GLIBC dependency.');
