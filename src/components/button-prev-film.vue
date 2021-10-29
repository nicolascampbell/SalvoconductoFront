<template>
  <div
    id="btnPrevFilm"
    @click="disable?'':prevFilm()"
    :class="{ btnPrevFilmEnabled: !disable, btnPrevFilmDisabled: disable }"
  >
    <icon-base>
      <icon-arrow-left/>
    </icon-base>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

import IconBase from './icon-base.vue'
import IconArrowLeft from './Icons/icon-arrow-left.vue'
export default  Vue.extend({
  name: 'buttonPrevFilm',
  components: {
    IconBase,
    IconArrowLeft
  },
  props:{
    disable:Boolean,
    prevId:String
  },
  methods:{
    prevFilm:function(){
      this.$router.push({
          name: 'Film',
          params: { filmid: this.prevId },
      });
    }
  }
});
</script>

<style scoped>
  #btnPrevFilm {
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 5px 5px 0px 0px;
    border: black solid 1px;
    letter-spacing: 2px;
    padding: 3px;
    margin-bottom: 100px;
  }
  .btnPrevFilmEnabled {
    background-color: var(--yellow);
    cursor: pointer;
  }
  .btnPrevFilmEnabled:hover {
    background-color: var(--yellowHover);
  }
  .btnPrevFilmDisabled{
    background-color:rgb(173, 173, 173);
  }

</style>