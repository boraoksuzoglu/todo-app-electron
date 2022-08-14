import createElement from "./createElement.js"
import {deleteTodo} from '../scripts/manageTodos.js'

function createTodo(parent, value) {
    var item = createElement("div", parent, {class: "item"})
    var row = createElement("div", item, {class: "row"})

    var col1 = createElement("div", row, {class: "col-6 align-self-center"})
    var p = createElement("p", col1, {class: "m-0"}, value)

    var col2 = createElement("div", row, {class: "col-6 text-end"})
    var remove = createElement("button", col2, {class: "btn btn-danger", style: 'margin-left: 0.2rem;', id: 'remove'}, "Remove")

    remove.addEventListener('click', () => {
        parent.removeChild(item)
        deleteTodo(value)
    })

}

export default createTodo