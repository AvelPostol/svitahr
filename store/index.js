//import { createStore } from 'vuex';

export const state = () => ({
  dialogVisible: false,
  Polzsog: false,
  FankPop: false,
});

export const getters = {
  popup: state => {
    return state.dialogVisible;
  },
  PolzsoglPopup: state => {
    return state.Polzsog;
  },
  FankPopPopup: state => {
    return state.FankPop;
  },
};

export const mutations = {
  ToggleDialog(state, payload) {
    state.dialogVisible = payload;
  },
  TogglePolzsogl(state, payload) {
    state.Polzsog = payload;
  },
  ToggleFankPop(state, payload) {
    state.FankPop = payload;
  },
};

export const actions = {
  async TOGGLE_DIALOG({ commit }, payload) {
    commit('ToggleDialog', payload);
  },
  async TOGGLE_POLZSOGL({ commit }, payload) {
    commit('TogglePolzsogl', payload);
  },
  async TOGGLE_FANK({ commit }, payload) {
    commit('ToggleFankPop', payload);
  },
};