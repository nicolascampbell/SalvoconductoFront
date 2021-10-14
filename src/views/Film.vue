<template>
  <div id="film" v-if="loadedSources">
    <b-container id="film-container" fluid>
      <b-row class="vh-100" align-v="center">
        <b-col offset="1" offset-md="3"  offset-xl="6" xl="5" >
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
      <b-row v-if="!isMobile()" no-gutters  style="text-align: center">
        <b-col 
          offset="4"
          cols="4"
          offset-sm="5"
          sm="2">
          <button-toggle-view @changeView="desktopView=!desktopView" label="Change View" />
        </b-col>
      </b-row>
      <b-row align-v="center" style="margin-top:20px">
        <b-col >
          <list-photo-swiper v-if="isMobile()||!desktopView" :photos="film.photos" :navigation="!isMobile()&&!desktopView"/>
          <list-photo-desktop v-else :photos="film.photos"/>
        </b-col>
      </b-row>
      <b-row v-if="!isMobile()&&desktopView" class="row" align-v="center" style=" margin: 5%;">
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

import definition from '../components/definition.vue'
import { Film, Photo } from '@/customTypes'
import btnScrollTop from '../components/button-scroll-top.vue'
import ListPhotoDesktop from '../components/list-photo-desktop.vue'
import listPhotoSwiper from '@/components/list-photo-swiper.vue'
import buttonToggleView from '../components/button-toggle-view.vue'

export default Vue.extend({
  name:'Film',
  components: {
    definition,
    btnScrollTop,
    ListPhotoDesktop,
    listPhotoSwiper,
    buttonToggleView
  },
  data() {
    return {
      film: {
        type: Object as () => Film,
      },
      index:-1,
      loadedSources:false,
      desktopView:true
    }
  },
  methods:{
    // Checks if we are on mobile or not.
    isMobile:function(){
      return window.matchMedia("(max-width: 767px)").matches;
    },
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

}
@media screen and (max-width: 767px) {
  #film-container{
    padding-right: 7%;
    padding-left: 7%;
  }
}
@media screen and (max-width: 767px) and (orientation : landscape) {
  #film-container{
    padding-right: 20%;
    padding-left: 20%;
  }
}


</style>