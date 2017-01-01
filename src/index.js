// css
import 'normalize.css';
import './assets/styles.css';

// js
import Vue from 'vue';
import App from './components/App';
import store from './store/';
import { mapFilters, filters } from './filters';

mapFilters(filters);

// eslint-disable-next-line no-new
new Vue({
  el: '#root',
  template: '<App />',
  components: {
    App,
  },
  store,
});
