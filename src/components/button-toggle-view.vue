<template>
  <div
    v-b-tooltip.hover title="Change how you look through images!"
    id="button-toggle-view"
    @click="changeView()"
    v-if="label"
    :class="{ 'yellow-button': view, 'purple-button': !view }"
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
  @import "../styles/yellow-button.css";
  @import "../styles/purple-button.css";  
  
  #button-toggle-view {
    border-radius: 5px 5px 0px 0px;
    letter-spacing: 2px;
    margin-bottom: 100px;
  }

</style>