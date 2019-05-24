const Resizer = require("./lib/imageSize");
const imgToBase64 = require("./lib/base64");
const getTemplate = require("./lib/createBlur");

async function processFile(path, size) {
  const resizedFile = new Resizer(path);
  await resizedFile.readImage();

  const { tempPath, dimensions } = await resizedFile.resizeAndOutput(size);
  const base64 = await imgToBase64(tempPath);
  const finalCode = getTemplate(base64, dimensions);
  console.log(finalCode);
}

module.exports = processFile;
