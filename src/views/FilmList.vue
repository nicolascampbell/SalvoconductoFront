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
<style>

</style>
