const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = process.cwd();

const imageDir = path.join(root, "src", "assets", "images");
const optimizedDir = path.join(imageDir, "optimized");
const weddingOriginalDir = path.join(imageDir, "wedding", "original");
const weddingWebDir = path.join(imageDir, "wedding", "web");
const weddingThumbDir = path.join(imageDir, "wedding", "thumbs");

const stillImageExtensions = new Set([".jpg", ".jpeg", ".png"]);

const topLevelProfiles = {
  bg: { width: 1600, quality: 80 },
  intro: { width: 1200, quality: 80 },
  LoveLetter: { width: 900, quality: 78 },
  ThankYou: { width: 1600, quality: 80 },
  footer: { width: 1200, quality: 80 },
  brideImg: { width: 900, quality: 80 },
  groomImg: { width: 900, quality: 80 },
  couple: { width: 1200, quality: 80 },
  story1: { width: 1000, quality: 78 },
  story2: { width: 1000, quality: 78 },
  story3: { width: 1000, quality: 78 },
};

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function writeWebp(input, output, options) {
  await sharp(input)
    .rotate()
    .resize({
      width: options.width,
      height: options.height,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: options.quality })
    .toFile(output);
}

async function optimizeTopLevelImages() {
  ensureDir(optimizedDir);

  const files = fs
    .readdirSync(imageDir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((file) => stillImageExtensions.has(path.extname(file).toLowerCase()));

  for (const file of files) {
    const name = path.parse(file).name;
    const profile = topLevelProfiles[name] || { width: 1200, quality: 80 };
    const input = path.join(imageDir, file);
    const output = path.join(optimizedDir, `${name}.webp`);

    await writeWebp(input, output, profile);

    const before = fs.statSync(input).size;
    const after = fs.statSync(output).size;
    console.log(`${file} -> optimized/${name}.webp (${formatBytes(before)} -> ${formatBytes(after)})`);
  }
}

async function optimizeWeddingGallery() {
  if (!fs.existsSync(weddingOriginalDir)) return;

  ensureDir(weddingWebDir);
  ensureDir(weddingThumbDir);

  const files = fs
    .readdirSync(weddingOriginalDir)
    .filter((file) => stillImageExtensions.has(path.extname(file).toLowerCase()));

  for (const file of files) {
    const name = path.parse(file).name;
    const input = path.join(weddingOriginalDir, file);

    await writeWebp(input, path.join(weddingWebDir, `${name}.webp`), {
      width: 1400,
      height: 2100,
      quality: 82,
    });

    await writeWebp(input, path.join(weddingThumbDir, `${name}.webp`), {
      width: 320,
      height: 480,
      quality: 75,
    });

    console.log(`${file} -> wedding web + thumbs`);
  }
}

(async () => {
  await optimizeTopLevelImages();
  await optimizeWeddingGallery();
  console.log("Image optimization complete.");
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
