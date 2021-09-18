<template >
  <div id="navtoken" >
    <transition name="appear">
      <div id="navmenu" :class="{padd:this.$route.name!='Home'}" v-if="open">
        <b-container id="menu" >
          
          <b-row >
            <b-col class="item" @click="goToNextRoute('CollectionList')" >
              <span> Collections </span>
            </b-col>
            <b-col class="item" @click="goToNextRoute('Home')">
              <span> Home </span>
            </b-col>
            <b-col class="item" style="padding-right=0;" @click="goToNextRoute('FilmList')">
              <span> Films </span>
            </b-col>
          </b-row>

        </b-container>
        <!--This here is the a little "decorative" cap Btn but is also purple-->
        <div id="menuCapBtn" class="purpleButton" @click="open=!open"></div>
      </div>
    </transition>

    <!--This here is the Back Button, only appears when we are not in Home-->
    <div id="backBtn" class="yellowButton" v-if="this.$route.name!='Home'"  @click="goToNextRoute(previousRoutes[$route.name])" >
      <div class="arrow">
        <icon-base ><icon-arrow-return-left/></icon-base>
      </div>
    </div>
    <!--This here is the Menu Button-->
    <transition name="appear">
      <div :class="{padd:this.$route.name!='Home',purpleButton:true}" id="menuBtn" v-if="!open" @click.stop="open=!open" >
        <div class="arrow">
           <icon-base ><icon-arrow-right/></icon-base>
        </div>
      </div>
    </transition>
       
  </div>
</template>
<script lang="ts">
import Vue from "vue"

import{previousRoutes} from '../navigationRoutes'
import IconBase from './icon-base.vue'
import IconArrowRight from './Icons/icon-arrow-right.vue'
import IconArrowReturnLeft from './Icons/icon-arrow-return-left.vue'

export default Vue.extend({
  name:'navMenu',
  components:{
    IconBase,
    IconArrowRight,
    IconArrowReturnLeft
  },
  data() {
    return {
      open: false,
      lastScrollPosition: 0,
      //TODO: check if this is necessary
      previousRoutes:previousRoutes
    }
    
  },
  methods: {
    handleScroll: function () {
      //For now this method may be unecessary because we want to close it always
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // Because of momentum scrolling on mobiles,
      //we shouldn't continue if it is less than zero
      if (currentScrollPosition < 30) {
        return;
      }
      // Here we determine whether we need to show or hide the navbar
      this.$data.open=false;
      
      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition;
    },
    documentClick:function(){
      this.open = false;
        
    },
    goToNextRoute(next:string){
      const currentRoute=this.$router.currentRoute.name!;
      //Checks if the current rou
      if(currentRoute!=next){
        this.$router.push({name:next});
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener('click', this.documentClick);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    document.addEventListener('click', this.documentClick);
  },
})
</script>
<style scoped>
.purpleButton{
  background-color: var(--purple);
  position: absolute;
  border: black solid 1px;  
  cursor: pointer;
}
.purpleButton:hover{
  background-color: var(--purpleHover)!important;
}
.yellowButton{
  background-color: var(--yellow);
  position: absolute;
  border: black solid 1px;  
  cursor: pointer;
}
.yellowButton:hover{
  background-color: var(--yellowHover);
}

.arrow{
    margin: 0;
    margin-left: 5px;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%); 
}
/**This following classes are for the items in the Menu */
.item:hover{
  cursor: pointer;
  color:blueviolet;
  background-color: rgba(250, 235, 103, 0.5);
}
.item:nth-child(2n){
  background-color: rgb(231, 230, 230);
} 
.item:nth-child(2n):hover{
  background-color: rgba(248, 233, 94, 0.5);
}
@media screen and (min-width: 768px) {
  #menu {
    background-color: rgb(255, 255, 255);
    border: black solid 1px;
    overflow-x: hidden;
    border-left: transparent;
    border-right: transparent;
    text-align: center;
    font-size:1.2em;
    font-family: Arial, Helvetica, sans-serif;
    color:rgb(43, 43, 43);
    letter-spacing: 2px;
  }
  #navmenu{
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    z-index: 1;
    position:absolute;
    width: 100%;  
  }
  #menuBtn{
    width:1.8em;
    height:85%;
    border-left: transparent;
  }
  #backBtn{
    width:2em;
    height:100%;
    border-left: transparent;
    z-index: 2;
  }
  #menuCapBtn{
    position: relative; 
    background-color: var(--purple);
    width: 0.7em;
    height: 3em;
  }
  .padd{
    left: 2em!important;;
  }
  .appear-enter-active {
    transition: all 0.4s ease-in;
  }
  .appear-leave-active {
    transition: all 0.2s ease-out;
  }
  .appear-enter, .appear-leave-to
  /* This is when the icon is on the left!*/ {
    transform: translateX(-100%);
    opacity:0.8;
  }
} 
@media screen and (max-width: 767px) {  
  #menu {
    background-color: rgb(255, 255, 255);
    border: black solid 1px;
    overflow-x: hidden;
    border-right: transparent;
  
    text-align: center;
    font-size:1.2em;
    font-family: Arial, Helvetica, sans-serif;
    color:rgb(43, 43, 43);
    letter-spacing: 2px;
  }
  #navmenu{
    position:absolute;
    width: 100%;  
    top: 15%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: left;
    align-items: center;
    z-index: 1;
    right: 0;
  }
  #menuBtn{
    top: 0;
    width:1.7em;
    height:55%;
    border-right: transparent;
  }
  #backBtn{
    width:1.5em;
    height:45%;
    z-index: 2;
  }
  #menuCapBtn{
      position:relative;  
      background-color: rgb(145, 107, 182);
      width: 0.6em;
      height: 3em;
      border-right: transparent;
  }
  /**This is the menu arrow, the normal one */
  #menuBtn .arrow{
    margin: 0;
    margin-left: 5px;
    position: relative;
    top: 40%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%); 
    transform: scaleX(-1);
    -moz-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    -ms-transform: scaleX(-1); 
  }
  .appear-enter-active {
    transition: all 0.4s ease-in;
  }
  .appear-leave-active {
    transition: all 0.2s ease-out;
  }
  .appear-enter, .appear-leave-to
  /* This is when the icon is on the right!*/  {
    transform: translateX(100%);
    opacity:0.8;
  }
}
</style>