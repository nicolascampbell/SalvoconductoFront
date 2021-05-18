<template>
  <div id="films_container" class="container">
    <b-row
      class="vh-100 text-center"
      align-v="center"
      v-for="film in films"
      :key="film.id"
    >
      <b-col>
        <film-card :filmInfo="film" />
      </b-col>
      <b-col cols="1">
        <img
          @click="goToFilm(film)"
          @mouseover="hover = true"
          @mouseleave="hover = false"
          class="active"
          :src="require('../assets/arrow_right.png')"
        >
      </b-col>
    </b-row>
  </div>
</template>
<script lang="ts">
import Vue from "vue"
import filmCard from "../components/film_card.vue"
import films from "../films.json"
export default Vue.extend({
  components: {
    filmCard,
  },
  data() {
    return {
      films: films.films,
      hover:false,
    }
  },
  methods: {
    goToFilm(film) {
      this.hover=false;
      this.$router.push({
        name: "Film",
        params: { filmId: film.id, filmSize: film.size.toString() },
      })
    },
  },
})
</script>
<style scoped>
  .active{
    transform:scale(0.9);
    transition: transform .2s;
  }
  .active:hover{
    transform: scale(1);
  }
  .active:focus{
    filter: blur(5px) brightness(90%);
  }
</style>
