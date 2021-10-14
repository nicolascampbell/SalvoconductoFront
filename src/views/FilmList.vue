<template>
  <b-container id="films_container" fluid >
    <b-row class="vh-100" id="firstRow" align-v="center" no-gutters>
      <b-col offset="1" offset-md="3" offset-lg="7">
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
    <b-row no-gutters class="row" align-v="center" style="text-align: center">
      <b-col 
        offset="4"
        cols="4"
        offset-sm="5"
        sm="2">
        <btn-sort label="Date" :asc="asc" @changeOrder="changeOrder()"/>
      </b-col>
    </b-row>
    <b-row class="row" align-h="around" no-gutters v-if="loadedSources">
      <b-col
        class="cols"
        cols="11"
        md="5"
        v-for="film in films"
        :key="film._id"
      >
        <film-card :filmCard="film" />
      </b-col>
    </b-row>
    <b-row  class="row" align-v="center" style="text-align: center">
      <b-col
        offset="4"
        cols="4"
        offset-sm="5"
        sm="2"
      >
      <btn-scroll-top/>
      </b-col>
    </b-row>
    
  </b-container>
</template>
<script lang="ts">
import Vue from "vue"
import axios from "axios"

import definition from "../components/definition.vue"
import filmCard from "../components/card-film.vue"
import btnScrollTop from '../components/button-scroll-top.vue'
import btnSort from '../components/button-sort.vue'

export default Vue.extend({
  name: "FilmList",
  components: {
    definition,
    filmCard,
    btnScrollTop,
    btnSort,
  },
  data() {
    return {
      films: [],
      asc: false,
      loadedSources:false
    }
  },
  methods: {
    changeOrder: function () {
      //maybe not super efficient but for now it works with the amount of films.
      //maybe change  in the future in the way you traverse the array?
      this.films.reverse();
      this.asc = !this.asc;
    },
  },
  async beforeMount() {
    try {
      const response = await axios.get(`http://salvoconducto.net:3000/films`)
      if (response.data == null) {
        this.$router.push({ name: "NotFound" })
      } else {
        this.films = response.data.reverse();
        this.loadedSources=true;  
      }
    } catch (e) {
      console.log(e)
      this.$router.push({ name: "NotFound" })
    }
  },
})
</script>
<style scoped>
#films_container {
  background-color: rgba(226, 226, 226, 0.74);
  overflow-y: scroll;
}
.row:last-of-type {
  margin-bottom: 5%;
}
.cols {
  margin-bottom: 7%;
}

#films_container > * {
  margin-bottom: 5%;
}

</style>
