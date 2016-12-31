import * as t from '../constants/MutationTypes';

export function changeGrade({ commit }, { index, grade }) {
  commit(t.CHANGE_GRADE, {
    index,
    grade,
  });
}

export function changeDesiredGrade({ commit }, { grade }) {
  commit(t.CHANGE_DESIRED_GRADE, {
    grade,
  });
}

export function changeWeight({ commit }, { index, weight }) {
  commit(t.CHANGE_WEIGHT, {
    index,
    weight,
  });
}
