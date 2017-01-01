<script>

export default {
  name: 'AppHeader',
};
</script>

<template>
  <div>
    <h1 :class="$style.AppHeader">Final Grade Calculator</h1>
  </div>
</template>

<style module>
.AppHeader {
  display: inline-block;
  font-weight: 400;
  padding: 10px;
}
</style>
