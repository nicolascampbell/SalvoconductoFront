<template>
  <div id="films_container" class="container">
    <b-row class="vh-100 text-center" align-v="center">
      <b-col offset-lg="1">
        <navigate-items @changeIndex="changeIndex" :maxItems="maxFilms">
          <template v-slot:current>
            <film-card key="current" :filmInfo="films[index]"
          /></template>
          <template v-slot:next>
            <film-card
              key="next"
              :filmInfo="films[index]"
          /></template>
        </navigate-items>
      </b-col>
    </b-row>
  </div>
</template>
<script lang="ts">
import Vue from "vue"
import filmCard from "../components/film_card.vue"
import films from "../films.json"
import navigateItems from "../components/navigateItems.vue"
export default Vue.extend({
  components: {
    filmCard,
    navigateItems,
  },
  data() {
    return {
      //index is the id of current film shown
      index: 0,
      //slide shows if we go down or up
      maxFilms: films.films.length - 1,
      films: films.films,
    }
  },
  methods: {
    changeIndex(i: number) {
      this.index = i
    },
  },
})
</script>
<style scoped>
</style>
