<template>
  <b-container id="films_container">
    <b-row class="vh-100" align-v="center">
      <b-col offset="1" offset-md="3" offset-xl="7">
        <definition
          :title="`Film ${film._id}`"
          :subtitle="'[Film]'"
          :type="'Chronicle'"
          :definitions="[
            `Taken on ${film.year}`,
            `Taken in ${film.place}`,
            film.description,
          ]"
          :withSlot="false"
        >
        </definition>
      </b-col>
    </b-row>
    <b-row
      align-h="center"
      v-viewer.rebuild="{
        movable: false,
        keyboard: true,
        navbar: false,
        fullscreen: true,
        button: true,
        rotatable: false,
        scalable: false,
        title: 0,
      }"
    >
      <b-col
        class="images"
        cols="12"
        :md="photo.relevance * 2 + 4"
        v-for="photo in film.photos"
        :key="photo.index"
      >
        <photo-card :photo="photo" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from "vue"
import "viewerjs/dist/viewer.css"
import { directive as viewer } from "v-viewer"
import axios from "axios"

import photoCard from "../components/photo-card.vue"
import definition from "../components/definition.vue"
import { Film, Photo } from "@/customTypes"

export default Vue.extend({
  name:'Film',
  components: {
    photoCard,
    definition,
  },
  directives: {
    viewer: viewer({
      debug: true,
    }),
  },
  data() {
    return {
      film: {
        type: Object as () => Film,
      },
    }
  },
  async created() {
    try {
      const response = await axios.get(
        `http://salvoconducto.net:3000/film/${this.$route.params.filmid}`,
      )
      if(response.data==null){
        this.$router.push({name: 'NotFound'});
      }
      this.film = response.data;

    } catch (e) {
      console.log(e);
      this.$router.push({name: 'NotFound'})
    }
  },
})
</script>
<style scoped>
@media screen and (min-width: 768px) {
  .images {
    margin-bottom: 15px;
    padding-right: 7.5px;
    padding-left: 7.5px;
  }
}
@media screen and (max-width: 767px) {
  .images {
    margin-bottom: 30px;
    padding-right: 7.5px;
    padding-left: 7.5px;
  }
}
</style>