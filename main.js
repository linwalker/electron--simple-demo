const electron = require('electron');
const glob = require('glob');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1080,
        minWidth: 680,
        height: 840,
    })

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    loadDemos();
    mainWindow.on('closed', function () {
        mainWindow = null;
    })
}

function loadDemos () {
    var files = glob.sync(path.join(__dirname, 'main-process/**/*.js'));
    files.forEach(function (file) {
        require(file);
    })
}
function initialize () {
    loadDemos();
    app.on('ready', createWindow);
    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })

    app.on('activate', function () {
        if (mainWindow === null) {
            createWindow();
        }
    })
}

initialize();