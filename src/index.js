// css
import 'normalize.css';

// js
import Vue from 'vue';
import App from './components/App';
import store from './store/';

// eslint-disable-next-line no-new
new Vue({
  el: '#root',
  template: '<App />',
  components: {
    App,
  },
  store,
});

window.getState = () => {
  return store._vm.state;
}
