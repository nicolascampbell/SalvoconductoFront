<template>
  <div id="film_card">
    <b-img-lazy v-bind="mainProps" :src="getImg(pic)"></b-img-lazy>    
  </div>
</template>
    
<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "photo-card",
  data(){
    return{
      mainProps: {
          center: true,
          fluidGrow: true,
          blank: true,
          blankColor: '#bbb',
          width: 600,
          height: 400,
        }
    }
  },
  props: {
    pic: Object,
  },
  methods: {
    getImg(pic) {
      let path = pic.id.split("_")
      return require(`../assets/${path[0]}/${path[1]}.jpg`)
    },
  },
})
</script>
<style>
</style>