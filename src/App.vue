<template>
  <div id="container" class="vh-100">
    <nav-bar />
    <router-view class="view"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import nav from "./components/navbar.vue"
export default Vue.extend({
  name: "app",
  components: {
    "nav-bar": nav,
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
