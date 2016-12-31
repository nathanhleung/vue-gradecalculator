<script>
import { mapGetters } from 'vuex';

export default {
  name: 'GradeNeeded',
  computed: Object.assign({}, mapGetters([
    'gradeNeeded',
  ])),
};
</script>

<template>
  <div>
    <p>
      Grade Needed: {{ gradeNeeded }}
    </p>
  </div>
</template>

<style>
</style>
