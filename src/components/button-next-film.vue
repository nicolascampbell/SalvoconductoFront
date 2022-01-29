<template>
  <div
    id="button-next-film"
    :class="{ 'yellow-button': !disable, 'button-next-film-disabled': disable }"
    @click="disable?'':nextFilm()"
  >
    Next Film
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ButtonNextFilm',
  props: {
    disable: { type: Boolean, default: false },
    nextId: { type: String, default: '2' }
  },
  methods: {
    nextFilm: function () :void {
      this.$router.push({
        name: 'Film',
        params: { filmid: this.nextId }
      })
    }
  }
})
</script>

<style scoped>
  @import "../styles/yellow-button.css";

  #button-next-film {
    border-radius: 5px 5px 0px 0px;
    letter-spacing: 2px;
    margin-bottom: 100px;
    font-size: 0.8em;
  }
  .button-next-film-disabled{
    border: black solid 1px;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    padding: 3px;
    background-color:rgb(173, 173, 173);
}
</style>
