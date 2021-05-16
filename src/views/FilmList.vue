<template>
  <div id="films_container" class="container">
     <b-row class="vh-100 text-center" align-v="center" v-for="film in films" :key="film.name">
      <b-col cols="2">
        <b-button :to="{ name: 'Home' }">
          go Back! 
        </b-button>
      </b-col>
      <b-col>
        <film-card :filmInfo="film"/>
      </b-col>
      <b-col cols="1"></b-col>

     </b-row>
  </div>
</template>
<script lang="ts">
import filmCard from '../components/film_card.vue';
import store from  "../store.json";
export default ({
  components:{
      filmCard,
    },
  data(){
    return{
      films:store.films
    }
  }
});
</script>
