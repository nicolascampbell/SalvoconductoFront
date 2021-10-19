<template>
  <div v-if="photos" id="images-container-desktop">
    <div
      :class="{'small-image':photo.relevance==0,
              'medium-image':photo.relevance==1,
              'image':true}"
      v-for="photo in photos"
      :key="photo.index"
      :style="`width:${getPhotoWidth(photo.relevance)}%!important;`"
      >
        <photo-card :photo="photo"/>
    </div>
  </div>
</template>

<script lang='ts'>
import photoCard from '../components/card-photo.vue'
import Vue from 'vue'

export default Vue.extend({
  name:'listPhotoDesktop',
  components: {
    photoCard,
  },
  props:{
    photos:Array,
  },
  methods:{
    getPhotoWidth(relevance){
      if(relevance==0 && window.matchMedia("(min-width: 1200px)").matches){
        return 30;
      }else if(relevance<=1){
        return 46;
      }else if(relevance==2){
        return 70;
      }else{
        return 100;
      }
    },
  },
})

</script>

<style>
@media screen and (min-width: 767px) {
  #images-container-desktop{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    row-gap: 30vh;
    column-gap: 30px;
    width:100%;
  }

  .small-image:nth-child(2n){
    margin-top:100px;
  }
  
  .medium-image:nth-child(3n){
    margin-top:100px;
  }
 
}

</style>