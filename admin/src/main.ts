import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
import './plugins/element'
import './plugins/avue'
import router from './router'

// // 引入 vue-ele-form
// import EleForm from 'vue-ele-form'
// // 注册 vue-ele-form
// Vue.use(EleForm)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
