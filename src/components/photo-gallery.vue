<template>
  <transition
    name="modal-appear"
    @before-enter="beforeEnterModal"
    @enter="enterModal"
    @after-enter="afterEnterModal"
    @before-leave="beforeLeaveModal"
    @leave="leaveModal"
    :css="false"
  >
  <div id="myModal" 
    v-if="open"  
    @wheel.prevent
    @touchmove.prevent
    @scroll.prevent >
      <b-icon-x @click.stop="closeModal()" id="closeIcon" ></b-icon-x>
      <transition 
        name="photo-appear"
        @before-enter="beforeEnterPhoto"
        @enter="enterPhoto"
        @leave="leavePhoto"
        @after-leave="afterLeavePhoto">
        <div class="modal-content" v-if="openPhoto" @click.stop>
          <div id="photo-slide">
            <img :src="getPhotoSrc(photoToDisplay)" width="1200" height="800"/>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script lang="ts">
import Vue from 'vue'
import gsap from 'gsap'
import { BIconX } from "bootstrap-vue"


import{Photo,empty_photo} from '@/customTypes'

export default Vue.extend({
  name:'photoGallery',
  components:{
    BIconX
  },
  props:{
    index:Number,
    photos:{
      type:Array as ()=> Photo[]
    }
  },
  data(){
    return{
      open:false,
      lastScrollPosition: 0,
      openPhoto:false,
      durationModal:0.2,
      durationPhoto:0.2
    }
  },
  methods:{
    handleClick(event){
      if(this.openPhoto && event.target!=this.$refs.modal){
        this.closeModal();
      }
    },
    closeModal(){
      this.$emit("modalClose");
      this.openPhoto=false;
    },
    openModal(){
      this.$emit("modalOpen");
      this.open=true;
    },
    beforeEnterModal(el){
      gsap.set(el, {
        opacity: 0,
      })
    },
    enterModal(el,done){
      gsap.to(el, {
        duration: this.durationModal,
        opacity: 1,
        ease: 'expo.in',
        onComplete: done
      })
    },
    afterEnterModal(){
      this.openPhoto=true;
    },
    beforeLeaveModal(){
      this.openPhoto=false;
    },
    leaveModal(el,done){
      let tween = gsap.to(el, {
        duration: this.durationModal,
        opacity: 0,
        ease:'expo.out',
        onComplete: done
      })
      tween.delay(this.durationPhoto+0.1);
      tween.play();
    },
    beforeEnterPhoto(el){
      gsap.set(el, {
        opacity: 1,
        scale:0
      })
    },
    enterPhoto(el,done){
      gsap.to(el, {
        duration: this.durationPhoto,
        scale:1,
        ease: 'inOut(2.5, 1)',
        onComplete: done
      })
    },
    leavePhoto(el,done){
      gsap.to(el, {
        duration: this.durationPhoto,
        scale:0,
        ease: 'inOut(2.5, 1)',
        onComplete: done
      })
    },
    afterLeavePhoto(){
      this.open=false;
    },
    getPhotoSrc:function(photo:Photo) {
      return require(`../assets/${photo.film}/${photo.index}.jpg`);
    },

  },
  watch:{
    //watch index prop if it changes then it means the parent clicked a new photo, so lets open the modal.
    index:function(newVal,oldVal){
      if(newVal!=-1){
        this.openModal()
      }
    }
  },
  computed:{
    //we wanna just display one photo at a time so lets just send photo as prop when there is one to show.
    photoToDisplay():Photo{
      if (this.index!=-1 && this.photos[this.index]){
        return this.photos[this.index];
      }
      //empty photo is just a contraption to satisfy typescript. Actually I would like to return nothing. 
      return empty_photo;
    }
  },
  created() {
    window.addEventListener("click", this.handleClick);
  },
  destroyed() {
    window.removeEventListener("click", this.handleClick);
   },
});
</script>

<style scoped>
#myModal{
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color:rgba(0, 0, 0, 0.57)
}
/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  padding: 0;
  width: 90%;
  max-width: 1200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#closeIcon{
  height: 50px;
  width: 50px;
  margin-top: 20px;
  margin-right: 40px;
  cursor: pointer;
  float: right;
  color:rgb(175, 172, 172);
}
#closeIcon:hover{
  color:rgb(46, 45, 45);
}
#closeIcon:active{
  color:rgb(175, 172, 172);
}


</style>