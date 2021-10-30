const { app, BrowserWindow } = require('electron')

function App(){
  const win = require('./createWindow')
}

app.whenReady().then(App)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})