import User from "@/types/user"
import API from "./api"
import * as fb from "@/firebase"
import Todo from "@/types/todo"

export default class FirebaseApi implements API {
  async getUser(email: string, password: string): Promise<User> | never {
    try {
      const { user } = await fb.auth.signInWithEmailAndPassword(email, password)
      if (!user) {
        throw new Error("User not found")
      }
      const userProfile = await fb.usersCollection.doc(user.uid).get()
      const data: User = userProfile.data() as User

      return {
        ...data,
        id: user.uid,
        email,
      }
    } catch (error) {
      throw new Error("Error retrieving user")
    }
  }

  async createUser(
    name: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<User> {
    try {
      const { user } = await fb.auth.createUserWithEmailAndPassword(
        email,
        password
      )

      if (!user) {
        throw new Error("User could not be created")
      }

      this.setUserData(user.uid, name, lastName, [])
      return { id: user.uid, name, lastName, email, todos: [] }
    } catch (exception) {
      throw new Error("User could not be created")
    }
  }

  /**
   *
   * @param id
   * @param name
   * @param lastName
   * @param todos
   */
  async setUserData(
    id: string,
    name: string,
    lastName: string,
    todos?: Array<Todo>
  ): Promise<void> {
    try {
      await fb.usersCollection.doc(id).set({
        name,
        lastName,
        todos: todos,
      })
    } catch (exception) {
      throw new Error("Could not set data to user")
    }
  }
}
