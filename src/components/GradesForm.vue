<script>
import GradeInput from './GradeInput';

export default {
  name: 'GradesForm',
  components: {
    GradeInput,
  }
}
</script>

<template>
  <div>
    <grade-input label="First Marking Period" />
    <grade-input label="Second Marking Period" />
    <grade-input label="Third Marking Period" />
    <grade-input label="Fourth Marking Period" />
    <grade-input label="Midterm Exam" />
    <grade-input label="Final Exam" />
    <grade-input label="Desired Final Grade" />
  </div>
</template>
