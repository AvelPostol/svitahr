//import { createStore } from 'vuex';

export const state = () => ({
  dialogVisible: false,
  Polzsog: false
});

export const getters = {
  popup: state => {
    return state.dialogVisible;
  },
  PolzsoglPopup: state => {
    return state.Polzsog;
  },
};

export const mutations = {
  ToggleDialog(state, payload) {
    state.dialogVisible = payload;
  },
  TogglePolzsogl(state, payload) {
    state.Polzsog = payload;
  },
};

export const actions = {
  async TOGGLE_DIALOG({ commit }, payload) {
    commit('ToggleDialog', payload);
  },
  async TOGGLE_POLZSOGL({ commit }, payload) {
    commit('TogglePolzsogl', payload);
  },
};