import Todo from "./todo"

export default class User {
  name: string
  lastName: string
  email: string
  todos: Array<Todo>

  constructor() {
    this.name = ""
    this.lastName = ""
    this.email = ""
    this.todos = []
  }
}
