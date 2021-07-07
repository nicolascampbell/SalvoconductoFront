<template>
  <div id="container" class=" vh-100" >
    <navbar id="navbar" />
    <router-view class="view"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import navbar from "./components/navbar.vue"
export default Vue.extend({
  name: "app",
  components: {
    "navbar": navbar,
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
#container {
  font-family: "Courier New", Courier, monospace;
}
#navbar{
  width:150px;
  height: 100px;
  position:fixed;
}

</style>
