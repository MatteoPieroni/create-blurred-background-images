const image2base64 = require("image-to-base64");

function imgToBase64(path) {
  return new Promise(async (resolve, reject) => {
    try {
      const base64String = await image2base64(path);
      resolve(base64String);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = imgToBase64;
