<template>
  <form @submit.prevent>
    <h1>Sign up</h1>
    <div>
      <label for="email">Nickname</label>
      <input type="text" v-model.trim="signUpForm.nickname" id="nickname" />
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
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import SignUpForm from "@/types/signUpForm"
import * as fb from "../firebase"

@Options({})
export default class SignUp extends Vue {
  signUpForm: SignUpForm = {
    nickname: "",
    email: "",
    password_1: "",
    password_2: "",
  }

  onSignUp(): void {
    this.signUp()
  }

  async signUp(): Promise<void> {
    const nickname = this.signUpForm.nickname
    const email = this.signUpForm.email
    const password_1 = this.signUpForm.password_1
    const password_2 = this.signUpForm.password_2

    if (!nickname || !email || !password_1 || !password_2) {
      throw new Error("Error missing fields")
    }

    if (password_1 !== password_2) {
      throw new Error("Passwords must be the same")
    }

    try {
      const { user } = await fb.auth.createUserWithEmailAndPassword(
        email,
        password_1
      )

      if (user) {
        await fb.usersCollection.doc(user.uid).set({
          nickname: nickname,
        })
      }
    } catch (exception) {
      throw new Error(exception)
    }
  }
}
</script>
