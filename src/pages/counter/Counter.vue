<template>
  <div id="app">
    <!-- Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}. -->
    Clicked: {{ count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
  },
  methods: {
    ...mapMutations(['increment','decrement','incrementIfOdd']),
    ...mapActions(['incrementAsync'])
  }
}

</script>
