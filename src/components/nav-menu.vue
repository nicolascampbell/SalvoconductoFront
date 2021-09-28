<template >
  <div id="navtoken" >
    <transition name="appear">
      <div id="navmenu" :class="{padd:this.$route.name!='Home'}" v-if="open">
        <b-container id="menu" >
          
          <b-row >
            <b-col class="item" @click="goToNextRoute('Home')">
              <span> Home </span>
            </b-col>
            <b-col class="item" @click="goToNextRoute('CollectionList')" >
              <span> Collections </span>
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
@import '../styles/nav-menu-desktop.css';
@import '../styles/nav-menu-mobile.css';

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
</style>