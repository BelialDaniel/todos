import User from "@/types/user"
import API from "./api"
import * as fb from "@/firebase"

export default class FirebaseApi implements API {
  async getUser(email: string, password: string): Promise<User> | never {
    try {
      const { user } = await fb.auth.signInWithEmailAndPassword(email, password)
      if (!user) {
        throw new Error("User not found")
      }
      const userData = await fb.usersCollection.doc(user.uid).get()
      console.log(userData.data())
      return new User()
    } catch (error) {
      throw new Error("Error retrieving user")
    }
  }

  async createUser(
    name: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<void> {
    const { user } = await fb.auth.createUserWithEmailAndPassword(
      email,
      password
    )

    if (user) {
      await fb.usersCollection.doc(user.uid).set({
        name,
        lastName,
        todos: [],
      })
    }
  }
}
