const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const remoteMain = require('@electron/remote/main')
remoteMain.initialize()

app.whenReady().then(() => {
	const mainWindow = new BrowserWindow({
		minWidth: 800,
		minHeight: 600,
		autoHideMenuBar: true,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			enableRemoteModule: true,
		},
	})
	remoteMain.enable(mainWindow.webContents)

	mainWindow.loadFile(path.join(__dirname, 'index.html'))

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
		}
	})

	app.on('window-all-closed', () => {
		if (process.platform !== 'darwin') {
			app.quit()
		}
	})

	mainWindow.on('close', () => {
		app.quit()
	})

	ipcMain.on('createTodo', (evt, message) => {
		mainWindow.webContents.send('createTodo', message)
	})

	ipcMain.on('createBtn', () => {
		const win = new BrowserWindow({
			width: 500,
			height: 150,
			autoHideMenuBar: true,
			webPreferences: {
				nodeIntegration: true,
				contextIsolation: false,
				enableRemoteModule: true,
			},
		})

		remoteMain.enable(win.webContents)
		win.loadFile(path.join(__dirname, 'newTodo.html'))
	})
})
