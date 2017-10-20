const electron = require('electron');
const {app, BrowserWindow} = electron;

app.commandLine.appendSwitch('ignore-certificate-errors', true);

app.on('ready', function(){
  let win = new BrowserWindow({
	  show: false,
	  autoHideMenuBar: true,
	  icon: 'assets/8928277.png',
	  title: '\n',
	  width: 900,
	  height: 600
  });
  
  win.once('ready-to-show', function(){
	  win.show();
  });
  
  win.once('closed', function(){
  });
  
  win.loadURL('http://localhost');
 
});

app.on('window-all-closed', function(){
  app.quit();
});




