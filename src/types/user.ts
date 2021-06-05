import Todo from "./todo"

export default class User {
  id: string
  name: string
  lastName: string
  email: string
  todos: Array<Todo>

  constructor(
    id: string,
    name: string,
    lastName: string,
    email: string,
    todos: Array<Todo>
  ) {
    this.id = id
    this.name = name
    this.lastName = lastName
    this.email = email
    this.todos = todos
  }

  get fullName(): string {
    return `${this.name} ${this.lastName}`
  }
}
