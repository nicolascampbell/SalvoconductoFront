<template> 
  <div class="photo-container overlay" @click="
        $router.push({
          name: 'Film',
          params: { filmid: filmCard._id },
        })">
    <span v-text="`FILM  ${filmCard._id}`"></span>
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
  position: relative;
  transition: all 0.3s ease;
  width: 100%;
  height: 100%;
  text-align: center;
  cursor: pointer;
}

.overlay span {
  position:relative ;
  top:0;
  padding: 0.2em;
  font-size: 1em;
  color: rgb(0, 0, 0);
  transition: all 2s cubic-bezier(0.23, 1, 0.32, 1);
  background-color:var(--yellow);
  font-family: "Varela", sans-serif;
  writing-mode: vertical-rl;
  -webkit-text-orientation: upright;
  text-orientation: upright;
  border:black solid 1px;
  margin-left: 0.5em;
}
.photo{
  position:relative;
  box-shadow: -5px 1px var(--yellowHover);
}
.photo-container{
  display: flex;
  flex-direction: row-reverse;
  flex-wrap:nowrap;
  justify-content: flex-end;
}

</style>
