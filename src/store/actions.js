import * as t from '../constants/ActionTypes';

export function changeGrade({ commit }, { index, grade }) {
  commit(t.CHANGE_GRADE, {
    index,
    grade,
  });
}
