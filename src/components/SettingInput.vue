<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SettingInput',
  props: ['label', 'placeholder'],
  computed: Object.assign({}, mapGetters([
    'weights',
  ])),
  methods: Object.assign({}, mapActions([
    'changeWeight',
  ]), {
    handleInput(e) {
      this.changeWeight({
        index: this.index,
        weight: e.target.value,
      });
    },
  }),
};
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <input type="text" :placeholder="placeholder" />
  </div>
</template>

<style>
</style>
