<script>
import AppHeader from './AppHeader';
import GradesForm from './GradesForm';
import GradeNeeded from './GradeNeeded';
import SettingsForm from './SettingsForm';

export default {
  name: 'App',
  components: {
    AppHeader,
    GradesForm,
    GradeNeeded,
    SettingsForm,
  },
};
</script>

<template>
  <div :class="$style.App">
    <app-header />
    <grades-form />
    <grade-needed />
    <settings-form />
  </div>
</template>

<style module>
.App {
  padding: 50px;
}
</style>
