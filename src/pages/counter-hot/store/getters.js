const limit = 3

const getters = {
  recentHistory: state => {
    const end = state.history.length
    const begin = end - limit > 0 ? end - limit : 0
    return state.history.slice(begin, end).toString().replace(/,/g, ', ') 
  },
  count: state => state.count
}

export default getters