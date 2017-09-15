import axios from 'axios'

let host = 'http://rapapi.org/mockjsdata/26063'

// 正常开发还是应该封装fetch、service
// url也应该遍历加host前缀
let url = {
  products: host + '/products',
  add: host + '/add',
  cartList: host + '/cartList',
  buy: host + '/buy'
}

export default {
  getProducts () {
    return axios.post(url.products)
  },

  addToCart (id) {
    return axios.post(url.add, id)
  },

  getCartList () {
    return axios.post(url.cartList)
  },

  buyProducts (products) {
    return axios.post(url.buy, products)
  }
}
