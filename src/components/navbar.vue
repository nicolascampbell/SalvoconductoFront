<template >
  <div id="navtoken">
    <transition name="appear">
      <div id="navbar" v-if="open">
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
      <div class="back" v-if="this.$route.name!='Home'&&!open" @click="$router.go(-1)">
        <b-icon-arrow-return-left id="arrow"></b-icon-arrow-return-left>
      </div>
      <div class="token" v-if="!open" @click="open=!open">
        <b-icon-arrow-right id="arrow"></b-icon-arrow-right>
      </div>
       
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
    }
  },
  methods: {},
})
</script>
<style scoped>

#menu {
  text-align: center;
  background-color: rgb(255, 255, 255);
  border: black solid 1px;
  border-right: 0.5px solid;
  overflow-x: hidden;
  font-size:1.2em;
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
    min-width: 3%;
    height: 40%;
    border: black solid 1px;  
    cursor: pointer;
}
.mcap:hover{
  background-color: rgb(142, 97, 187);
}
#navbar{
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.back{
  width:8%;
  height:100%;
  border: black solid 1px;  
  cursor: pointer;
  border-left: transparent;
  background-color: #fae844f8;
}
.back:hover{
    background-color: rgba(235, 223, 123, 0.767);
}
.token{
  width:7%;
  height:90%;
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
  transition: all .3s cubic-bezier(.68,-0.55,.27,1.55);
}
.appear-leave-active {
  transition: all .3s cubic-bezier(.68,-0.55,.27,1.55);
}
.appear-enter, .appear-leave-to
/* .app-enter-active-leave-active below version 2.1.8 */ {
  transform: translateX(-100px);
  opacity: 0;
}
</style>