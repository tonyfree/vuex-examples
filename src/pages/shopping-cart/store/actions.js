import types from './mutation-types'
import shop from '../api/shop'

export const addToCart = ({ commit }, product) => {
  if (product.inventory > 0) {
    shop.addToCart(product.id).then(res => {
      commit(types.ADD_TO_CART, { product })
    })
  }
}
