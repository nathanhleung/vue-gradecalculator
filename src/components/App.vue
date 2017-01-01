<script>
import VueAdsense from 'vue-adsense';
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
    VueAdsense,
  },
};
</script>

<template>
  <div :class="$style.App">
    <app-header />
    <grades-form />
    <!-- Maybe we can have settings later -->
    <!-- <settings-form /> -->
    <div :class="$style.bottomRow">
      <div :class="$style.InfoBoxContainer">
        <info-box />
      </div>
      <div :class="$style.ad">
        <VueAdsense
          ad-style="display: block"
          ad-client="ca-pub-9574386878630311"
          ad-slot="5626448981"
          ad-format="auto"
        />
      </div>
    </div>
    <div class="clearfix"></div>
</template>

<style module>
.App {
  /* Subtract padding */
  min-height: calc(100% - 80px);
  font-family: Open Sans;
  padding: 40px;
  background: linear-gradient(
    to bottom right,
    #fac324,
    #ff1493
  );
}

.bottomRow {
  /* subtract padding */
  width: 100%;
  padding: 10px;
  padding-top: 30px;
}

.InfoBoxContainer {
  display: inline-block;
  float: left;
  width: 50%;
}

.ad {
  display: inline-block;
  float: left;
  width: 50%;
}
</style>
