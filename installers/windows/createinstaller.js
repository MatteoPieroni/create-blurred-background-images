const createWindowsInstaller = require("electron-winstaller")
  .createWindowsInstaller;
const path = require("path");
const rimraf = require("rimraf");

const rootPath = path.join("./");
const outPath = path.join(rootPath, "release-builds");
const appDirectory = "blurred-background-images-win32-x64/";

getInstallerConfig()
  .then(createWindowsInstaller)
  .then(() =>
    rimraf(path.join(outPath, appDirectory), function() {
      console.log("done");
    })
  )
  .catch(error => {
    console.error(error.message || error);
    process.exit(1);
  });

function getInstallerConfig() {
  console.log("creating windows installer");

  return Promise.resolve({
    appDirectory: path.join(outPath, appDirectory),
    authors: "Matteo Pieroni",
    noMsi: true,
    outputDirectory: path.join(outPath, "windows-installer"),
    exe: "blurred-background-images.exe",
    setupExe: "BlurredBackgroundImages.exe",
    setupIcon: path.join(rootPath, "dist", "assets", "icons", "win", "icon.ico")
  });
}
