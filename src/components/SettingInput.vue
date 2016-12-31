<script>
export default {
  name: 'SettingInput',
  props: ['label', 'initial-weight'],
};
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <input type="number" :placeholder="initialWeight" />
  </div>
</template>

<style>
</style>
