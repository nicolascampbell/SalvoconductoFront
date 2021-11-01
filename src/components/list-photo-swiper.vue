<template>
  <div id="images-container-swiper">
    <swiper
      v-if="photos.length !== 0"
      class="swiper"
      :options="swiperOption"
      @progress="progress"
    >
      <swiper-slide
        v-for="photo in photos"
        :key="photo.index"
      >
        <photo-card
          :photo="photo"
          class="swiper-lazy"
        />
        <div class="swiper-lazy-preloader swiper-lazy-preloader-black" />
      </swiper-slide>
      <div
        slot="pagination"
        class="swiper-pagination"
      />
      <div id="prev" />
      <div id="next" />
      <div
        v-if="navigation"
        slot="button-next"
        class="swiper-button-next swiper-button-black"
      />
      <div
        v-if="navigation"
        slot="button-prev"
        class="swiper-button-prev swiper-button-black"
      />
    </swiper>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import photoCard from './card-photo.vue'
import { Photo } from '@/customTypes'

export default Vue.extend({
  name: 'ListPhotoSwiper',
  components: {
    Swiper,
    SwiperSlide,
    photoCard
  },
  directives: {
    swiper: directive
  },
  props: {
    photos: { type: Array, default: ():Array<Photo> => [] },
    navigation: { type: Boolean, default: false }
  },
  data () {
    return {
      swiperOption: {
        lazy: true,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false
        }
      }
    }
  },
  created () {
    if (this.navigation) {
      this.swiperOption['navigation'] =
      {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  },
  methods: {
    // this method gets called everytime I pass to new photo in galery
    progress: function (progress:number):void {
      const a = document.getElementsByClassName('swiper-pagination-progressbar-fill')[0]
      if (progress >= 1) {
        a.classList.add('swiper-pagination-progressbar-filled')
        // We take the style with yellow bar only if its there
      } else if (a.classList.contains('swiper-pagination-progressbar-filled')) {
        a.classList.remove('swiper-pagination-progressbar-filled')
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
