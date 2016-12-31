import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

const store = new Store({
  state: {
    sum: 0,
    multiplier: 1,
    grades: [],
    needed: 90,
  },
});

export default store;
