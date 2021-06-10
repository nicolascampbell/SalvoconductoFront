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
/**#footer{
  position: fixed;
  bottom: 0px;
  font-size: 0.8em;
  right:0px;
}*/
</script>

<style>
div {
  font-family: "Courier New", Courier, monospace;
}


</style>
