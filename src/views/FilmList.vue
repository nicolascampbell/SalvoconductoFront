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
    <navigator 
    :show_routes="{
        left: {name:'Home',params:{}},
        right: {name:'Film', params:{ filmId: '2', filmSize: '17' }},
        up: null,
        down: null,
      }" 
      id="navi"/>
  </div>
</template>
<script lang="ts">
import Vue from "vue"
import filmCard from "../components/film_card.vue"
import films from "../films.json"
import navigator from "../components/navigator.vue"

export default Vue.extend({
  components: {
    filmCard,
    navigator
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
