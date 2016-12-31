import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Store({
  state: {
    sum: 0,
    multiplier: 1,
    grades: [],
    desiredGrade: 90,
  },
  actions,
  getters,
  mutations,
});

export default store;
