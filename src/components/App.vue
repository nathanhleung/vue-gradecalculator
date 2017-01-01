<script>
import AppHeader from './AppHeader';
import GradesForm from './GradesForm';
import InfoBox from './InfoBox';
import SettingsForm from './SettingsForm';

export default {
  name: 'App',
  components: {
    AppHeader,
    GradesForm,
    InfoBox,
    SettingsForm,
  },
};
</script>

<template>
  <div :class="$style.App">
    <app-header />
    <grades-form />
    <info-box />
    <settings-form />
  </div>
</template>

<style module>
.App {
  padding: 50px;
}
</style>
