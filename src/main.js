import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
//router
import router from './router/index'

Vue.config.productionTip = false
Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
