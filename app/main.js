const fs = require('fs');

const { app, BrowserWindow, dialog } = require('electron');

let mainWindow = null;

app.on('ready', ()=> {
    mainWindow = new BrowserWindow({ show: false });

    mainWindow.loadFile(`${__dirname}/index.html`);

    getFileFromUser();

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });
});

const getFileFromUser = () =>{
    const files = dialog.showOpenDialog({
        properties: ['openFile'],
        filters:[
            { name: 'Markdown Files', extensions: ['md', 'mdown', 'markdown'] },
            { name: 'Text Files', extensions: ['txt', 'text'] }
        ]
    });

    if (!files) return;

    const file = files[0];
    const content = fs.readFileSync(file).toString();

    console.log(content);
};
