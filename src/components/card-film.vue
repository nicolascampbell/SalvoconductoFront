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
      <h3 v-text="`Film ${filmCard._id}`"></h3>
    </div>
    <b-img-lazy v-bind="mainProps" class="photo" :src="getCoverSrc()"/>
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
        fluid: true,
        blank: true,
        blankColor: "#bbb",
        height: '100%',
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
  width: 100%;
  height: 100%;
  text-align: left;
  cursor: pointer;
}
.overlay h3 {
  position:absolute;
  top:0;
  padding: 10px;
  color: rgb(255, 255, 255);
  transition: all 2s cubic-bezier(0.23, 1, 0.32, 1);
  background-color:var(--purpleHover);
  font-family: "Varela", sans-serif;
  box-shadow: 5px 5px var(--yellowHover);
}

</style>
