// @flow
import { app, BrowserWindow, ipcMain } from 'electron';
import ConfigRepository from './repository/ConfigRepository';

let mainWindow;

function saveWindowState() {
  if (mainWindow && !mainWindow.isFullScreen()) {
    const config = ConfigRepository.get();
    ConfigRepository.save(
      Object.assign({}, config, {
        windowState: mainWindow.getBounds()
      })
    );
  }
}

function createWindow() {
  const config = ConfigRepository.get();
  const { width, height, x, y } = config.getWindowState();
  mainWindow = new BrowserWindow({
    width,
    height,
    x,
    y,
    title: 'ghdash'
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.once('close', () => {
    saveWindowState();
  });

  mainWindow.once('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  // if (process.platform !== 'darwin') {
  app.quit();
  // }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('before-quit', () => {
  saveWindowState();
});

ipcMain.on('signIn', event => {
  console.log('signIn');
});

ipcMain.on('signOut', event => {
  console.log('signOut');
});
