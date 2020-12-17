import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './i18n'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { Notify } from 'mdbvue';

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

require('dotenv').config()

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
