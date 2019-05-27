//handle setup events as quickly as possible
const setupEvents = require("./installers/setupEvents");
if (setupEvents.handleSquirrelEvent()) {
  // squirrel event handled and app will exit in 1000ms, so don't do anything else
  return;
}

const { app, BrowserWindow } = require("electron");
var path = require("path");

const deleteTemp = require("./dist/lib/utils");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    backgroundColor: "#4056a1",
    icon: path.join(__dirname, "dist/assets/icons/png/64x64.png")
  });

  win.loadFile("dist/index.html");

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", async () => {
  /*try {
    await deleteTemp();
  } catch (e) {
    console.log("There has been a problem in deleting the temp file: ", e);
  }*/

  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
