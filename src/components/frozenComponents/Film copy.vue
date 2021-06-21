<template>
  <b-container id="films_container" >
    <b-row id="rows" class="vh-100 text-center" align-v="center">
      <b-col offset-lg="2" cols="8">
        <navigate-items @changeIndex="changeIndex" :maxItems="maxImg">
          <template v-slot:current>
            <photo-card key="current" :pic="filterImg(img, filmId)[index]" />
          </template>
          <template v-slot:next>
            <photo-card key="next" :pic="filterImg(img, filmId)[index]"
          /></template>
        </navigate-items>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import photoCard from "../components/photo_card.vue"
import images from "../images.json"
import navigateItems from "../components/navigateItems.vue"
import Vue from "vue"

type image={
  title: String
  id: String
  description: String
        
}
export default Vue.extend({
  components: {
    photoCard,
    navigateItems
  },
  props: {
    filmId: String,
    filmSize: Number,
  },
  data() {
    return {
      index:0,
      maxImg:this.filmSize-1,
      img: images.images,
    }
  },
  methods: {
    //this will be done in the future by the backend
    filterImg: function (imagesArray, filmid):Array<image>{
      let images = imagesArray.filter(function (image) {
        return image.id.includes(`${filmid}_`)
      })
      return images;
    },
    changeIndex(i: number):Number {
      this.index = i;
      return 0;
    },
  },
})
</script>
<style scoped>
</style>