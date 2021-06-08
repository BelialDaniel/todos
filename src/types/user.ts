import Todo from "./todo"

export default interface User {
  id?: string
  name: string
  lastName: string
  email: string
  todos: Array<Todo>
}
