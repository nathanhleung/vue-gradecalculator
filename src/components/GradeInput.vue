<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'GradeInput',
  props: ['label', 'index'],
  computed: Object.assign({}, mapGetters([
    'grades',
  ])),
  methods: Object.assign({}, mapActions([
    'changeGrade',
  ]), {
    handleInput(e) {
      this.changeGrade({
        index: this.index,
        grade: Number(e.target.value),
      });
    },
  }),
};
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <input
      type="number"
      min="0"
      :placeholder="label"
      :value="grades[index]"
      @input="handleInput"
    />
  </div>
</template>

<style>
</style>
