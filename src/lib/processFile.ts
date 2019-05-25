const Resizer = require("./Resizer");
const imgToBase64 = require("./base64");
const getTemplate = require("./createBlur");
import { FileData } from "./Resizer";

function processFile(path: string, size: number): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      const resizedFile = new Resizer(path);
      await resizedFile.readImage();

      const {
        tempPath,
        dimensions
      }: FileData = await resizedFile.resizeAndOutput(size);
      const base64: string = await imgToBase64(tempPath);
      const finalCode: string = getTemplate(base64, dimensions);

      resolve(finalCode);
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = processFile;
export {};
