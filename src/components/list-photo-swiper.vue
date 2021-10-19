<template>
  <div id="images-container-swiper">
    <swiper @progress="progress" class="swiper" :options="swiperOption">
      <swiper-slide 
        v-for="photo in photos"
        :key="photo.index"
      >
        <photo-card :photo="photo" class="swiper-lazy"/>
        <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>

      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div id="prev"></div>
      <div id="next"></div>
      <div v-if="navigation" class="swiper-button-next swiper-button-black" slot="button-next"></div>
      <div v-if="navigation" class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
    </swiper>
  </div>
</template>

<script lang='ts'>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper"
import "swiper/css/swiper.css"
import photoCard from "./card-photo.vue"
import Vue from "vue"

export default Vue.extend({
  name:'listPhotoSwiper',
  components: {
    Swiper,
    SwiperSlide,
    photoCard,
  },
  directives: {
    swiper: directive,
  },
  props:{
    photos:Array,
    navigation:Boolean
  },
  data() {
    return {
      swiperOption: { 
        lazy:true,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
         keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
      },
    }
  },
  methods:{
    //this method gets called everytime I pass to new photo in galery
    progress:function(progress){
      let a =document.getElementsByClassName("swiper-pagination-progressbar-fill")[0];
      if(progress>=1){
        a.classList.add("swiper-pagination-progressbar-filled")
        //We take the style with yellow bar only if its there
      }else if(a.classList.contains("swiper-pagination-progressbar-filled")){
        a.classList.remove("swiper-pagination-progressbar-filled")
      }
    },

    
  },
  created(){
    if(this.navigation){
      this.swiperOption["navigation"] =
      {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  }
})
</script>

<style>
  @media screen and (min-width: 767px),(orientation: landscape){
    #images-container-swiper{
      transform:scale(0.85)
    }
  }
  @media screen and (orientation: landscape){
    #images-container-swiper{
      transform:scale(0.80)
    }
  }
  .swiper-pagination-progressbar-fill{
    background:var(--purple)!important;
  }
  .swiper-pagination-progressbar-filled{
    background:var(--yellow)!important;
  }
  .swiper-lazy-preloader{
    --swiper-preloader-color:var(--purpleHover);
  }

  .swiper{
    height:auto;
  }
  .swiper-slide {
    height: auto;
    display: flex;
    justify-content: center;
    align-self: center;
    background-color: rgba(226, 226, 226, 0.123);
  }
</style>