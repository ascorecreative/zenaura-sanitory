/**
 * fix-rollup.cjs
 * 
 * Hostinger's Linux server has GLIBC 2.28, but @rollup/rollup-linux-x64-gnu
 * requires GLIBC 2.29. npm installs the native binary anyway (known npm bug
 * https://github.com/npm/cli/issues/4828), and Rollup tries to load it first.
 *
 * This script deletes the broken native binary BEFORE vite build runs,
 * forcing Rollup to fall back to @rollup/wasm-node (pure JS/WASM, no GLIBC).
 */

const fs = require('fs');
const path = require('path');

const brokenBinaries = [
  path.join(__dirname, '..', 'node_modules', '@rollup', 'rollup-linux-x64-gnu'),
  path.join(__dirname, '..', 'node_modules', '@rollup', 'rollup-linux-x64-musl'),
];

let patched = false;

for (const dir of brokenBinaries) {
  if (fs.existsSync(dir)) {
    try {
      fs.rmSync(dir, { recursive: true, force: true });
      console.log(`[fix-rollup] Removed ${path.basename(dir)} (GLIBC incompatible)`);
      patched = true;
    } catch (err) {
      console.warn(`[fix-rollup] Could not remove ${path.basename(dir)}: ${err.message}`);
    }
  }
}

if (patched) {
  console.log('[fix-rollup] Rollup will use @rollup/wasm-node fallback (cross-platform)');
} else {
  console.log('[fix-rollup] No native rollup binaries found to patch (OK)');
}
