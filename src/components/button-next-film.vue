<template>
  <div
    id="button-next-film"
    v-b-tooltip.hover
    :title="disable?'There are no newer films!':'Go to next film.'"
    :class="{ 'yellow-button': !disable, 'button-next-film-disabled': disable }"
    @click="disable?'':nextFilm()"
  >
    <icon-base>
      <icon-arrow-right />
    </icon-base>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import IconBase from './icon-base.vue'
import IconArrowRight from './Icons/icon-arrow-right.vue'

export default Vue.extend({
  name: 'ButtonNextFilm',
  components: {
    IconBase,
    IconArrowRight
  },
  props: {
    disable: Boolean,
    nextId: String
  },
  methods: {
    nextFilm: function () {
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
  }
  .button-next-film-disabled{
    border: black solid 1px;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    padding: 3px;
    background-color:rgb(173, 173, 173);
}
</style>
