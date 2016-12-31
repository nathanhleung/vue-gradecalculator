<script>
export default {
  name: 'SettingInput',
  props: ['label', 'weight']
}
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <input type="number" :placeholder="weight" />
  </div>
</template>

<style>
</style>
