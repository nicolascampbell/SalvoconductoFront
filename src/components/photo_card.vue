<template>
  <div id="photo_card">
    <b-img-lazy  class="img" v-bind="mainProps" :src="getImg(pic)"> </b-img-lazy>
  </div>
</template>
    
<script lang="ts">
import Vue from "vue"
type image={
  title: String
  _id: String
  filmNr:Number
  photoNr:Number
  description: String
  relevance:Number  
}
export default Vue.extend({
  name: "photo-card",
  data() {
    return {
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: false,
        blankColor: "#bbb",
        width: 600,
        height: 400,
      },
    }
  },
  props: {
    pic: {
      type: Object as () => image,
      }
  },
  methods: {
    getImg:function() {
      return require(`../assets/${this.pic.filmNr}/${this.pic.photoNr}.jpg`);
    },
  },
})
</script>
<style>

@media screen and (min-width: 768px) {
  #photo_card {
    background: white;
    cursor: pointer;
  }
  #photo_card:hover{
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
}
@media screen and (max-width: 767px) {
  #photo_card {
    background: white;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
}

</style>