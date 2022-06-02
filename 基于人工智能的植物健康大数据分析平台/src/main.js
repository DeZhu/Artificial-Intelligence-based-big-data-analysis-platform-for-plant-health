import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/iview.js'
import './assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css'
import element from './plugins/index'

Vue.use(element)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
