/* eslint-disable no-param-reassign */
import * as t from '../constants/MutationTypes';

const mutations = {
  [t.CHANGE_GRADE](state, payload) {
    // @todo this is still not working
    const index = payload.index;
    // Make a new array so Vue picks up on changes
    let grades = [
      ...state.grades.slice(0, index),
      payload.grade,
    ];
    // If we did ...state.grades.slice(index + 1) to
    // get the remaining elements, it might not work
    // if index + 1 was past the end of the array.
    // Here, we check if we have all the elements
    if (grades.length !== state.grades.length) {
      grades = [
        ...grades,
        ...state.grades.slice(index + 1),
      ];
    }
    state.grades = grades;
  },
  [t.CHANGE_DESIRED_GRADE](state, payload) {
    state.desiredGrade = payload.grade;
  },
};

export default mutations;
