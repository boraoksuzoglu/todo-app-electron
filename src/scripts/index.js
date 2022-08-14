const { ipcRenderer } = require("electron")

import createTodoElement from "../utils/createTodo.js"
import { createTodo, allTodos } from './manageTodos.js'

document.getElementById("create").addEventListener('click', () => {

    ipcRenderer.send('createBtn')

})

ipcRenderer.on("createTodo", (evt, message) => {
    createTodo(message)
    createTodoElement(document.getElementById("todos"), message)
})

for (let i of allTodos()) {
    createTodoElement(document.getElementById("todos"), i.todo)
}

document.onkeydown = (e) => {
    if (e.ctrlKey && e.keyCode == 78) {
        ipcRenderer.send('createBtn')
    }
}