<template>
  <div id="films_container" class="container">
    <b-button :to="{ name: 'FilmList' }">
          go Back! 
    </b-button>
     <b-row class="vh-100 text-center" align-v="center" v-for="image in film.images" :key="image.id" >
      <b-col offset="3" >
        <photo-card :pic="image"/>
      </b-col>
     </b-row>
  </div>
</template>
<script lang="ts">
import photoCard from '../components/photo_card.vue';
import store from  "../store.json";
export default ({
  components:{
      photoCard,
  },
  props:{
    film:Object,
  },
  
});
</script>