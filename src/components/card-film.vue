<template>
  <div
    class="photo-container overlay"
    @click="
      $router.push({
        name: 'Film',
        params: { filmid: filmCard._id },
      })"
  >
    <div class="film-info">
      &ensp;FILM  {{ filmCard._id }} &ensp;<span> {{ filmCard.year }} </span>
    </div>
    <b-img-lazy
      v-bind="mainProps"
      class="photo"
      :src="getCoverSrc()"
      :alt="`Cover photo for film ${filmCard._id}`"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { FilmCard } from '@/customTypes'

export default Vue.extend({
  name: 'FilmCard',
  props: {
    filmCard: {
      type: Object as () => FilmCard,
      default: {}
    }
  },
  data () {
    return {
      mainProps: {
        center: true,
        fluid: true,
        blank: true,
        blankColor: '#bbb'
      },
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    getCoverSrc () {
      return `${this.publicPath}films/${this.filmCard._id}/${this.filmCard.photoCover}.jpg`
    }
  }
})
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Varela&display=swap");
.overlay {
  cursor: pointer;
}
.film-info span {
  transition: all 2s ease-in-out;
  color:var(--purple)!important;
}
.photo{
  box-shadow: -5px 1px var(--yellowHover);
  width:750px;
  height:500px;
}

@media screen and (min-width: 1001px) {
  .film-info {
    position:relative ;
    top:0;
    padding: 0.2em;
    font-size: 1em;
    color: rgb(0, 0, 0);
    transition: all 2s ease-in-out;
    background-color:var(--yellow);
    font-family: "Varela", sans-serif;
    writing-mode: vertical-rl;
    -webkit-text-orientation: upright;
    text-orientation: upright;
    border:black solid 1px;
    margin-left: 0.5em;
    text-align: center;
  }
  .photo-container:hover .film-info {
    background-color:var(--purple);
  }
  .photo-container:hover .film-info span{
    color:var(--yellow)!important;
  }
  .photo-container{
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
}
@media screen and (max-width: 1000px) {
  .film-info {
    font-size: 1em;
    color: rgb(0, 0, 0);
    transition: all 2s ease-in-out;
    background-color:var(--yellow);
    font-family: "Varela", sans-serif;
    border:black solid 1px;
  }
  .photo-container{
    display: flex;
    flex-direction: column;
  }
}
</style>
