const {BrowserWindow} = require('electron')

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      frame: false,
      fullscreen: false,
      show: false,
    })
  
    win.loadFile('index.html')
    return win
}

module.exports = createWindow()