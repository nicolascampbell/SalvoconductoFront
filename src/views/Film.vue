<template>
  <div id="films_container" class="container">
     <b-row class="vh-100 text-center" align-v="center" v-for="image in images" :key="image.id" >
      <b-col offset="2" >
        <photo-card :pic="image" 
        :path="`../assets/${filmId}/${image.id}.jpg`"/>
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
    filmId:String,
  },
  data(){
    return{
      images:store.films[0].images,
    }
  }
});
</script>