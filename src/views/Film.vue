<template>
  <div id="films_container" class="container">
    <b-row
      id="rows"
      class="vh-100 text-center"
      align-v="center"
      v-for="image in filterImg(img, filmId)"
      :key="image.id"
    >
      <b-col>
        <photo-card :pic="image" />
      </b-col>
    </b-row>
    <navigator id="navi" />
  </div>
</template>
<script lang="ts">
import photoCard from "../components/photo_card.vue"
import images from "../images.json"
import navigator from "../components/navigator.vue"

export default {
  components: {
    photoCard,
    navigator,
  },
  props: {
    filmId: String,
    filmSize: String,
  },
  data() {
    return {
      img: images.images,
    }
  },
  methods: {
    //this will be done in the future by the backend
    filterImg: function (imagesArray, filmid) {
      let images = imagesArray.filter(function (image) {
        return image.id.includes(`${filmid}_`)
      })
      return images
    },
  },
}
</script>
<style scoped>
</style>