/* eslint-disable */
// declare module "*.vue/runtime-core" {
//   import { ComponentCustomProperties } from "vue"
//   import { Store } from "vuex"
//   import User from "./types/user"
//   interface ComponentCustomProperties {
//     $store: Store<User>
//   }
// }
declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}
