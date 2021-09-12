<template >
  <div id="navtoken" >
    <transition name="appear">
      <div id="navmenu" :class="{padd:this.$route.name!='Home'}" v-if="open">
        <b-container id="menu" >

          <b-row >

            <b-col class="item" @click="$router.push({name:'CollectionList'})" >
              <span> Collections </span>
            </b-col>
            <b-col class="item" @click="$router.push({name:'Home'})">
              <span> Home </span>
            </b-col>
            <b-col class="item" style="padding-right=0;" @click="$router.push({name:'FilmList'})">
              <span> Films </span>
            </b-col>

          </b-row>

        </b-container>
        <div class="mcap" @click="open=!open"></div>
      </div>
    </transition>

    <div class="back" v-if="this.$route.name!='Home'" @click="$router.push({name:previousRoutes[$route.name]})" >
      <b-icon-arrow-return-left class="arrow"></b-icon-arrow-return-left>
    </div>

    <transition name="appear">
      <div :class="{padd:this.$route.name!='Home', token:true}" v-if="!open" @click.stop="open=!open" >
        <b-icon-arrow-right class="arrow"></b-icon-arrow-right>
      </div>
    </transition>
       
  </div>
</template>
<script lang="ts">
import Vue from "vue"
import { BIconArrowRight, BIconArrowReturnLeft } from 'bootstrap-vue'

import{previousRoutes} from '../navigationRoutes'

export default Vue.extend({
  name:'navMenu',
  components:{
    BIconArrowRight,
    BIconArrowReturnLeft
  },
  data() {
    return {
      open: false,
      lastScrollPosition: 0,
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
        
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener('click', this.documentClick)
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    document.addEventListener('click', this.documentClick)
  },
})
</script>
<style scoped>
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

  .mcap{
      background-color: rebeccapurple;
      width: 0.7em;
      height: 3em;
      border: black solid 1px;  
      cursor: pointer;
  }
  .mcap:hover{
    background-color: rgb(142, 97, 187);
  }
  .back{
    position: absolute; 
    width:2em;
    height:100%;
    border: black solid 1px;  
    cursor: pointer;
    border-left: transparent;
    background-color: #fae844;
    z-index: 2;
  }
  .back:hover{
      background-color: rgb(253, 241, 136);
  }
  .token{
    position: absolute;
    width:1.8em;
    height:85%;
    background-color: rgb(137, 81, 192);
    border: black solid 1px;  
    cursor: pointer;
    border-left: transparent;
  }
  .token:hover{
    background-color: rgb(157, 96, 218);
  }
  .padd{
    left: 2em!important;;
  }

  .arrow{
    margin: 0;
    margin-left: 5px;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);  
  }
  .appear-enter-active {
    transition: all 0.4s ease-in;
  }
  .appear-leave-active {
    transition: all 0.2s ease-out;
  }
  .appear-enter, .appear-leave-to
  /* .app-enter-active-leave-active below version 2.1.8 */ {
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
  .mcap{
      position:relative;  
      background-color: rebeccapurple;
      width: 0.6em;
      height: 3em;
      border: black solid 1px;  
      cursor: pointer;
      border-right: transparent;
  }
  .mcap:hover{
    background-color: rgb(142, 97, 187);
  }
  .back{
    position: absolute;
    width:1.5em;
    height:45%;
    border: black solid 1px;  
    cursor: pointer;
    border-right: transparent;
    background-color: #fce831d2;
    z-index: 2;
  }
  .back:hover{
      background-color: rgba(247, 231, 93, 0.767)
  }
  .token{
    top: 0;
    position: absolute;
    width:1.7em;
    height:55%;
    background-color: rgba(137, 81, 192, 0.800);
    border: black solid 1px;  
    cursor: pointer;
    border-right: transparent;
  }
  .token:hover{
    background-color: rgb(157, 96, 218, 0.800);
  }

  .token .arrow{
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
  .arrow{
    margin: 0;
    margin-left: 5px;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%); 
  }
  .appear-enter-active {
    transition: all 0.4s ease-in;
  }
  .appear-leave-active {
    transition: all 0.2s ease-out;
  }
  .appear-enter, .appear-leave-to
  /* .app-enter-active-leave-active below version 2.1.8 */ {
    transform: translateX(100%);
    opacity:0.8;
  }
}
</style>