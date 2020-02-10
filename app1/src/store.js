import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app1: {
      namespaced: true,
      state: {
        storeApp1: 0,
      },
      mutations: {
        SET_STORE_APP (state, payload) {
          state.storeApp1 = payload;
        },
      },
      getters: {
        getStoreApp1: state => state.storeApp1,
      },
      actions: {
        updateStoreApp1({ commit }) {
          commit('SET_STORE_APP', Math.floor(Math.random()*100));
        },
      },
    },
  },
});
