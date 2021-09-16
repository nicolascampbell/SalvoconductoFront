<template>
  <div id="container" class=" vh-100" >
    <navbar id="navbar" />
    <router-view class="view"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import navbar from "./components/nav-menu.vue"
export default Vue.extend({
  name: "app",
  components: {
    "navbar": navbar,
  },
  data() {
    return {}
  },
})
</script>

<style>

@media screen and (min-width: 768px) {
  @import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');
  #container{
    font-family: 'Courier Prime', monospace;
  }
  
  #navbar{
    top:5%;
    width:25em;
    height: 6em;
    position:fixed;
    z-index: 100  ;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    z-index: 1;
  }
}
@media screen and (max-width: 767px) {
  @import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');
  #container{
    font-family: 'Courier Prime', monospace;
  }
  #navbar{
    top:0;
    right:0px;
    width:70%;
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
