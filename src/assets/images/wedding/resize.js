const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFolder = "./original";
const webFolder = "./web";
const thumbFolder = "./thumbs";

if (!fs.existsSync(webFolder)) fs.mkdirSync(webFolder);
if (!fs.existsSync(thumbFolder)) fs.mkdirSync(thumbFolder);

const files = fs.readdirSync(inputFolder);

(async () => {
  for (const file of files) {
    const input = path.join(inputFolder, file);
    const outputName = path.parse(file).name + ".webp";

    console.log("Processing:", file);

    // Ảnh chính
    await sharp(input)
      .resize({
        width: 1400,
        height: 2100,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({
        quality: 82,
      })
      .toFile(path.join(webFolder, outputName));

    // Thumbnail
    await sharp(input)
      .resize({
        width: 320,
        height: 480,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({
        quality: 75,
      })
      .toFile(path.join(thumbFolder, outputName));

    console.log("Done:", file);
  }

  console.log("==================================");
  console.log("All images converted successfully!");
})();