// Electron entry point: wraps the untouched A Dark Room web build in a desktop window.
const { app, BrowserWindow, Menu, shell } = require("electron");
const path = require("node:path");

// Keep save data and caches inside a stable folder so the game feels like a desktop app.
app.setName("A Dark Room");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 760,
    minWidth: 480,
    minHeight: 560,
    backgroundColor: "#000000",
    autoHideMenuBar: true,
    title: "A Dark Room",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      spellcheck: false,
    },
  });

  win.loadFile(path.join(__dirname, "..", "web", "index.html"));

  // External links (doublespeakgames.com, Steam, etc.) open in the system browser.
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:/i.test(url)) shell.openExternal(url);
    return { action: "deny" };
  });
  win.webContents.on("will-navigate", (event, url) => {
    if (!url.startsWith("file:")) {
      event.preventDefault();
      if (/^https?:/i.test(url)) shell.openExternal(url);
    }
  });
}

Menu.setApplicationMenu(null);

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => app.quit());
