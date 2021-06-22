<template>
  <b-container id="films_container" >
    <b-row class="vh-100" align-v="center">
      <b-col offset="1" offset-lg="6">
        <definition
            :title="`Film ${filmInfo.id}`"
            :subtitle="'[Film]'"
            :type="'Chronicle'"
            :definitions="[
              `Taken on ${filmInfo.year}`,
              `Taken in ${filmInfo.place}`,
              filmInfo.description,
            ]"
            :withSlot="false"
          >
          </definition>
      </b-col>
    </b-row>
    <b-row id="rows" >
      <b-col class="image" :offset="Math.round(image.relevance/4+Math.random()*2)" :cols="image.relevance*2+5" v-for="image in filterImg(img, filmInfo.id)" :key="image.id">
        <photo-card key="current" :pic="image" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import photoCard from "../components/photo_card.vue"
import images from "../images.json"
import definition from "../components/definition.vue"

import Vue from "vue"

type image={
  title: String
  id: String
  description: String
  relevance:Number  
}
type film = {
  id: String,
  description: String,
  size: Number,
  year: String,
  place: String,
  tags: Array<String>,
  fotoCover: Number
}
export default Vue.extend({
  components: {
    photoCard,
    definition,
  },
  props: {
    filmInfo: {
      type: Object as () => film,
    }
  },
  data() {
    return {
      img: images.images,
    }
  },
  methods: {
    compare:function (a:image, b:image) {
      if (a.relevance<b.relevance) {
        return -1;
      }
      if (a.relevance>b.relevance) {
        return 1;
      }
      // a must be equal to b
      return 0;
    }
    ,
    //this will be done in the future by the backend
    filterImg: function (imagesArray, filmid):Array<image>{
      let images = imagesArray.filter(function (image) {
        return image.id.includes(`${filmid}_`)
      })
      return images;
    },
  },
})
</script>
<style scoped>
.image{
  margin-bottom: 20px;
}

</style>