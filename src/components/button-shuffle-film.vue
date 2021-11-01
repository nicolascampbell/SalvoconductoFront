<template>
  <div
    id="button-go-to-random-film"
    v-b-tooltip.hover
    title="Go to random film!"
    class="yellow-button"
    @click="goToRandomFilm()"
  >
    <icon-shuffle />
  </div>
</template>

<script lang='ts'>
import IconShuffle from './Icons/icon-shuffle.vue'
export default {
  name: 'ButtonShuffleFilm',
  components: {
    IconShuffle
  },
  methods: {
    goToRandomFilm: function () :void {
      this.$emit('goToRandomFilm')
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
