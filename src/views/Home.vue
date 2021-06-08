<template>
  <MainLayout>
    <div>Hi {{ user.name }} {{ user.lastName }}</div>
  </MainLayout>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import { mapGetters } from "vuex"
import { useStore } from "@/store"
import User from "@/types/user"

@Options({
  computed: {
    ...mapGetters(["user"]),
  },
})
export default class Home extends Vue {
  user: User

  created(): void {
    const store = useStore()
  }
}
</script>
