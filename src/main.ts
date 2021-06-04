import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { auth } from "./firebase"
import MainLayout from "@/layouts/MainLayout.vue"

let app: any
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(store)
      .use(router)
      .component("MainLayout", MainLayout)
      .mount("#app")
  }
})
