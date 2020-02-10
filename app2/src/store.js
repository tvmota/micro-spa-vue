import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app2: {
      namespaced: true,
      state: {
        storeApp2: 0,
      },
      mutations: {
        SET_STORE_APP (state, payload) {
          state.storeApp2 = payload;
        },
      },
      getters: {
        getStoreApp2: state => state.storeApp2,
      },
      actions: {
        updateStoreApp2({ commit }) {
          commit('SET_STORE_APP', Math.floor(Math.random()*100));
        },
      },
    },
  },
});