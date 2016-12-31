<script>
import SettingInput from './SettingInput';

export default {
  name: 'SettingsForm',
  components: {
    SettingInput,
  },
};
</script>

<template>
  <div>
    <h2>Weighting</h2>
    <p>Please enter percentages (total should be 100)</p>
    <setting-input label="MP1 Weight" initial-weight="20" />
    <setting-input label="MP2 Weight" initial-weight="20" />
    <setting-input label="MP3 Weight" initial-weight="20" />
    <setting-input label="MP4 Weight" initial-weight="20" />
    <setting-input label="Midterm Weight" initial-weight="10" />
    <setting-input label="Final Weight" initial-weight="10" />
  </div>
</template>

<style>
</style>
