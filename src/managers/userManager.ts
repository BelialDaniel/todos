import api from "@/api/api"
import User from "@/types/user"
import FirebaseApi from "@/api/firebaseApi"
import LogInForm from "@/types/forms/logInForm"
import SignUpForm from "@/types/forms/signUpForm"
import { store } from "@/store"
import router from "@/router"

export default class UserManager {
  api: api
  constructor() {
    this.api = new FirebaseApi()
  }

  async logIn(form: LogInForm): Promise<void> {
    const user: User = await this.api.getUser(form.email, form.password)
    store.commit("setUser", user)
    router.push("/")
  }

  async createUser(signUpForm: SignUpForm): Promise<void> {
    const user: User = await this.api.createUser(
      signUpForm.name,
      signUpForm.lastName,
      signUpForm.email,
      signUpForm.password_1
    )
  }
}
