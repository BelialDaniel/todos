<template>
  <PublicLayout>
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
  </PublicLayout>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import LogInForm from "@/types/forms/logInForm"
import PublicLayout from "@/layouts/PublicLayout.vue"
import FirebaseApi from "@/api/firebaseApi"

@Options({
  components: {
    PublicLayout,
  },
})
export default class Login extends Vue {
  api: FirebaseApi = new FirebaseApi()
  logInForm: LogInForm = {
    email: "",
    password: "",
  }

  onLogin(): void {
    this.login()
  }

  login(): void {
    const email: string = this.logInForm.email
    const password: string = this.logInForm.password

    if (!email || !password) {
      throw new Error("Error missing Fields")
    }

    try {
      this.api.getUser(email, password)
      this.$router.push("/")
    } catch (exception) {
      throw new Error(exception)
    }
  }
}
</script>
