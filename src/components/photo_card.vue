<template>
  <div id="film_card">
    <b-img-lazy class="img" v-bind="mainProps" :src="getImg(pic)"> </b-img-lazy>
  </div>
</template>
    
<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "photo-card",
  data() {
    return {
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: "#bbb",
        width: 600,
        height: 400,
      },
    }
  },
  props: {
    pic: Object,
  },
  methods: {
    getImg:function(pic) {
      let path = pic.id.split("_");
      return require(`../assets/${path[0]}/${path[1]}.jpg`);
    },
  },
})
</script>
<style>
#film_card {
  background: white;
  cursor: pointer;
}
#film_card:hover {
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>