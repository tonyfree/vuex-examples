<template>
  <div id="app">
    Clicked: {{ count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    evenOrOdd() {
      return this.count % 2 === 0 ? 'even' : 'odd'
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    incrementIfOdd() {
      // if ((state.count + 1) % 2 === 0) {
      //   this.increment()
      // }
      if (this.evenOrOdd === 'odd') {
        // this.increment()
        this.count++
      }
    },
    incrementAsync() {
      setTimeout(() => {
        // this.increment()
        this.count++
      }, 1000)
    }
  }

}

</script>
