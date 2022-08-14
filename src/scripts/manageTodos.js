import todoClass from './todo.js'
const todo = new todoClass()

function createTodo(value) {
    todo.create({todo: value})
}

function deleteTodo(value) {
    todo.delete({todo: value})
}

function allTodos() {
    return todo.all()
}

export {createTodo, deleteTodo, allTodos}