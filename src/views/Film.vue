<template>
  <div id="films_container" class="container">
    <b-button :to="{ name: 'FilmList' }">
          go Back! 
    </b-button>
     <b-row class="vh-100 text-center" align-v="center" v-for="image in filterImg(img, filmId)" :key="image.id" >
      <b-col  >
        <photo-card :pic="image"/>
      </b-col>
     </b-row>
  </div>
</template>
<script lang="ts">
import photoCard from '../components/photo_card.vue';
import images from  "../images.json";
export default ({
  components:{
      photoCard,
  },
  props:{
    filmId:String,
    filmSize:String,
  },
  data(){
    return{
      img:images.images
    }
  },
  methods:{
    //this will be done in the future by the backend
    filterImg: function(imagesArray,filmid){
      alert("reached");
      let images = imagesArray.filter(function (image){
        return image.id.includes(`${filmid}_`);
      });
      console.log(images);
      return images;
    }
  }
  
});
</script>