<template>
  <v-speed-dial :value="true" direction="bottom" top right hover fixed v-if="$store.state.instance !== undefined">
    <template v-slot:activator>
      <v-btn v-model="fab" color="secondary" dark fab>
        <v-icon v-if="fab"> mdi-close </v-icon>
        <v-icon v-else> mdi-waveform </v-icon>
      </v-btn>
    </template>
    <v-btn fab dark @click.stop="addWave">
      <v-icon> mdi-plus </v-icon>
    </v-btn>
    <WaveButton v-for="(item, index) in $store.state.instance.elements" :key="index" :wave="item" :index="index"/>
  </v-speed-dial>
</template>

<script>
import Vue from 'vue'
import WaveButton from './WaveButton.vue'

export default Vue.extend({
  components: {
    WaveButton
  },
  data () {
    return {
      fab: false,
    }
  },
  methods: {
    addWave() {
      this.$store.dispatch('addWave')
    }
  }
})
</script>
