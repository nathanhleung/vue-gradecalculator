export function courseCompletion(state) {
  return state.grades.reduce((prev, curr, i) => {
    // prev starts as the initial course completion, 100%
    // As each grade is found to be incomplete, prev is
    // subtracted by the weight each grade has
    if (typeof curr === 'undefined') {
      // Check if it's a midterm or final exam grade
      if (i > 4) {
        return prev - 0.1;
      }
      return prev - 0.2;
    }
    return prev;
  }, 1);
}

export function currentSum(state) {
  return state.grades.reduce((prev, curr) => {
    if (typeof curr === 'undefined') {
      return prev;
    }
    return prev + curr;
  }, 0);
}

export function currentAverage(state, getters) {
  // How much of the course has been completed;
  const completion = getters.courseCompletion;
  const sum = getters.currentSum;
  // e.g. if we've completed 80% of the course, divide the
  // sum by 0.8 to get the average out of 100
  return sum / completion;
}

export function gradeNeeded(state, getters) {
  const sum = getters.currentSum;
  const completion = getters.courseCompletion;
  const needed = state.needed;
  const remainingCompletion = 1 - completion;
  const remainingGrade = needed - sum;
  // If we need a 90% on 10% of the course, our remainingGrade will be 9
  // Hence, we divide by remaining completion to get 9 / 0.1 = 9
  return remainingGrade / remainingCompletion;
}
