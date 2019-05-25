import { app, BrowserWindow } from "electron";
declare var __dirname: string;
const deleteTemp = require("../lib/utils");

let mainWindow: Electron.BrowserWindow;

async function onReady(): Promise<void> {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  const fileName: string = `file://${__dirname}/index.html`;
  await mainWindow.loadURL(fileName);
  mainWindow.on("close", (): void => app.quit());
}

app.on("ready", (): Promise<void> => onReady());

app.on(
  "window-all-closed",
  async (): Promise<void> => {
    try {
      await deleteTemp();
    } catch (e) {
      console.log("There has been a problem in deleting the temp file: ", e);
    }

    if (process.platform !== "darwin") {
      app.quit();
    }
  }
);

app.on("activate", async (): Promise<void> => onReady());

console.log(`Electron Version ${app.getVersion()}`);
