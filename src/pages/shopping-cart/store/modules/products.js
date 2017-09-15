import shop from '../../api/shop'
import types from '../mutation-types'

const state = {
  all: []
}

const getters = {
  allProducts: state => state.all
}

const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  },

  [types.ADD_TO_CART] (state, { product }) {
    state.all.find(p => p.id === product.id).inventory--
  }
}

const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts().then(res => {
      commit(types.RECEIVE_PRODUCTS, { products: res.data.lists })
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
