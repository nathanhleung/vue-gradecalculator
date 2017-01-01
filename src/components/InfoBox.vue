<script>
import { mapGetters } from 'vuex';

export default {
  name: 'InfoBox',
  computed: Object.assign({}, mapGetters([
    'currentAverage',
    'gradeNeeded',
    'courseCompletion',
  ]), {
    remainingCompletion() {
      return 1 - this.courseCompletion;
    },
  }),
};
</script>

<template>
  <div>
    <p>
      You need to average {{ gradeNeeded | prettyGrade }}% over
      the remaining {{ remainingCompletion * 100 | prettyGrade }}% of the course.
    </p>
    <p>
      Current Average: {{ currentAverage | prettyGrade }}
    </p>
  </div>
</template>

<style module>
</style>
