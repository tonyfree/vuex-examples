import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: 0
}

const getters = {
  evenOrOdd: state => state.count % 2 == 0 ? 'even' : 'odd'
}

const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  },
  incrementIfOdd(state) {
   if( (state.count + 1) % 2 == 0) {
    state.count++
   }
  }
}

const actions = {
  incrementAsync({commit, state}) {
    setTimeout(() => {
      // 严格模式下会报错
      // state.count++
      commit('increment')
    }, 1000)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
})

export default store