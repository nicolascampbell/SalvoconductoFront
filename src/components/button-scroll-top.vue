<template>
  <span @click="scrollToTop()" id="toTop"><b-icon-arrow90deg-up font-scale="1" /></span>
</template>

<script>
import {  BIconArrow90degUp } from "bootstrap-vue"

export default {
  name:'buttonScrollTop',
  components:{
    BIconArrow90degUp
  },
  methods:{
    scrollToTop() {
      window.scroll({
        top:0,
        behavior: 'smooth'
      });

    }
  }
}
</script>

<style scoped>
#toTop{
  display:block;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  border-radius:  0px 0px 5px 5px;
  border: black solid 1px;
  letter-spacing: 2px;
  padding: 3px;
  background-color: var(--purple);
  text-align: center
}
#toTop:hover {
  background-color: var(--purpleHover);
  cursor: pointer;
}
#toTop:active {
  background-color: var(--yellow);
}



</style>