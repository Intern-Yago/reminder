const {Tray} = require('electron')
const { resolve } = require('path')

const iconPath = resolve(__dirname, "../","assets", "sino.png")

function createTray(){
    const tray = new Tray(iconPath)  //https://www.flaticon.com/br/autores/uniconlabs

    tray.setToolTip("Reminder")

    return tray
}

module.exports = createTray()