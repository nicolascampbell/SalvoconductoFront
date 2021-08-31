<template>
  <b-container id="films_container" fluid >
    <b-row class="vh-100" id="firstRow" align-v="center" no-gutters>
      <b-col offset="1" offset-lg="7">
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
    <b-row class="row" align-h="around" no-gutters >
      <b-col class="cols" 
              md="5"
              sm="9"
              cols="11"
              v-for=" film in films" :key="film._id"  >
        <film-card :filmInfo="film"/>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from "vue"
import definition from "../components/definition.vue"
import filmCard from "../components/film_card.vue"
import axios from 'axios';
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
      films: [],
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
  async created() {
    try {
      const response = await axios.get(`https://salvoconductoback.herokuapp.com/films`);
      console.log(response.data);
      this.films = response.data;
    } catch (e) {
      console.log(e);
    }
  }
})
</script>
<style scoped>
#films_container{
  background-color: rgba(226, 226, 226, 0.74);
}
.row:last-of-type{
  margin-bottom: 0!important;
}
.cols{
  margin-bottom: 5%;
}
#films_container>*{
  margin-bottom: 5%;
}
#pil{
  background-color:rgba(165, 74, 226, 0.829);
  color:black; 
  border:black solid 1px;
}

#pil:hover{
  background-color:rgba(215, 155, 255, 0.836);
  cursor: pointer;
}

</style>
