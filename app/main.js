const { app, BrowserWindow } = require('electron');

app.on('ready', ()=> {
    const mainWindow = new BrowserWindow();
});

console.log('Starting up...');
