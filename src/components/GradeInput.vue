<script>
export default {
  name: 'GradeInput',
  props: ['label'],
};
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <input type="number" :placeholder="label" min="0" />
  </div>
</template>

<style>
</style>
