<template>
  <Default>
    <form @submit.prevent>
      <h1>Login</h1>
      <div>
        <label for="email1">Email</label>
        <input
          type="text"
          v-model.trim="loginForm.email"
          placeholder="mail@email.com"
          id="email1"
        />
      </div>
      <div>
        <label for="password1">Password</label>
        <input
          type="password"
          v-model.trim="loginForm.password"
          placeholder="******"
          id="password"
        />
      </div>
      <button class="button" @click="onLogin">Log In</button>
    </form>
  </Default>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import Default from "@/layouts/Default.vue"
import LoginForm from "@/types/loginForm"
import * as fb from "../firebase"

@Options({
  components: {
    Default,
  },
})
export default class Login extends Vue {
  loginForm: LoginForm = {
    email: "",
    password: "",
  }

  onLogin(): void {
    this.login()
  }

  async login(): Promise<void> {
    const email = this.loginForm.email
    const password = this.loginForm.password

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
