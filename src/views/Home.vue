<template>
  <Default>
    <div>home</div>
  </Default>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import Default from "@/layouts/Default.vue"

@Options({
  components: {
    Default,
  },
})
export default class Home extends Vue {}
</script>
