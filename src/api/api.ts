import User from "@/types/user"

export default abstract class API {
  /**
   *
   *
   * @param email
   * @param password
   */
  getUser(email: string, password: string): Promise<User> | never {
    throw new Error("Must implement this function")
  }

  /**
   *
   * @param user
   * @param password
   */
  createUser(
    name: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<User> | never {
    throw new Error("Must implement this function")
  }
}
