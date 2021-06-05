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
import UserManager from "@/managers/userManager"

@Options({
  components: {
    PublicLayout,
  },
})
export default class Login extends Vue {
  logInForm: LogInForm = {
    email: "",
    password: "",
  }

  onLogin(): void {
    this.login()
  }

  login(): void {
    if (!this.logInForm.email || !this.logInForm.password) {
      throw new Error("Error missing Fields")
    }

    try {
      UserManager.getInstance().logIn(this.logInForm)
      this.$router.push("/")
    } catch (exception) {
      throw new Error(exception)
    }
  }
}
</script>
