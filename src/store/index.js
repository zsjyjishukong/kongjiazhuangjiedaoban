import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
function storeLocalStore (state) {
  window.localStorage.setItem('username', JSON.stringify(state))
}

export default new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    changeUserName (state, username) {
      state.username = username
      storeLocalStore(state)
    }
  }
})
