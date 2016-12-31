// css
import 'normalize.css';

// js
import Vue from 'vue';
import App from './App.vue';
import store from './store/';

// eslint-disable-next-line no-new
new Vue({
  el: '#root',
  template: '<App />',
  components: {
    App,
  },
  store,
});
