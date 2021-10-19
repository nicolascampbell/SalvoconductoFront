<template>
  <div
    id="btnTView"
    @click="changeView()"
    v-if="label"
    :class="{ btnTViewOn: view, btnTViewOff: !view }"
  >
    {{label}}
    <icon-base v-if="!view">
      <icon-presentation/>
    </icon-base>
    <icon-base v-else>
      <icon-grid/>
    </icon-base>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

import IconBase from '../components/icon-base.vue'
import IconPresentation from '../components/Icons/icon-presentation.vue'
import IconGrid from '../components/Icons/icon-grid.vue'
export default  Vue.extend({
  name: 'buttonToggleView',
  components: {
    IconBase,
    IconPresentation,
    IconGrid
  },
  data(){
    return{
      view:false
    }
  },
  props:{
    label:String
  },
  methods:{
    changeView:function(){
      this.view=!this.view;
      this.$emit("changeView");
      
    }
  }
});
</script>

<style scoped>
  #btnTView {
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 5px 5px 0px 0px;
    border: black solid 1px;
    letter-spacing: 2px;
    padding: 3px;
    margin-bottom: 100px;
  }
  #btnTView:hover {
    cursor: pointer;
  }
  .btnTViewOn {
    background-color: var(--yellow);
  }
  .btnTViewOff {
    background-color: var(--purple);
  }
  .btnTViewOn:hover {
    background-color: var(--yellowHover);
  }
  .btnTViewOff:hover {
    background-color: var(--purpleHover);
  }

</style>