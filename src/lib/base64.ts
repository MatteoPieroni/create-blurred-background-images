const image2base64 = require("image-to-base64");

function imgToBase64(path: string): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      const base64String: string = await image2base64(path);
      resolve(base64String);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = imgToBase64;
export {};