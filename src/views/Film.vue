<template>
  <div id="film" v-if="loadedSources">
    <b-container id="film-container" fluid>
      <b-row class="vh-100" align-v="center">
        <b-col offset="1" offset-md="3" offset-xl="7" xl="3" >
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
      <b-row >
        <div
          id="images-container"
        >
          <div
            :class="{'small-image':photo.relevance<=1,'image':true}"
            v-for="photo in film.photos"
            :key="photo.index"
            @click="changeIndex(photo)"
            :style="`width:${getPhotoWidth(photo.relevance)}%!important;`"
            >
            <photo-card 
            :photo="photo"/>
          </div>
          
        </div>
      </b-row>
      <b-row  class="row" align-v="center" style=" margin: 5%;">
        <b-col
          offset="4"
          cols="4"
          
        >
        <btn-scroll-top/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue'
import axios from 'axios'

import photoCard from '../components/photo-card.vue'
import definition from '../components/definition.vue'
import { Film, Photo } from '@/customTypes'
import btnScrollTop from '../components/button-scroll-top.vue'

export default Vue.extend({
  name:'Film',
  components: {
    photoCard,
    definition,
    btnScrollTop
  },
  data() {
    return {
      film: {
        type: Object as () => Film,
      },
      index:-1,
      loadedSources:false,
      isNotPhone:true,
    }
  },
  methods:{
    changeIndex:function(photo:Photo){   
      this.isNotMobile();
      if(this.isNotPhone){
        this.index=photo.index.valueOf()-1;
      }
    },
    //Not so useful without imageviewer! we wanna use this modal component if the device is not a phone.
    //in phones is just not worth it.
    isNotMobile:function(){
      this.isNotPhone= !window.matchMedia("(max-width: 767px)").matches;
    },
    getPhotoWidth(relevance){
      if(!this.isNotPhone){
        return 100;
      }
      if(relevance==0){
        return 30;
      }else if(relevance==1){
        return 45;
      }else if(relevance==2){
        return 70;
      }else{
        return 100;
      }
    },
    getRandomMargin(relevance){
     if(relevance<=1){
        return Math.random()*20;
      }
    }
    
  },
  mounted(){
    this.isNotMobile();
  },
  async beforeMount() {
    try {
      const response = await axios.get(
        `http://salvoconducto.net:3000/film/${this.$route.params.filmid}`,
      )
      if(response.data==null){
        this.$router.push({name: 'NotFound'});
      }
      this.film = response.data;
      this.loadedSources=true;

    } catch (e) {
      console.log(e);
      this.$router.push({name: 'NotFound'})
    }
  },
})
</script>
<style scoped>
@media screen and (min-width: 767px) {
  #film-container{
    padding-right: 10%;
    padding-left: 10%;
  }
  #images-container{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    row-gap: 30vh;
    column-gap: 30px;
    width:100%;
  }

  .small-image:nth-child(3n){
    margin-top:100px;
  }
  .small-image:nth-child(5n){
    margin-right:auto;
  }
}
@media screen and (max-width: 767px) {
  #film-container{
    padding-right: 7%;
    padding-left: 7%;
  }
  #images-container{
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    row-gap: 50vh;
    width:100%;
  }
  .image{
    width:100%!important;
  }
}
@media screen and (max-width: 767px) and (orientation : landscape) {
  #film-container{
    padding-right: 20%;
    padding-left: 20%;
  }
  
}


</style>