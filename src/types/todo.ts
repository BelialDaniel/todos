export default class Todo {
  title: string
  description?: string
  priority?: number
  created: Date

  constructor() {
    this.title = ""
    this.description = ""
    this.priority = 0
    this.created = new Date()
  }
}
