<template>
  <div class="topnav">
    <router-link to="/">Home</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/about">About</router-link>
    <button @click="onLogOut">log out</button>
  </div>
  <div class="main">
    <slot>main slot</slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import * as fb from "../firebase"

@Options({})
export default class MainLayout extends Vue {
  onLogOut() {
    this.logout()
  }

  async logout() {
    try {
      await fb.auth.signOut()
    } catch (exception) {
      throw new Error(exception)
    } finally {
      this.$router.push("/login")
    }
  }
}
</script>

<style scoped>
.main {
  padding: 0;
  margin: 0;
}
</style>
