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
  file!: Sharp;
  dimensions!: Dimensions;
  resizedFile: any;

  constructor(path: string) {
    this.path = path;
  }

  readImage = async function(this: Resizer): Promise<Sharp> {
    return new Promise(async (resolve, reject) => {
      try {
        this.file = await sharp(this.path);
        return resolve(this.file);
      } catch (err) {
        return reject(err);
      }
    });
  };

  getInfo = async function(this: Resizer): Promise<Metadata> {
    const data: Metadata = await this.file.metadata();
    return data;
  };

  resizeAndOutput = function(
    this: Resizer,
    size: number = 42
  ): Promise<FileData> {
    return new Promise(async (resolve, reject) => {
      try {
        const { width, height } = await this.getInfo();
        if (height === undefined || width === undefined)
          throw new Error("Something went wrong, please try again!");
        this.dimensions = {
          width: size,
          height: Math.floor((size * height) / width)
        };

        this.resizedFile = await this.file.resize(size);
        this.resizedFile.toFile(
          `${uniqueFilename(os.tmpdir(), "img64-temp")}.jpg`,
          err => {
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
