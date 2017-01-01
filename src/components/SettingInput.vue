<script>
export default {
  name: 'SettingInput',
  props: ['label', 'initial-weight'],
};
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <input type="text" :placeholder="initialWeight" />
  </div>
</template>

<style>
</style>
