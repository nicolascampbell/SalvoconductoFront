<template>
  <div
    id="btnNextFilm"
    @click="disable?'':nextFilm()"
    :class="{ btnNextFilmEnabled: !disable, btnNextFilmDisabled: disable }"
  >
    <icon-base>
      <icon-arrow-right/>
    </icon-base>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

import IconBase from './icon-base.vue'
import IconArrowRight from './Icons/icon-arrow-right.vue'

export default  Vue.extend({
  name: 'buttonNextFilm',
  components: {
    IconBase,
    IconArrowRight
  },
  props:{
    disable:Boolean,
    nextId:String
  },
  methods:{
    nextFilm:function(){
      this.$router.push({
          name: 'Film',
          params: { filmid: this.nextId },
      });
    }
  }
});
</script>

<style scoped>
  #btnNextFilm {
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 5px 5px 0px 0px;
    border: black solid 1px;
    letter-spacing: 2px;
    padding: 3px;
    margin-bottom: 100px;
  }
  .btnNextFilmEnabled {
    background-color: var(--yellow);
    cursor: pointer;
  }
  .btnNextFilmEnabled:hover {
    background-color: var(--yellowHover);
  }
  .btnNextFilmDisabled{
    background-color:rgb(173, 173, 173);
  }

</style>