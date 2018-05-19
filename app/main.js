const electron = require('electron')
const path = require('path')

const { app, BrowserWindow } = electron

let mainWindow

app.on('ready', _ => {
  mainWindow = new BrowserWindow()
  mainWindow.maximize()

  mainWindow.loadURL(`file://${__dirname}/index.html`)
  
  mainWindow.on('close', _ => {
    mainWindow = null
  })
})
