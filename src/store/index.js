import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const initialState = {
  state: {
    sum: 0,
    multiplier: 1,
    grades: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    desiredGrade: 90,
  },
  actions,
  getters,
  mutations,
};

const store = new Store(initialState);

export default store;
