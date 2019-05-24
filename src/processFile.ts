const Resizer = require("./lib/Resizer");
const imgToBase64 = require("./lib/base64");
const getTemplate = require("./lib/createBlur");
import { FileData } from './lib/Resizer';

function processFile(path: string, size: number): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      const resizedFile = new Resizer(path);
      await resizedFile.readImage();

      const { tempPath, dimensions }: FileData = await resizedFile.resizeAndOutput(size);
      const base64: string = await imgToBase64(tempPath);
      const finalCode: string = getTemplate(base64, dimensions);
      
      resolve(finalCode);
    } catch(e) {
      reject(e);
    }
  });
}

module.exports = processFile;
export {};