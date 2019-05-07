import Vue from 'vue'
import Element from 'element-ui'
import App from './App.vue' 
import store from './store'
import router from './router'
import './registerServiceWorker'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.config.productionTip = false

new Vue({ 
  store,
  router,
  render: h => h(App)
}).$mount('#app')
