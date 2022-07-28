import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/permission'
import ElementUI from 'element-ui'
import '@/styles/element-variables.scss'

require('@/assets/font/font-awesome-4.7.0/css/font-awesome.css')
require('@/assets/css/theme.css')
Vue.config.productionTip = false
Vue.use(ElementUI)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
