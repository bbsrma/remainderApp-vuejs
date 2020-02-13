import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { Datetime } from 'vue-datetime'
import { routes }from './routes'

Vue.use( VueRouter );
Vue.use(Vuex);
Vue.use(Datetime);


const router = new VueRouter({
  mode: 'history',
  routes: routes,
});


Vue.filter('two_digits', function (value) {
  if(value.toString().length <= 1)
  {
      return "0"+value.toString();
  }
  return value.toString();
});


import store from './store/store';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
