<template>
  <div
    v-b-tooltip.hover title="Go to random film!"
    id="button-go-to-random-film"
    @click="goToRandomFilm()"
    class="yellow-button"
  >
    <icon-shuffle/>
  </div>
</template>

<script>
import IconShuffle from './Icons/icon-shuffle.vue'
export default {
  name: 'buttonShuffleFilm',
  components: {
    IconShuffle
  },
  methods:{
    goToRandomFilm:function(){
      this.$emit("goToRandomFilm");
    }
  }
}
</script>

<style scoped>
  @import "../styles/yellow-button.css";
  
  #button-go-to-random-film {
    border-radius: 5px 5px 0px 0px;
    letter-spacing: 2px;
  }
 

</style>