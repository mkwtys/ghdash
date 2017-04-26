// @flow
import { app, BrowserWindow, ipcMain } from 'electron';
import Config from '../Config';

let mainWindow;

function saveWindowState() {
  if (mainWindow && !mainWindow.isFullScreen()) {
    Config.set('windowState', mainWindow.getBounds());
  }
}

function createWindow() {
  const windowState = Config.get('windowState');
  mainWindow = new BrowserWindow({
    x: windowState.x,
    y: windowState.y,
    width: windowState.width,
    height: windowState.height,
    title: 'ghdash'
  });

  mainWindow.loadURL(`file://${__dirname}/../renderer/index.html`);

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
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('before-quit', () => {
  saveWindowState();
});

ipcMain.on('signIn', (event) => {
  console.log('signIn');
});

ipcMain.on('signOut', (event) => {
  console.log('signOut');
});
