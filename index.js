const {app, BrowserWindow} = require('electron')

let win

function createWindow (){
    //create the browser window
    win = new BrowserWindow({width: 800, height: 600})

    //load the html file of the app
    win.loadFile('index.html')

    //open the devtools(inspect element)
    //win.webContents.openDevTools()

    win.on('closed', () => {
        //dereference the window object
        win = null
    })
}

app.on('ready', createWindow)

//quit when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null){
        createWindow()
    }
})