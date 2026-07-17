import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const sourceDir = path.join(process.cwd(), "public", "artworks");
const outputDir = path.join(process.cwd(), "public", "artworks-watermarked");
const watermarkText = "Wewa Čambor";
const signatureText = "© Wewa Čambor";
const supportedExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
]);

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function createWatermarkSvg(width, height) {
  const fontSize = Math.max(22, Math.round(Math.min(width, height) / 16));
  const signatureFontSize = Math.max(18, Math.round(fontSize * 0.82));
  const patternWidth = fontSize * 10;
  const patternHeight = fontSize * 5;
  const padding = Math.round(fontSize * 0.9);

  return `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="watermark" patternUnits="userSpaceOnUse" width="${patternWidth}" height="${patternHeight}" patternTransform="rotate(-28)">
      <text x="0" y="${fontSize}" font-family="Arial, Helvetica, sans-serif" font-size="${fontSize}" font-weight="700" fill="rgba(255,255,255,0.14)" stroke="rgba(0,0,0,0.18)" stroke-width="1">${escapeXml(watermarkText)}</text>
    </pattern>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(0,0,0,0.55)" />
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#watermark)" opacity="0.9" />
  <g filter="url(#shadow)">
    <text x="${width - padding}" y="${height - padding}" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="${signatureFontSize}" font-weight="700" fill="rgba(255,255,255,0.62)">${escapeXml(signatureText)}</text>
  </g>
</svg>`;
}

async function listImageFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return listImageFiles(fullPath);
      }

      const extension = path.extname(entry.name).toLowerCase();
      return supportedExtensions.has(extension) ? [fullPath] : [];
    }),
  );

  return files.flat();
}

async function watermarkImage(sourcePath) {
  const relativePath = path.relative(sourceDir, sourcePath);
  const targetPath = path.join(outputDir, relativePath);
  const image = sharp(sourcePath, { failOn: "none" });
  const metadata = await image.metadata();

  if (!metadata.width || !metadata.height) {
    throw new Error(`Could not read image size: ${relativePath}`);
  }

  await fs.mkdir(path.dirname(targetPath), { recursive: true });

  const watermark = Buffer.from(
    createWatermarkSvg(metadata.width, metadata.height),
  );

  await image
    .rotate()
    .composite([{ input: watermark, top: 0, left: 0 }])
    .toFile(targetPath);

  return relativePath;
}

async function main() {
  await fs.access(sourceDir);
  await fs.rm(outputDir, { recursive: true, force: true });

  const imageFiles = await listImageFiles(sourceDir);
  const processed = await Promise.all(imageFiles.map(watermarkImage));

  console.log(
    `Watermarked ${processed.length} artwork files into ${path.relative(process.cwd(), outputDir)}.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
