import { Sharp, Metadata } from "sharp";
const sharp = require("sharp");
const os = require("os");
const uniqueFilename = require("unique-filename");

export interface FileData {
  tempPath: string;
  dimensions: Dimensions;
}

export interface Dimensions {
  width: number;
  height: number;
}

class Resizer {
  path: string;
  file: Sharp;
  dimensions: Dimensions;
  resizedFile: any;

  constructor(path: string) {
    this.path = path;
  }

  readImage = async (): Promise<Sharp> => {
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
    const data: Metadata = await this.file.metadata();
    return data;
  };

  resizeAndOutput = (size: number = 42): Promise<FileData> => {
    return new Promise(async (resolve, reject) => {
      try {
        const { width, height } = await this.getInfo();
        this.dimensions = {
          width,
          height
        };

        this.resizedFile = await this.file.resize(size);
        this.resizedFile.toFile(
          `${uniqueFilename(os.tmpdir(), "img64-temp")}.jpg`,
          (err, data) => {
            if (err) return reject(err);

            return resolve({
              tempPath: this.resizedFile.options.fileOut,
              dimensions: this.dimensions
            });
          }
        );
      } catch (err) {
        return reject(err);
      }
    });
  };
}

module.exports = Resizer;
export {};
