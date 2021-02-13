<template>
  <v-app dark>
    <v-main>
      <Canvas/>
      <Menu/>
      <Settings/>
    </v-main>
  </v-app>
</template>

<script>
import Canvas from "./components/Canvas.vue";
import Menu from "./components/Menu.vue";
import Settings from "./components/Settings.vue";

export default {
  name: "App",
  components: {
    Canvas,
    Menu,
    Settings
  },
};
</script>

<style scoped>
  .v-list-group--active > .v-list-group__header .v-list-item__content {
    color: white;
    caret-color: white imp !important;
  }

  body {
    overflow: hidden;
  }
</style>