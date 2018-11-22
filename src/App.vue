<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <start msg="Welcome to Flex Learn"/>
  </div>
</template>

<script>
import start from './components/start.vue'

export default {
  name: 'app',
  components: {
    start
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  padding: 0.5rem 1.5rem;
  font-size: 1.3rem;
}
</style>
