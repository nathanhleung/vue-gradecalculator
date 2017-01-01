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
        grade: e.target.value,
      });
    },
  }),
};
</script>

<template>
  <div :class="$style.GradeInputContainer">
    <label>{{ label }}</label>
    <input
      type="text"
      :placeholder="label"
      :value="grades[index]"
      @input="handleInput"
    />
  </div>
</template>

<style module>
.GradeInputContainer {
  display: inline-block;
  padding: 10px;
}
</style>
