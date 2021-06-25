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
    <b-row id="rows" align-h="center"  v-viewer="{movable: false,
                                                 keyboard: true,
                                                 navbar: false,
                                                 fullscreen:true,
                                                 button:true}">
        <b-col class="images" cols="10" :md="image.relevance*2+4"  v-for="image in filterImg(img, filmInfo.id)" :key="image.id">
          <photo-card key="current" :pic="image" />
        </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import photoCard from "../components/photo_card.vue"
import images from "../images.json"
import definition from "../components/definition.vue"
import Vue from 'vue'
import 'viewerjs/dist/viewer.css'
import { directive as viewer } from "v-viewer"
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
  directives: {
      viewer: viewer({
        debug: true,
      }),
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
    //this will be done in the future by the backend
    filterImg: function (imagesArray, filmid):Array<image>{
      let images = imagesArray.filter(function (image) {
        return image.id.includes(`${filmid}_`)
      })
      return images;
    },
    show () {
        const viewer = this.$el.querySelector('#rows').$viewer
        viewer.show()
      }
  },
})
</script>
<style scoped>
.images{
  margin-bottom: 15px;
  padding-right: 7.5px;
  padding-left: 7.5px;
  }


</style>