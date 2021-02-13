<template>
  <v-btn @contextmenu.prevent="removeWaveAt(index)" @click.stop="setCurrentWaveIndex" fab dark>
    <v-icon :color="wave.color"> mdi-sine-wave </v-icon>
  </v-btn>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    index: {},
    wave: {},
  },
  methods : {
    removeWaveAt(index) {
      this.$store.dispatch('removeWaveAt', index)
    },
    changeWave(event) {
      console.log(event)
    },
    setCurrentWaveIndex() {
      this.$store.dispatch('setCurrentWaveIndex', this.index)
    }
  },
  mounted() {
    console.log(this.wave)
  }
});
</script>
