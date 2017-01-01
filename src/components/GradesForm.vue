<script>
import { mapActions } from 'vuex';
import GradeInput from './GradeInput';

export default {
  name: 'GradesForm',
  components: {
    GradeInput,
  },
  computed: {
    desiredGrade() {
      return this.$store.state.desiredGrade;
    },
  },
  methods: Object.assign({}, mapActions([
    'changeDesiredGrade',
  ]), {
    handleDesiredInput(e) {
      this.changeDesiredGrade({
        grade: e.target.value,
      });
    },
  }),
};
</script>

<template>
  <div>
    <grade-input
      label="First Marking Period"
      index="0"
    />
    <grade-input
      label="Second Marking Period"
      index="1"
    />
    <grade-input
      label="Third Marking Period"
      index="2"
    />
    <grade-input
      label="Fourth Marking Period"
      index="3"
    />
    <br />
    <grade-input
      label="Midterm Exam"
      index="4"
    />
    <grade-input
      label="Final Exam"
      index="5"
    />
    <div :class="$style.DesiredInputContainer">
      <label>Desired Final Grade</label>
      <input
        type="text"
        min="0"
        placeholder="Desired Final Grade"
        :value="desiredGrade"
        @input="handleDesiredInput"
      />
    </div>
  </div>
</template>

<style module>
.DesiredInputContainer {
  display: inline-block;
  padding: 10px;
}
</style>
