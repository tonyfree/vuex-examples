import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

const state = {
  count: 0,
  history: []
}


const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

if(module.hot) {
  module.hot.accept(['./getters.js', './mutations.js', './actions.js'], () => {
    store.hotUpdate({
      getters: require('./getters.js').default,
      mutations: require('./mutations.js').default,
      actions: require('./actions.js').default
    })
  })
}

export default store