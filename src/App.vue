<template>
  <div id="container" class="vh-100">
    <nav-bar />
    <router-view class="view"></router-view>
    <navigator id="navi" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import nav from "./components/navbar.vue"
import navigator from "./components/navigator.vue"
export default Vue.extend({
  name: "app",
  components: {
    "nav-bar": nav,
    navigator,
  },
  data() {
    return {}
  },
  methods: {},
})
</script>

<style>
#navi {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 0px 20px 10px 0px;
  transform: scale(0.7);
}
</style>
