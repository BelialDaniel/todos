<template>
  <form @submit.prevent>
    <h1>Login</h1>
    <div>
      <label for="email">Email</label>
      <input
        type="text"
        v-model.trim="logInForm.email"
        placeholder="mail@email.com"
        id="email"
      />
    </div>
    <div>
      <label for="password">Password</label>
      <input
        type="password"
        v-model.trim="logInForm.password"
        placeholder="******"
        id="password"
      />
    </div>
    <button class="button" @click="onLogin">Log In</button>
  </form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import LogInForm from "@/types/logInForm"
import * as fb from "../firebase"

@Options({})
export default class Login extends Vue {
  logInForm: LogInForm = {
    email: "",
    password: "",
  }

  onLogin(): void {
    this.login()
  }

  async login(): Promise<void> {
    const email = this.logInForm.email
    const password = this.logInForm.password

    if (!email || !password) {
      throw new Error("Error missing Fields")
    }

    try {
      const { user } = await fb.auth.signInWithEmailAndPassword(email, password)
      console.log(user)
    } catch (exception) {
      throw new Error(exception)
    }

    return
  }
}
</script>
