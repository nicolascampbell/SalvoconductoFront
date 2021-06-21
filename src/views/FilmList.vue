<template>
  <b-container id="films_container" fluid >
    <b-row class="vh-100"  id="firstRow" align-v="center" no-gutters>
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
    <b-row no-gutters style=" text-align: right;">
      <b-col offset="9" cols="1">
          <b-link style="color: rgb(61, 61, 61)" @click="changeOrder">Date</b-link>
      </b-col>
    </b-row>
    <b-row v-for=" film in films" :key="film.id" no-gutters>
      <b-col offset="1" cols="10">
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
export default Vue.extend({
  components: {
    definition,
    filmCard,
  },
  data() {
    return {
      films: films.films,
    }
  },
  methods: {
    changeOrder:function(){
      //maybe not super efficient but for now it works with the amount of films.
      //maybe change  in the future in the way you traverse the array?
      this.films.reverse();
    }
  },
})
</script>
<style scoped>
#films_container{
  padding:0px;
}

#firstRow{
  background-image: url("../assets/3/2.jpg");
  background-position: bottom;
  }
#films_container>*{
  margin-bottom: 5%;
}

</style>
