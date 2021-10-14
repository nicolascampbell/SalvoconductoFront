<template>
  <div class="photoContainer">
    <div
      @click="
        $router.push({
          name: 'Film',
          params: { filmid: filmCard._id },
        })
      "
      class="overlay"
    >
      <h2 class="item" v-text="`Film ${filmCard._id}`"></h2>
    </div>
    <b-img-lazy v-bind="mainProps" id="image" :src="getCoverSrc()">
    </b-img-lazy>
  </div>
</template>
<script lang="ts">
import Vue from "vue"
import{FilmCard} from '@/customTypes'

export default Vue.extend({
  name:'filmCard',
  props: {
    filmCard: {
      type: Object as () => FilmCard,
    },
  },
  data() {
    return {
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: "#bbb",
        width: "100%",
        height: "100%",
      },
    }
  },
  methods: {
    getCoverSrc() {
      return require(`../assets/${this.filmCard._id}/${this.filmCard.photoCover}.jpg`);
    },
  },
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Varela&display=swap");
.overlay {
  position: absolute;
  display: flex;
  transition: all 0.3s ease;
  opacity: 0;
  width: 100%;
  height: 100%;
  background-color: #0000009a;
  text-align: center;
}
.overlay h2 {
  margin: auto;
  width: 50%;
  padding: 10px;
  color: rgb(255, 255, 255);
  transition: all 2s cubic-bezier(0.23, 1, 0.32, 1);

  opacity: 0;
  font-family: "Varela", sans-serif;
}
.photoContainer {
  padding: 0px;
}
.photoContainer:hover .overlay {
  opacity: 1;
  cursor: pointer;
}
.photoContainer:hover h2 {
  opacity: 1;
}
</style>
