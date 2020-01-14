import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import GlobalComponents from './globalComponents/index'

Vue.component('GlobalComponents', GlobalComponents)

new Vue({
  render: h => h(App)
}).$mount('#app')
