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
    desiredGrade() {
      return this.$store.state.desiredGrade;
    },
  }),
};
</script>

<template>
  <div :class="$style.InfoBox">
    <table :class="$style.table">
      <thead>
        <tr>
          <th>Current Average</th>
          <th>Needed Average</th>
          <th>Course Remaining</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ currentAverage | prettyGrade }}%</td>
          <td>{{ gradeNeeded | prettyGrade }}%</td>
          <td>{{ remainingCompletion * 100 | prettyGrade }}%</td>
        </tr>
      </tbody>
    </table>
    <p :class="$style.summary">
      To end with <b>{{ desiredGrade | prettyGrade }}%</b>, you need to
      average at least <b>{{ gradeNeeded | prettyGrade }}%</b><br />
      over the remaining <b>{{ remainingCompletion * 100 | prettyGrade }}%</b>
      of the course.
    </p>
  </div>
</template>

<style module>
.InfoBox {
  padding: 20px;
  background: white;
  border: 2px solid black;
}

.table {
  padding: 10px;
  text-align: center;
}

.table > thead > tr > th {
  padding: 10px;
}

.table > tbody > tr > td {
  padding: 10px;
  font-size: 30px;
}

.summary {
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 1.3;
}
</style>
