<script>
import AppHeader from './components/AppHeader';
import GradesForm from './components/GradesForm';
import SettingsForm from './components/SettingsForm';

export default {
  name: 'App',
  components: {
    AppHeader,
    GradesForm,
    SettingsForm,
  },
}
</script>

<template>
  <div :class="$style.App">
    <app-header />
    <grades-form />
    <settings-form />
  </div>
</template>

<style module>
.App {
  padding: 50px;
}
</style>
