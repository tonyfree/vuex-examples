const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
  incrementIfOdd: ({commit, state}) => {
    if( (state.count + 1) % 2 == 0) {
      commit('increment')
    }
   },
  incrementAsync({commit}) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}

export default actions