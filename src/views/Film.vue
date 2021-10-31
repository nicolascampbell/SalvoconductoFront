<template>
  <!--TODO add loading thing-->
  <div v-if="loadedSources">
    <b-container id="film-container" fluid>
      <b-row id="first-row" align-v="center">
        <b-col offset="1" offset-md="3" offset-xl="6" xl="5">
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
      <b-row align-h="around" style="text-align: center">
        <b-col cols="3" lg="1">
          <button-prev-film
            :disable="previous[$route.params.filmid] ? false : true"
            :prevId="previous[$route.params.filmid] || ''"
          />
        </b-col>
        <b-col v-if="!isMobile()" cols="2">
          <button-toggle-view
            @changeView="desktopView = !desktopView"
            label="Change View to "
          />
        </b-col>
        <b-col cols="3" lg="1">
          <button-next-film
            :disable="next[$route.params.filmid] ? false : true"
            :nextId="next[$route.params.filmid] || ''"
          />
        </b-col>
      </b-row>
      <b-row
        align-v="center"
        :class="{ 'image-galery-row': !desktopView }"
        no-gutters
      >
        <b-col :class="{ 'image-galery-col': !desktopView }">
          <list-photo-swiper
            v-if="isMobile() || !desktopView"
            :photos="film.photos"
            :navigation="!isMobile() && !desktopView"
          />
          <list-photo-desktop v-else :photos="film.photos" />
        </b-col>
      </b-row>
      <b-row
        v-if="!isMobile() && desktopView"
        class="row"
        align-h="around"
        style="margin-top: 5%; text-align: center"
      >
        <b-col cols="3" md="1">
          <button-prev-film
            :disable="previous[$route.params.filmid] ? false : true"
            :prevId="previous[$route.params.filmid] || ''"
          />
        </b-col>
        <b-col cols="4" sm="2">
          <btn-scroll-top />
        </b-col>
        <b-col cols="3" md="1">
          <button-next-film
            :disable="next[$route.params.filmid] ? false : true"
            :nextId="next[$route.params.filmid] || ''"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script lang='ts'>
import Vue from "vue"
import axios from "axios"

import definition from "../components/definition.vue"
import { Film } from "@/customTypes"
import btnScrollTop from "../components/button-scroll-top.vue"
import ListPhotoDesktop from "../components/list-photo-desktop.vue"
import listPhotoSwiper from "@/components/list-photo-swiper.vue"
import buttonToggleView from "../components/button-toggle-view.vue"
import buttonNextFilm from "../components/button-next-film.vue"
import buttonPrevFilm from "../components/button-prev-film.vue"

import { previous } from "@/films"
import { next } from "@/films"

export default Vue.extend({
  name: "Film",
  components: {
    definition,
    btnScrollTop,
    ListPhotoDesktop,
    listPhotoSwiper,
    buttonToggleView,
    buttonNextFilm,
    buttonPrevFilm,
  },
  data() {
    return {
      film: {
        type: Object as () => Film,
      },
      index: -1,
      loadedSources: false,
      desktopView: true && !window.matchMedia("(max-width: 767px)").matches,
      previous: previous,
      next: next,
    }
  },
  methods: {
    // Checks if we are on mobile or not.
    isMobile: function () {
      return window.matchMedia("(max-width: 767px)").matches
    },
  },
  async beforeMount() {
    try {
      const response = await axios.get(
        `https://salvoconducto.net/api/film/${this.$route.params.filmid}`,
      )
      if (response.data == null) {
        this.$router.push({ name: "NotFound" })
      }
      this.film = response.data
      this.loadedSources = true
    } catch (e) {
      console.log(e)
      this.$router.push({ name: "NotFound" })
    }
  },
})
</script>
<style scoped>
#first-row {
  height: 90vh;
}
@media screen and (min-width: 767px) {
  #film-container {
    padding-right: 4em;
    padding-left: 4em;
  }
  .image-galery-col {
    padding: 0% 5% 5px 5%;
  }
  .image-galery-row {
    width: 100%;
    height: 100%;
  }
}
@media screen and (max-width: 767px) {
  #film-container {
    padding-right: 7%;
    padding-left: 7%;
  }
  .image-galery-row {
    width: 100%;
    padding-top: 10%;
    padding-bottom: 80%;
  }
}
@media screen and (max-width: 767px) and (orientation: landscape) {
  #film-container {
    padding-right: 10%;
    padding-left: 10%;
  }
}
</style>