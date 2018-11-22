import Vue from 'vue'
import Router from './router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: Router,
  render: h => h(App),
})
