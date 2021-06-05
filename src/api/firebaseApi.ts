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

      const userModel: User = await this.getUserFromCollection(user.uid, email)
      return userModel
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
      return new User(user.uid, name, lastName, email, [])
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

  /**
   *
   * @param Id
   * @returns
   */
  async getUserFromCollection(id: string, email: string): Promise<User> {
    try {
      const userProfile = await fb.usersCollection.doc(id).get()
      const data: User = userProfile.data() as User
      return new User(id, data.name, data.lastName, email, data.todos)
    } catch (error) {
      throw new Error("Could not retrieve user from collection")
    }
  }
}
