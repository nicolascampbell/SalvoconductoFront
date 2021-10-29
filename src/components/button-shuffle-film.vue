<template>
  <div
    id="btnGoToRandomFilm"
    @click="goToRandomFilm()"
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
  #btnGoToRandomFilm {
    color: black;
    background-color: var(--yellow);
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 5px 5px 0px 0px;
    border: black solid 1px;
    letter-spacing: 2px;
    padding: 3px;
  }
  #btnGoToRandomFilm:hover {
    cursor: pointer;
    background-color: var(--yellowHover);
  }
 

</style>