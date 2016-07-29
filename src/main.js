import Vue from 'vue'
import App from './App.vue'

import { event } from './utils';
import { http } from './services';

new Vue({
  el: '#app',
  render: h => h(App)
})
