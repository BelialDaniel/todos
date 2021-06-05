import api from "@/api/api"
import { useStore } from "@/store"
import User from "@/types/user"
import FirebaseApi from "@/api/firebaseApi"
import LogInForm from "@/types/forms/logInForm"
import SignUpForm from "@/types/forms/signUpForm"
import { Store } from "vuex"

export default class UserManager {
  api: api
  store: Store<User>

  constructor() {
    this.api = new FirebaseApi()
    this.store = useStore()
  }

  static getInstance(): UserManager {
    return new UserManager()
  }

  async logIn(form: LogInForm): Promise<void> {
    const user: User = await this.api.getUser(form.email, form.password)
    console.log(user)
  }

  async createUser(signUpForm: SignUpForm): Promise<void> {
    const user: User = await this.api.createUser(
      signUpForm.name,
      signUpForm.lastName,
      signUpForm.email,
      signUpForm.password_1
    )
    console.log(user)
  }
}
