import Vue from 'vue'
import App from './App.vue'
import fastClick from 'fastclick'
import router from './router'
import store from './store'
import 'normalize.css'
import '@/assets/border.css'

Vue.config.productionTip = false

fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
