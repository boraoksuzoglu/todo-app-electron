const fs = require("fs")
const _ = require("lodash")

class Todo {
    constructor(todo) {
        this.storage = new Array()
        this.init()
    }

    all() {

        return this.storage

    }

    create(doc) {

        this.storage.push(doc)
        this.save()

    }

    delete(doc) {

        _.remove(this.storage, doc)
        this.save()

    }

    save() {
        fs.writeFileSync("todos.json", JSON.stringify(this.storage))
        this.init()

    }

    init() {
        if (!fs.existsSync("todos.json")) {
            fs.appendFileSync("todos.json", "[]", (err) => {
                if (err) throw err
            })
        }

        this.storage = JSON.parse(fs.readFileSync("todos.json"))
    }

}

export default Todo
