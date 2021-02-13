<template>
  <v-row class="settings-card px-10 py-4" justify="center" align="center">
    <v-col>
      <v-color-picker @input="setWaveColor($event)" canvas-height="100" hide-inputs/>
    </v-col>
    <v-col>
      <v-subheader>Iterations</v-subheader>
      <v-slider
        class="wave-slider"
        :value="this.$store.state.instance.elements[this.$store.state.currentWaveIndex]['n']" 
        @input="setWaveProp('n', $event)" 
        min="3" 
        max="120"
        color="secondary"
        track-color="white"
        width="200"
        dense
      />
    </v-col>
    <v-col>
      <v-subheader>Radius</v-subheader>
      <v-slider
        class="wave-slider"
        :value="this.$store.state.instance.elements[this.$store.state.currentWaveIndex]['baseRadius']" 
        @input="setWaveProp('baseRadius', $event)" 
        hint="Radius" min="30" 
        max="150"
        color="secondary"
        track-color="white"
        dense
      />
    </v-col>
    <v-col>
      <v-subheader>Increment</v-subheader>
      <v-slider
        class="wave-slider" 
        :value="this.$store.state.instance.elements[this.$store.state.currentWaveIndex]['increment']" 
        @input="setWaveProp('increment', $event)" 
        hint="Radius" min="30" 
        max="150"
        color="secondary"
        track-color="white"
        dense
      />
    </v-col>
    <v-col>
      <v-subheader>Speed</v-subheader>
      <v-slider
        class="wave-slider" 
        :value="this.$store.state.instance.elements[this.$store.state.currentWaveIndex]['increment']" 
        @input="setWaveProp('increment', $event)" 
        hint="Radius" min="30" 
        max="150"
        color="secondary"
        track-color="white"
        dense
      />
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  methods: {
    setWaveProp(prop, value) {
      const index = this.$store.state.currentWaveIndex
      this.$store.state.instance.elements[index][prop] = value
    },
    setWaveColor(value) {
      const index = this.$store.state.currentWaveIndex
      this.$store.state.instance.elements[index]['color'] = value.hex
    }
  }
})
</script>

<style lang="scss">
  .settings-card {
    position: absolute !important;
    bottom: 16px;
    width: 100%;
  }

  .v-color-picker__controls {
    background-color: #15202B;
  }
</style>