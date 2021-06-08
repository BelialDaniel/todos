import { InjectionKey } from "vue"
import { createStore, useStore as baseUseStore, Store } from "vuex"
import User from "@/types/user"
import StoreType from "@/types/storeType"

const key: InjectionKey<Store<StoreType>> = Symbol("todos")
const store = createStore<StoreType>({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload: User) {
      state.user = payload
    },
  },
  getters: {
    user(state: StoreType): User | null {
      return state.user
    },
  },
})

const useStore = (): Store<StoreType> => {
  return baseUseStore(key)
}

export { key, store, useStore }
