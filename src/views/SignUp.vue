<template>
  <PublicLayout>
    <form @submit.prevent>
      <h1>Sign up</h1>
      <div>
        <label for="email">Name</label>
        <input type="text" v-model.trim="signUpForm.name" id="nickname" />
      </div>
      <div>
        <label for="email">Last name</label>
        <input type="text" v-model.trim="signUpForm.lastName" id="nickname" />
      </div>
      <div>
        <label for="email">Email</label>
        <input
          type="text"
          v-model.trim="signUpForm.email"
          placeholder="mail@email.com"
          id="email"
        />
      </div>
      <div>
        <label for="password1">Password</label>
        <input
          type="password"
          v-model.trim="signUpForm.password_1"
          placeholder="******"
          id="password1"
        />
      </div>
      <div>
        <label for="password2">Repeat password</label>
        <input
          type="password"
          v-model.trim="signUpForm.password_2"
          placeholder="******"
          id="password2"
        />
      </div>
      <button class="button" @click="onSignUp">Sign Up</button>
    </form>
  </PublicLayout>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import SignUpForm from "@/types/forms/signUpForm"
import PublicLayout from "@/layouts/PublicLayout.vue"
// import UserManager from "@/managers/userManager"

@Options({
  components: {
    PublicLayout,
  },
})
export default class SignUp extends Vue {
  signUpForm: SignUpForm = {
    name: "",
    lastName: "",
    email: "",
    password_1: "",
    password_2: "",
  }

  onSignUp(): void {
    this.signUp()
  }

  async signUp(): Promise<void> {
    const { name, lastName, email, password_1, password_2 }: SignUpForm =
      this.signUpForm

    if (!name || !lastName || !email || !password_1 || !password_2) {
      throw new Error("Error missing fields")
    }

    if (password_1 !== password_2) {
      throw new Error("Passwords must be the same")
    }

    try {
      // UserManager.getInstance().createUser(this.signUpForm)
      this.$router.push("/")
    } catch (exception) {
      throw new Error(exception)
    }
  }
}
</script>
