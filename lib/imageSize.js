const sharp = require("sharp");

class Resizer {
  constructor(path) {
    this.path = path;
  }

  readImage = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        this.file = await sharp(this.path);
        return resolve(this.file);
      } catch (err) {
        return reject(err);
      }
    });
  };

  getInfo = async () => {
    const data = await this.file.metadata();
    return data;
  };

  resizeAndOutput = (size = 42) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { width, height } = await this.getInfo();
        this.dimensions = {
          width: size,
          height: Math.floor((size * height) / width)
        };

        this.resizedFile = await this.file.resize({ width: size });
        this.resizedFile.toFile(`_temp/temp_file.jpg`, (err, data) => {
          if (err) return reject(err);

          return resolve({
            tempPath: this.resizedFile.options.fileOut,
            dimensions: this.dimensions
          });
        });
      } catch (err) {
        return reject(err);
      }
    });
  };
}

module.exports = Resizer;
