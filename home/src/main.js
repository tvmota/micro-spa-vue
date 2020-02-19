import './set-public-path';
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#home',
    render: (h) => h(App),
  },
});

export const { bootstrap } = vueLifecycles;
export const { mount } = vueLifecycles;
export const { unmount } = vueLifecycles;
