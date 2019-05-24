const Resizer = require("./lib/Resizer");
const imgToBase64 = require("./lib/base64");
const getTemplate = require("./lib/createBlur");
import { FileData } from './lib/Resizer';

async function processFile(path: string, size: number): Promise<void> {
  const resizedFile = new Resizer(path);
  await resizedFile.readImage();

  const { tempPath, dimensions }: FileData = await resizedFile.resizeAndOutput(size);
  const base64: string = await imgToBase64(tempPath);
  const finalCode: string = getTemplate(base64, dimensions);
  console.log(finalCode);
}

module.exports = processFile;
export {};