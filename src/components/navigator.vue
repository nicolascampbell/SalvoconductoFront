<template>
  <div id="navigator">
    <b-container class="bv-example-row">
      <b-row align-h="center" >
        <b-col cols="6">
          <img
            @click="handleClick('up')"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            class="active"
            :src="require('../assets/arrow_up.png')"
          />
        </b-col>
      </b-row>
      <b-row align-h="between">
          <b-col style="padding:0px 10px 0px 11px;" cols="2"
          ><img
            @click="handleClick('left')"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            class="active"
            :src="require('../assets/arrow_left.png')"
        /></b-col>
        <b-col style="padding-left:11px;" cols="2">
          <img
            @click="handleClick('right')"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            class="active"
            :src="require('../assets/arrow_right.png')"
          />
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="6"
          ><img
            @click="handleClick('down')"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            class="active"
            :src="require('../assets/arrow_down.png')"
        /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "navigator",
  data() {
    return {
      hover: false,
    }
  },
  methods: {
    handleClick(action: String) {
      this.$router.push({
        name: "",
        params: {},
      })
    },
  },
})
</script>
<style>

.active{
    transform:scale(0.9);
    transition: transform .2s;
  }
  .active:hover{
    transform: scale(1);
  }
  .active:focus{
    filter: blur(5px) brightness(90%);
  }
</style>