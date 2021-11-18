<template>
  <div
    id="button-prev-film"
    v-b-tooltip.hover
    :title="disable?'There are no older films!':'Go to prev film.' "
    :class="{ 'yellow-button': !disable, 'button-prev-film-disabled': disable }"
    @click="disable?'':prevFilm()"
  >
    <icon-base>
      <icon-arrow-left />
    </icon-base>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import IconBase from './icon-base.vue'
import IconArrowLeft from './Icons/icon-arrow-left.vue'
export default Vue.extend({
  name: 'ButtonPrevFilm',
  components: {
    IconBase,
    IconArrowLeft
  },
  props: {
    disable: { type: Boolean, default: true },
    prevId: { type: String, default: '' }
  },
  methods: {
    // eslint-disable-next-line no-use-before-define
    prevFilm: function () {
      this.$router.push({
        name: 'Film',
        params: { filmid: this.prevId }
      })
    }
  }
})
</script>

<style scoped>
  @import "../styles/yellow-button.css";

  #button-prev-film {
    border-radius: 5px 5px 0px 0px;
    letter-spacing: 2px;
    margin-bottom: 100px;
  }
  .button-prev-film-disabled{
    border: black solid 1px;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    padding: 3px;
    background-color:rgb(173, 173, 173);
  }

</style>
