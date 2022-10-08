const { ipcRenderer } = require('electron')

import createTodoElement from '../utils/createTodo.js'
import todo from './todo.js'

document.getElementById('create').addEventListener('click', () => {
	ipcRenderer.send('createBtn')
})

ipcRenderer.on('createTodo', (evt, message) => {
	todo.create({ todo: message })
	createTodoElement(document.getElementById('todos'), message)
})

for (let i of todo.all()) {
	createTodoElement(document.getElementById('todos'), i.todo)
}

document.onkeydown = (e) => {
	if (e.ctrlKey && e.keyCode == 78) {
		ipcRenderer.send('createBtn')
	}
}
