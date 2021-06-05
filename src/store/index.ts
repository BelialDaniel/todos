import { InjectionKey } from "vue"
import { createStore, useStore as baseUseStore, Store } from "vuex"
import User from "@/types/user"

const key: InjectionKey<Store<User>> = Symbol()
const store = createStore<User>({
  state: new User("", "", "", "", []),
})

const useStore = (): Store<User> => {
  return baseUseStore(key)
}

export { key, store, useStore }
