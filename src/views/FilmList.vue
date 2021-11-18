<template>
  <b-container
    id="films-container"
    fluid
  >
    <b-row
      id="first-row"
      no-gutters
    >
      <b-col
        offset="1"
        offset-md="3"
        offset-lg="7"
        align-self="center"
      >
        <definition
          :title="'Films'"
          :subtitle="'[Films]'"
          :type="'Section'"
          :definitions="[
            'Bundle of memories.',
            'Chronologically ordered films.',
          ]"
          :with-slot="false"
        />
      </b-col>
    </b-row>
    <b-row
      no-gutters
      class="row"
      style="text-align: center"
    >
      <b-col
        offset="4"
        cols="4"
        offset-sm="5"
        sm="2"
      >
        <btn-sort
          label="Date"
          :asc="asc"
          @changeOrder="changeOrder()"
        />
      </b-col>
      <b-col
        cols="2"
        offset="1"
      >
        <button-shuffle-film @goToRandomFilm="goToRandomFilm()" />
      </b-col>
    </b-row>
    <b-row
      v-if="loadedSources"
      class="around row"
      no-gutters
    >
      <b-col
        v-for="film in films"
        :key="film._id"
        class="cols"
        cols="11"
        md="5"
      >
        <film-card
          v-if="film"
          :film-card="film"
        />
      </b-col>
    </b-row>
    <b-row
      class="row"
      align-v="center"
      style="text-align: center"
    >
      <b-col
        offset="4"
        cols="4"
        offset-sm="5"
        sm="2"
      >
        <btn-scroll-top />
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

import definition from '../components/definition.vue'
import filmCard from '../components/card-film.vue'
import btnScrollTop from '../components/button-scroll-top.vue'
import btnSort from '../components/button-sort.vue'
import ButtonShuffleFilm from '@/components/button-shuffle-film.vue'

export default Vue.extend({
  name: 'FilmList',
  components: {
    definition,
    filmCard,
    btnScrollTop,
    btnSort,
    ButtonShuffleFilm
  },
  data () {
    return {
      films: [],
      asc: false,
      loadedSources: false
    }
  },
  async beforeMount () {
    try {
      const response = await axios.get('https://salvoconducto.net/api/films')
      if (response.data === null) {
        this.$router.push({ name: 'NotFound' })
      } else {
        this.films = response.data.reverse()
        this.loadedSources = true
      }
    } catch (e) {
      console.log(e)
      this.$router.push({ name: 'NotFound' })
    }
  },
  methods: {
    changeOrder: function () :void {
      // maybe not super efficient but for now it works with the amount of films.
      // maybe change  in the future in the way you traverse the array?
      this.films.reverse()
      this.asc = !this.asc
    },
    isMobile: function () :boolean {
      return window.matchMedia('(max-width: 767px)').matches
    },
    goToRandomFilm: function () :void{
      if (this.films.length !== 0) {
        const film = this.films[Math.floor(Math.random() * this.films.length)]
        this.$router.push({
          name: 'Film',
          params: { filmid: film['_id'] }
        })
      }
    }
  }
})
</script>
<style scoped>
#first-row {
  height: 80vh;
}
@media screen and (min-width: 767px) {
  #films-container {
    padding-right: 4em;
    padding-left: 4em;
  }
}
#films-container {
  background-color: rgba(226, 226, 226, 0.74);
  overflow-y: scroll;
}
.row:last-of-type {
  margin-bottom: 5%;
}
.cols {
  margin-bottom: 7%;
}

#films-container > * {
  margin-bottom: 5%;
}
.around {
  justify-content: space-around;
}
</style>
