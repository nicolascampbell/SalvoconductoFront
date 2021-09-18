<template>
  <b-container id="films_container" fluid>
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
        id="pill"
        offset="4"
        cols="4"
        offset-sm="5"
        sm="2"
        :class="{ pillOn: asc, pillOff: !asc }"
        @click="changeOrder"
      >
        Date
        <icon-base   v-if="asc"><icon-sort-down/></icon-base>
        <icon-base   v-else><icon-sort-up/></icon-base>
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
import filmCard from "../components/film-card.vue"
import btnScrollTop from '../components/button-scroll-top.vue'

import IconBase from '../components/icon-base.vue'
import IconSortDown from '../components/Icons/icon-sort-down.vue'
import IconSortUp from '../components/Icons/icon-sort-up.vue'

export default Vue.extend({
  name: "FilmList",
  components: {
    definition,
    filmCard,
    btnScrollTop,
    IconBase,
    IconSortDown,
    IconSortUp
  },
  data() {
    return {
      films: [],
      asc: true,
      loadedSources:false
    }
  },
  methods: {
    changeOrder: function () {
      //maybe not super efficient but for now it works with the amount of films.
      //maybe change  in the future in the way you traverse the array?
      this.films.reverse()
      this.asc = !this.asc
    },
  },
  async beforeMount() {
    try {
      const response = await axios.get(`http://salvoconducto.net:3000/films`)
      if (response.data == null) {
        this.$router.push({ name: "NotFound" })
      } else {
        this.films = response.data;
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
  margin-bottom: 5%;
}
#films_container > * {
  margin-bottom: 5%;
}
#pill {
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 5px 5px 0px 0px;
  border: black solid 1px;
  letter-spacing: 2px;
  padding: 3px;
}
#pill:hover {
  cursor: pointer;
}
.pillOn {
  background-color: var(--yellow);
}
.pillOff {
  background-color: var(--purple);
}
.pillOn:hover {
  background-color: var(--yellowHover);
}
.pillOff:hover {
  background-color: var(--purpleHover);
}
</style>
