<template>
  <div class="topnav">
    <router-link to="/signup">Sign Up</router-link>
    <router-link to="/login">Log In</router-link>
  </div>
  <div class="main">
    <slot>main slot</slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"

@Options({})
export default class PublicLayout extends Vue {}
</script>

<style scoped>
.main {
  padding: 0;
  margin: 0;
}
</style>
