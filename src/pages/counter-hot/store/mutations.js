const mutations = {
  increment(state) {
    state.count++
    state.history.push('increment')
  },
  decrement(state) {
    state.count--
    state.history.push('decrement')
  }
}

export default mutations