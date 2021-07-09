<template>
  <b-container id="films_container" fluid >
    <b-row class="vh-100" id="firstRow" align-v="center" no-gutters>
      <b-col offset="1" offset-lg="9">
        <definition
          :title="'Films'"
          :subtitle="'[Films]'"
          :type="'Section'"
          :definitions="[
            'Bundle of memories.',
            'Chronologically ordered films.',
          ]"
          :withSlot="false"
        >
        </definition>
      </b-col>
    </b-row>
    <b-row no-gutters class="row" style=" text-align: center;">
      <b-col id="pil" offset="10" cols="2" @click="changeOrder">
           Date 
          <b-icon-arrow-down font-scale="0.7" v-if="asc"></b-icon-arrow-down>
          <b-icon-arrow-up font-scale="0.7" v-else></b-icon-arrow-up>
      </b-col>
    </b-row>
    <b-row class="row" v-for=" film in films" :key="film.id" no-gutters>
      <b-col  offset-lg="3" lg="6"
              offset-sm="2" sm="8"
              offset="1" cols="10">
        <film-card :filmInfo="film"/>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from "vue"
import definition from "../components/definition.vue"
import filmCard from "../components/film_card.vue"
import films from "../films.json"
import { BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'
export default Vue.extend({
  components: {
    definition,
    filmCard,
    BIcon,
    BIconArrowUp,
    BIconArrowDown
  },
  data() {
    return {
      films: films.films,
      asc:true,
    }
  },
  methods: {
    changeOrder:function(){
      //maybe not super efficient but for now it works with the amount of films.
      //maybe change  in the future in the way you traverse the array?
      this.films.reverse();
      this.asc=!this.asc;
    }
  },
})
</script>
<style scoped>
#films_container{
  padding:0px;
  background-color:rgba(219, 213, 213, 0.699);
}
.row:last-of-type{
  margin-bottom: 0!important;
}
#films_container>*{
  margin-bottom: 5%;
}
#firstRow{
  background-color:white;
  border-bottom: black solid 1px;
}
#pil{
  background-color:rgba(165, 74, 226, 0.829);
  color:black; 
  border:black solid 1px;
  border-right: transparent;
  }

#pil:hover{
  background-color:rgba(215, 155, 255, 0.836);
  cursor: pointer;
}

</style>
