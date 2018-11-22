<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ msg }}</h1>

    <button class="start" @click="jumpFlex">开启Flex体验之旅</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome To Flex'
    }
  },
  methods: {
    jumpFlex() {
      this.$router.push({
        name: 'flex'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .start{
    margin-top: 2rem;
  }
</style>
