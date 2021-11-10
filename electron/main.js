const { app, BrowserWindow } = require('electron')
const controlWIndow = require('./controlWindow.js')

function App(){
  const win = require('./createWindow.js')
  const tray = require("./Tray.js")

  const { toggle } = controlWIndow(win,tray)

  tray.on("click", toggle)
}

app.whenReady().then(App)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})