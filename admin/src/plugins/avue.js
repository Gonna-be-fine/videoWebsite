// import Vue from 'vue'
// // import axios from 'axios'
// import Avue from '@smallwei/avue';
// import '@smallwei/avue/lib/index.css';
// // const http = axios.create({
// //   baseURL: 'http://localhost:3000'
// // })
// Vue.use(Avue);

import Vue from 'vue';
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import axios from 'axios';

Vue.use(Avue,{axios});

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})
window.axios = http

Vue.prototype.$http = http

Vue.prototype.$axios = http