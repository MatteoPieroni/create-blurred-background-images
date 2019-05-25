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

module.exports = deleteTemp;
export {};
