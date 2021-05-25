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
  methods: {
    handleDirection(direction:String){
      
    }
  },
})
</script>

<style>
div {
  font-family: "Courier New", Courier, monospace;
}
#navi {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 0px 20px 10px 0px;
  transform: scale(0.7);
}
</style>
