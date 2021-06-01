<template>
  <transition :name="slide" mode="out-in">
    <slot name="current" v-if="change"></slot>
    <slot name="next" v-else></slot>
  </transition>
</template>
<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  created() {
    window.addEventListener("wheel", this.scrollToElemWheel)
    window.addEventListener("keyup", this.scrollToElemKey)
  },
  destroyed() {
    window.removeEventListener("wheel", this.scrollToElemWheel)
    window.addEventListener("keyup", this.scrollToElemKey)
  },
  data() {
    return {
      //index is the id of current film shown
      index: 0,
      //slide shows if we go down or up
      slide: "slide-down",
      change: true,
    }
  },
  props: {
    //used to calculate new index
    maxItems: Number,
  },
  methods: {
    //checks whether the wheel goes up or down and fires event to update pics
    scrollToElemWheel: function (event) {
      let prevIndex = this.index;
      if (event.deltaY < 0) {
        //go up
        this.index = Math.max(0, this.index - 1);
        this.slide = "slide-up";
      } else {
        //go down
        this.index = Math.min(this.maxItems, this.index + 1);
        this.slide = "slide-down";
      }
      if (prevIndex != this.index) {
        this.change = !this.change;
        this.$emit("changeIndex", this.index);
      }
    },
    //same as above but with keyboard keys
    scrollToElemKey: function (event) {
      let prevIndex = this.index
      if (event.key === "ArrowUp") {
        //go up
        this.index = Math.max(0, this.index - 1)
        this.slide = "slide-up"
      } else if (event.key === "ArrowDown") {
        //go down
        this.index = Math.min(this.maxItems, this.index + 1)
        this.slide = "slide-down"
      }
      if (prevIndex != this.index) {
        this.change = !this.change;
        this.$emit('changeIndex',this.index);

      }
    },
  },

})
</script>
<style scoped>
.slide-down-enter-active {
  animation: slideBottom 0.5s;
}

.slide-down-leave-active {
  animation: slideTop 0.5s reverse;
}
.slide-up-enter-active {
  animation: slideTop 0.5s;
}

.slide-up-leave-active {
  animation: slideBottom 0.5s reverse;
}

@keyframes slideBottom {
  0% {
    transform: scale(0.6) translateY(120%);

    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(0%);
    opacity: 1;
  }
}

@keyframes slideTop {
  0% {
    transform: scale(0.6) translateY(-120%);
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(0%);
    opacity: 1;
  }
}
</style>