// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/store'
import VueResource from 'vue-resource'
import './assets/bootstrap.min.css' 

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.http.headers.common['Access-Control-Allow-Headers'] = "Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin"
Vue.http.headers.common['Content-Type'] = 'application/json'
Vue.http.headers.common['Access-Control-Allow-Origin'] = "*"
Vue.http.headers.common['Accept'] = 'application/json'
Vue.http.headers.common["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBjZDA5ZWU0OTYwMDAwNjBkMDBhYjciLCJpYXQiOjE1MTA3ODkyNzh9.iTYKfMszchkc0-Uw1jbJNgEXrG9l7GX_2dc6ZAEOutE"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App }
})
