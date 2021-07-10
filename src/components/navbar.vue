<template >
  <div id="navtoken" >
    <transition name="appear">
      <div id="navbar" :class="{padd:this.$route.name!='Home'}" v-if="open">
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
        <div class="mcap" @click="open=!open" >
        </div>
      </div>
      </transition>
      <div class="back" v-if="this.$route.name!='Home'" @click="$router.go(-1)" >
        <b-icon-arrow-return-left id="arrow"></b-icon-arrow-return-left>
      </div>
      <transition name="appear">
        <div class="token" v-if="!open" @click.stop="open=!open" >
          <b-icon-arrow-right id="arrow"></b-icon-arrow-right>
        </div>
      </transition>
       
  </div>
</template>
<script lang="ts">
import Vue from "vue"
import { BIconArrowRight, BIconArrowReturnLeft } from 'bootstrap-vue'
export default Vue.extend({
  components:{
    BIconArrowRight,
    BIconArrowReturnLeft
  },
  data() {
    return {
      open: false,
      lastScrollPosition: 0,
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

#menu {
  text-align: center;
  background-color: rgb(255, 255, 255);
  border: black solid 1px;
  overflow-x: hidden;
  font-size:1.2em;
  border-left: transparent;

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
    min-width: 0.7em;
    height: 45%;
    border: black solid 1px;  
    cursor: pointer;
    border-left: transparent;

}
.mcap:hover{
  background-color: rgb(142, 97, 187);
}
#navbar{
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
    z-index: 1;

}
.padd{
  left:2em;

}
.back{
  min-width:2em;
  height:100%;
  border: black solid 1px;  
  cursor: pointer;
  border-left: transparent;
  background-color: #fae844f8;
  z-index: 2;
}
.back:hover{
    background-color: rgba(235, 223, 123, 0.767);
}
.token{
  width:7%;
  min-width:1.8em;
  height:85%;
  background-color: rgba(115, 54, 177, 0.753);
  border: black solid 1px;  
  cursor: pointer;
  border-left: transparent;
}
.token:hover{
  background-color: rgb(111, 66, 156);

}
#arrow{
  margin: 0;
  margin-left: 5px;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);  
}
.appear-enter-active {
  transition: all 0.8s ease-in;
}
.appear-leave-active {
  transition: all 0.5s ease-out;
}
.appear-enter, .appear-leave-to
/* .app-enter-active-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
  opacity:0.8;
}
</style>