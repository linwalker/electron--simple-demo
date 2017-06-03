const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;
const ipc = electron.ipcMain;
const app = electron.app;

const menu = new Menu();
menu.append(new MenuItem({ label: 'hello'}));
menu.append(new MenuItem({ type: 'separator'}));
menu.append(new MenuItem({ label: 'Electron', type: 'checkbox', checked: true}));

app.on('browser-window-created', function (e, win) {
    win.webContents.on('context-menu', function (e, params) {
        menu.popup(win, params.x, params.y);
    })
})
ipc.on('show-context-menu', function (e) {
    const win = BrowserWindow.fromWebContents(e.sender);
    console.log('menu')
    menu.popup(win);
})