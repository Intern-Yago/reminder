const { app, BrowserWindow } = require('electron')

function App(){
  const win = require('./createWindow.js')
  const tray = require("./Tray.js")
}

app.whenReady().then(App)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})