const fs = require("fs");
const TEMP_FILE_PATH: string = "_temp/temp_file.jpg";

function deleteTemp(): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      fs.exists(TEMP_FILE_PATH, () => fs.unlinkSync(TEMP_FILE_PATH));
    } catch (e) {
      reject(e);
    }

    resolve();
  });
}

function isRightImageType(fileType: string): boolean {
  switch (fileType) {
    case "image/gif":
    case "image/jpeg":
    case "image/png":
      return true;
    default:
      return false;
  }
}

module.exports = {
  deleteTemp,
  isRightImageType
};
export {};
