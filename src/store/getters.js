function isEmpty(value) {
  return (value === '') || (typeof value === 'undefined');
}

function isMarkingPeriod(index) {
  // Marking periods are indexes 0, 1, 2 and 3
  return index < 4;
}

export function grades(state) {
  return state.grades;
}

export function courseCompletion(state) {
  const percentCompleted = state.grades.reduce((prev, curr, i) => {
    // prev starts as the initial course completion, 100%
    // As each grade is found to be incomplete, prev is
    // subtracted by the weight each grade has
    // We're using 100, 10, and 20 instead of
    // 1, 0.1 and 0.2 to mitigate float imprecision
    if (isEmpty(curr)) {
      if (isMarkingPeriod(i)) {
        return prev - 20;
      }
      return prev - 10;
    }
    return prev;
  }, 100);
  return percentCompleted / 100;
}

export function currentAverage(state, getters) {
  // How much of the course has been completed;
  const completion = getters.courseCompletion;
  // If completion is 0, there are no numbers to add
  if (completion === 0) {
    return 0;
  }
  const weightedSum = state.grades.reduce((prev, curr, i) => {
    if (!isEmpty(curr)) {
      // If it's a midterm or final
      if (isMarkingPeriod(i)) {
        return prev + (curr * 0.2);
      }
      return prev + (curr * 0.1);
    }
    return prev;
  }, 0);
  // e.g. if we've completed 80% of the course, divide the
  // sum by 0.8 to get the average out of 100
  return weightedSum / completion;
}

export function gradeNeeded(state, getters) {
  const average = getters.currentAverage;
  const completion = getters.courseCompletion;
  const desiredGrade = state.desiredGrade;
  if (!isEmpty(desiredGrade)) {
    const remainingCompletion = 1 - completion;
    const remainingGrade = desiredGrade - (average * completion);
    return remainingGrade / remainingCompletion;
  }
  return 0;
}

export function weights(state) {
  return state.weights;
}
