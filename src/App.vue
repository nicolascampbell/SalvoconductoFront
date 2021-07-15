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
@media screen and (min-width: 768px) {
  #navbar{
    top:5%;
    width:25em;
    height: 6em;
    position:fixed;
    z-index: 100  ;
  }
}
@media screen and (max-width: 768px) {
  #navbar{
    top:50%;
    right:0px;
     width:25em;
    height: 10em;
    position:fixed;
    z-index: 100  ;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    z-index: 1;
  }
}




</style>
