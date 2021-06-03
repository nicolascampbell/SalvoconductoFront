<template>
  <div id="container" class="vh-100">
    <menu-icon/>
    <router-view class="view"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import menuIcon from "./components/menuDropdown.vue"
export default Vue.extend({
  name: "app",
  components: {
    "menu-icon": menuIcon,
  },
  data() {
    return {}
  },
})
</script>

<style>
div {
  font-family: "Courier New", Courier, monospace;
}


</style>
