#!/usr/bin/env node
/**
 * Recursively convert PNG files to WebP in public image folders.
 * Preserves originals. Skips favicon, brand logos, and already-converted files.
 *
 * Usage: node scripts/convert-png-to-webp.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

const SCAN_DIRS = [
  path.join(PUBLIC, "images"),
  path.join(PUBLIC, "assets"),
  PUBLIC,
];

const QUALITY = 85;

/** Basenames or path fragments to skip (favicon, brand logos, app icons). */
const SKIP_PATTERNS = [
  /favicon\.png$/i,
  /hopetex-logo\.png$/i,
  /hopetex-mark\.png$/i,
  /icon\.png$/i,
  /apple-icon\.png$/i,
  /opengraph-image\.png$/i,
];

function shouldSkip(filePath) {
  const rel = path.relative(PUBLIC, filePath).replace(/\\/g, "/");
  return SKIP_PATTERNS.some((re) => re.test(rel) || re.test(path.basename(filePath)));
}

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function collectPngFiles(dir, results = []) {
  if (!(await exists(dir))) return results;

  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await collectPngFiles(fullPath, results);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".png")) {
      results.push(fullPath);
    }
  }
  return results;
}

async function convertPngToWebp(pngPath) {
  const webpPath = pngPath.replace(/\.png$/i, ".webp");

  if (await exists(webpPath)) {
    const pngStat = await fs.stat(pngPath);
    const webpStat = await fs.stat(webpPath);
    if (webpStat.mtimeMs >= pngStat.mtimeMs) {
      return { status: "skipped", pngPath, webpPath, reason: "already up to date" };
    }
  }

  const meta = await sharp(pngPath).metadata();
  await sharp(pngPath)
    .webp({
      quality: QUALITY,
      alphaQuality: QUALITY,
      lossless: false,
      effort: 4,
    })
    .toFile(webpPath);

  const pngSize = (await fs.stat(pngPath)).size;
  const webpSize = (await fs.stat(webpPath)).size;
  const savings = ((1 - webpSize / pngSize) * 100).toFixed(1);

  return {
    status: "converted",
    pngPath,
    webpPath,
    hasAlpha: meta.hasAlpha ?? false,
    pngSize,
    webpSize,
    savings: `${savings}%`,
  };
}

async function main() {
  console.log("PNG → WebP conversion\n");
  console.log(`Quality: ${QUALITY}`);
  console.log(`Scan dirs: ${SCAN_DIRS.map((d) => path.relative(ROOT, d)).join(", ")}\n`);

  const allPngs = new Set();
  for (const dir of SCAN_DIRS) {
    const files = await collectPngFiles(dir);
    files.forEach((f) => allPngs.add(f));
  }

  const pngList = [...allPngs].sort();
  console.log(`Found ${pngList.length} PNG file(s)\n`);

  const results = { converted: [], skipped: [], failed: [] };

  for (const pngPath of pngList) {
    const rel = path.relative(ROOT, pngPath);

    if (shouldSkip(pngPath)) {
      console.log(`SKIP (protected): ${rel}`);
      results.skipped.push({ pngPath: rel, reason: "protected file" });
      continue;
    }

    try {
      const result = await convertPngToWebp(pngPath);
      const relWebp = path.relative(ROOT, result.webpPath);

      if (result.status === "skipped") {
        console.log(`SKIP (exists): ${rel}`);
        results.skipped.push({ pngPath: rel, webpPath: relWebp, reason: result.reason });
      } else {
        console.log(
          `OK: ${rel} → ${relWebp} (${formatBytes(result.pngSize)} → ${formatBytes(result.webpSize)}, -${result.savings})`
        );
        results.converted.push({
          pngPath: rel,
          webpPath: relWebp,
          hasAlpha: result.hasAlpha,
        });
      }
    } catch (err) {
      console.error(`FAIL: ${rel} — ${err.message}`);
      results.failed.push({ pngPath: rel, error: err.message });
    }
  }

  const manifestPath = path.join(ROOT, "scripts", "png-to-webp-manifest.json");
  await fs.writeFile(manifestPath, JSON.stringify(results, null, 2));

  console.log("\n--- Summary ---");
  console.log(`Converted: ${results.converted.length}`);
  console.log(`Skipped:   ${results.skipped.length}`);
  console.log(`Failed:    ${results.failed.length}`);
  console.log(`Manifest:  ${path.relative(ROOT, manifestPath)}`);

  if (results.failed.length > 0) process.exit(1);
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
