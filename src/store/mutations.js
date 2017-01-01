/* eslint-disable no-param-reassign */
import * as t from '../constants/MutationTypes';

const mutations = {
  [t.CHANGE_GRADE](state, payload) {
    state.grades.splice(payload.index, 1, payload.grade);
  },
  [t.CHANGE_DESIRED_GRADE](state, payload) {
    state.desiredGrade = payload.grade;
  },
  [t.CHANGE_WEIGHT](state, payload) {
    state.weights.splice(payload.index, 1, payload.weight);
  },
};

export default mutations;
