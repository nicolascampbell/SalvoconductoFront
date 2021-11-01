<template>
  <div
    id="button-scroll-down"
    :class="visitedClass"
    @click="scrollDown()"
  >
    <icon-base
      width="40"
      height="40"
    >
      <icon-arrow-down />
    </icon-base>
  </div>
</template>

<script>
import IconBase from './icon-base.vue'
import IconArrowDown from './Icons/icon-arrow-down.vue'
export default {
  name: 'ButtonGoDown',
  components: {
    IconBase,
    IconArrowDown
  },
  data () {
    return {
      visitedClass: ''
    }
  },
  methods: {
    scrollDown: function () {
      window.scroll({
        top: 500,
        behavior: 'smooth'
      })
      this.visitedClass = 'visited'
    }
  }
}
</script>

<style scoped>
  #button-scroll-down {
    color: rgb(71, 70, 70);
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 5px 5px 0px 0px;
    padding: 3px;
    cursor: pointer;
    animation: palpitate 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite alternate-reverse;
  }
  .visited {
    color: rgb(211, 73, 73) !important;
    animation: palpitate 0.2s cubic-bezier(0.075, 0.82, 0.165, 1) infinite alternate-reverse !important;
  }
  @keyframes palpitate {
    0%{
      transform: scale(0.95,0.95);
    }
    100%{
      transform: scale(1.05,1.05);
    }
  }

</style>
