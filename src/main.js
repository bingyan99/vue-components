import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

window.addEventListener('resize', function () {
  const width = document.documentElement.clientWidth
  document.documentElement.style.fontSize = width < 640 ? width / 7.5 + 'px' : '85.4px'
  window.fontSize = width < 640 ? width / 7.5 : 85.4
})

document.addEventListener('DOMContentLoaded', function () {
  const width = document.documentElement.clientWidth
  document.documentElement.style.fontSize = width < 640 ? width / 7.5 + 'px' : '85.4px'
  document.documentElement.setAttribute('data-dpr', window.devicePixelRatio)
  window.fontSize = width < 640 ? width / 7.5 : 85.4
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
