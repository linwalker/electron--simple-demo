const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')

const manageWindowBtn = document.getElementById('manage-window')
let win;

manageWindowBtn.addEventListener('click', function (e) {
    const modalPath = path.join('file://', __dirname, '../../sections/windows/manage-modal.html')
    function updateReply () {
        const message = `Size: ${win.getSize()} Position: ${win.getPosition()}`
        const manageWindowReply = document.getElementById('manage-window-reply')
        manageWindowReply.innerText = message;
    }
    win = new BrowserWindow({
        width: 400,
        height: 320
    })
    win.on('resize', updateReply);
    win.on('move', updateReply);
    win.on('close', function () { win = null });
    win.loadURL(modalPath)
    win.show();
})