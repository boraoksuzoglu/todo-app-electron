const remote = require('@electron/remote')
const { ipcRenderer } = require('electron')
const win = remote.getCurrentWindow()

const add = document.getElementById('add')
const cancel = document.getElementById('cancel')

function createTodo() {
	ipcRenderer.send('createTodo', document.getElementById('input').value)
	win.close()
}

add.addEventListener('click', createTodo)
document.onkeydown = (e) => {
	if (e.keyCode == 13) createTodo()
}

cancel.addEventListener('click', () => {
	win.close()
})
