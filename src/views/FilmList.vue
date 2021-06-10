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
    <b-row  class="films" v-for=" film in films" :key="film.id">
      <b-col>
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
  padding:0px;
}

#firstRow{
  background-image: url("../assets/3/2.jpg");
  background-position: bottom;
  box-shadow: 0 0 10px black;
  }
.films{
  margin-top:100px;
}
</style>
