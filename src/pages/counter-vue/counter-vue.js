import 'babel-polyfill'
import Vue from 'vue'
import Counter from './Counter.vue'

new Vue({
  el: '#app',
  render: h => h(Counter)
})
