<template>
  <div @click="scrollToTop()" id="toTop">
    <icon-base><icon-arrow-90deg-up/></icon-base>
  </div>
</template>

<script>
import IconBase from './icon-base.vue'
import IconArrow90degUp from './Icons/icon-arrow-90deg-up.vue'
export default {
  name:'buttonScrollTop',
  components:{
    IconBase,
    IconArrow90degUp
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