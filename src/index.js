import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import App from './App.vue';

Vue.use(Vuex);

const store = new Store({
  state: {
    sum: 0,
    multiplier: 1,
    grades: [],
  },
});

const vm = new Vue({
  el: '#root',
  template: '<App />',
  components: {
    App,
  },
});
