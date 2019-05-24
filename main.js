const { app, BrowserWindow } = require("electron");
const deleteTemp = require("./lib/utils");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile("index.html");

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", async () => {
  try {
    await deleteTemp();
  } catch (e) {
    console.log("There has been a problem in deleting the temp file: ", e);
  }

  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
