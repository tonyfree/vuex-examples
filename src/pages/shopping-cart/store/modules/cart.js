import shop from '../../api/shop'
import types from '../mutation-types'

const state = {
  lists: [],
  checkoutStatus: null
}

const getters = {
  lists: state => state.lists,
  checkoutStatus: state => state.checkoutStatus
}

const mutations = {
  [types.RECEIVE_CARTLIST] (state, { lists }) {
    state.lists = lists
  },

  [types.ADD_TO_CART] (state, { product }) {
    const record = state.lists.find(p => p.id === product.id)
    if (!record) {
      state.lists.push({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },

  [types.CHECKOUT] (state, {status}) {
    if(status) {
      state.lists = []
    }
    state.checkoutStatus = status ? 'successful' : 'failed'
  }
}

const actions = {
  getCartLists ({ commit }) {
    shop.getCartList().then(res => {
      commit(types.RECEIVE_CARTLIST, { lists: res.data.lists })
    })
  },

  checkout ({ commit, state }, products) {
    shop.buyProducts(products).then(res => {
      commit(types.CHECKOUT, {
        status: res.data.status
      })
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
