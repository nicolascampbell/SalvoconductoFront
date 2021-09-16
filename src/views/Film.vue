<template>
  <div id="film" v-if="loadedSources">
    <b-container id="films_container"  >
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
      >
        <b-col
          class="images"
          cols="12"
          :md="photo.relevance * 2 + 4"
          v-for="photo in film.photos"
          :key="photo.index"
          @click="changeIndex(photo)" 
        >
          <photo-card :photo="photo"/>
        </b-col>
      </b-row>
      <b-row  class="row" align-v="center" style=" margin: 5%;">
        <b-col
          offset="4"
          cols="4"
          offset-sm="5"
          sm="2"
        >
        <btn-scroll-top/>
        </b-col>
      </b-row>
    </b-container>
    <photo-gallery v-if="isNotPhone" :photos="film.photos" :index="index" @modalClose="index=-1"/>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue'
import axios from 'axios'

import photoCard from '../components/photo-card.vue'
import definition from '../components/definition.vue'
import photoGallery from '../components/photo-gallery.vue'
import { Film, Photo } from '@/customTypes'
import btnScrollTop from '../components/button-scroll-top.vue'

export default Vue.extend({
  name:'Film',
  components: {
    photoCard,
    definition,
    photoGallery,
    btnScrollTop
  },
  data() {
    return {
      film: {
        type: Object as () => Film,
      },
      index:-1,
      isNotPhone:false,
      loadedSources:false
    }
  },
  methods:{
    changeIndex:function(photo:Photo){   
      this.isNotMobile();
      if(this.isNotPhone){
        this.index=photo.index.valueOf()-1;
      }
    },
    //we wanna use this modal component if the device is not a phone.
    //in phones is just not worth it.
    isNotMobile:function(){
      this.isNotPhone= !window.matchMedia("(max-width: 767px)").matches
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

@media screen and (min-width: 768px) {
  /*This takes out scrollbar in film. height:100%; is essential*/
  #film{
    overflow-y:scroll;
  }
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