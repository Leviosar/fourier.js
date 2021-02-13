import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    instance: undefined,
    currentWaveIndex: 0
  },
  getters: {
    instance: (state) => {
      return state.message
    }
  },
  mutations: {
    SET_INSTANCE: (state, instance) => {
      state.instance = instance
    },
    ADD_WAVE: (state) => {
      state.instance.addWave()
    },
    REMOVE_WAVE_AT: (state, index) => {
      state.instance.elements.splice(index, 1)
    },
    SET_WAVE_INDEX: (state, index) => {
      state.currentWaveIndex = index
    }
  },
  actions: {
    setInstance(context, instance) {
      context.commit('SET_INSTANCE', instance)
    },
    addWave(context, wave) {
      context.commit('ADD_WAVE', wave)
    },
    removeWaveAt(context, index) {
      context.commit('REMOVE_WAVE_AT', index)
    },
    setCurrentWaveIndex(context, index) {
      context.commit('SET_WAVE_INDEX', index)
    }
  },
})
