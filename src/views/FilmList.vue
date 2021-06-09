<template>
  <b-container id="films_container" >
    <b-row class="vh-100 vw-100" id="firstRow" align-v="center" >
      <b-col offset-lg="9">
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
    <b-row  class="films" align-v="center" v-for=" film in films" :key="film.id">
      <b-col offset="2" cols="8">
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
  methods: {},
})
</script>
<style scoped>
#films_container{
  text-align: left;
  color: honeydew !important;
  margin:0px;
  padding:0px;
}

#firstRow{
  background-image: url("../assets/3/2.jpg");
  background-size: cover;
  box-shadow: 0 0 10px black;
  margin:0px;
  }
.films{
  margin-top:100px;
}
</style>
