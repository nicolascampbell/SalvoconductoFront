<template>
  <div id="films_container" class="container">
    <b-row class="vh-100 text-center" align-v="center">
      <b-col offset-lg="1">
        <transition :name="slide" mode="out-in">
          <film-card key="current" v-if="change" :filmInfo="films[index]" />
          <film-card
            key="next"
            v-if="!change"
            :filmInfo="films[Math.min(this.maxFilms, this.index + 1)]"
          />
        </transition>
      </b-col>
    </b-row>
  </div>
</template>
<script lang="ts">
import Vue from "vue"
import filmCard from "../film_card.vue"
import films from "../../films.json"
export default Vue.extend({
  components: {
    filmCard,
  },
  data() {
    return {
      //index is the id of current film shown
      index: 0,
      //slide shows if we go down or up
      slide: "slide-down",
      maxFilms: films.films.length - 1,
      change: true,
      films: films.films,
    }
  },
  methods: {
    scrollToElemWheel: function (event) {
      let prevIndex = this.index
      if (event.deltaY < 0) {
        //go up
        this.index = Math.max(0, this.index - 1)
        this.slide = "slide-up"
      } else {
        //go down
        this.index = Math.min(this.maxFilms, this.index + 1)
        this.slide = "slide-down"
      }
      if (prevIndex != this.index) {
        this.change = !this.change
      }
    },
    scrollToElemKey: function (event) {
      let prevIndex = this.index
      if (event.key === "ArrowUp" ) {
        //go up
        this.index = Math.max(0, this.index - 1)
        this.slide = "slide-up"
      } else if (event.key === "ArrowDown"){
        //go down
        this.index = Math.min(this.maxFilms, this.index + 1)
        this.slide = "slide-down"
      }
      if (prevIndex != this.index) {
        this.change = !this.change
      }
    },
  },
  created() {
    window.addEventListener("wheel", this.scrollToElemWheel);
    window.addEventListener("keyup", this.scrollToElemKey);
  },
  destroyed() {
    window.removeEventListener("wheel", this.scrollToElemWheel);
    window.addEventListener("keyup", this.scrollToElemKey);

  },
})
</script>
<style scoped>
.slide-down-enter-active {
  animation: slideBottom 0.5s;
}

.slide-down-leave-active {
  animation: slideTop 0.5s reverse;
}
.slide-up-enter-active {
  animation: slideTop 0.5s ;
}

.slide-up-leave-active {
  animation: slideBottom 0.5s reverse;
}

@keyframes slideBottom {
  0% {
    transform: scale(0.6) translateY(120%);
    
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(0%);
    opacity: 1;
  }
}

@keyframes slideTop {
  0% {
    transform: scale(0.6) translateY(-120%);
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(0%);
    opacity: 1;
  }
}
</style>
