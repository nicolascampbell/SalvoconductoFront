<template >
  <div
    @click="openCLick"
    :class="{ activate
: clicked, deactivate: unclick }"
    id="container"
  >
    <div class="horizontal top"></div>
    <div class="vertical"></div>
    <div class="vertical"></div>
    <div class="vertical"></div>
    <div class="vertical"></div>
    <div class="vertical"></div>
    <div class="vertical"></div>
    <div class="vertical vbar3"></div>
    <div class="horizontal bottom"></div>
  </div>
</template>
<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  data() {
    return {
      clicked: false,
      unclick: true,
    }
  },
  methods: {
    openCLick: function () {
      this.clicked = true
      this.unclick = false
      this.$emit("open");
    },
    closeClick: function (event) {
      this.clicked = false
      this.unclick = true
    },
  },
  created() {
    window.addEventListener("keyup", this.closeClick)
  },
  destroyed() {
    window.removeEventListener("keyup", this.closeClick)
  },
})
</script>

<style scoped>
#container {
  cursor: pointer;
  position: fixed;
  top: 0;
  right: 0;
  margin: 100px;
  display: flexbox;
  padding: 5px;
  background: linear-gradient(45deg, #fdd10d, #e6dcf3);
 
}
.horizontal {
  width: 31px;
  height: 4px;
  background-color: rebeccapurple;
  margin-bottom: -9px;
}

.top {
  border-radius: 2px 2px 0px 0px;
  margin-top: -8px;
}
.bottom {
  border-radius: 0px 0px 2px 2px;
}
.vertical {
  height: 15px;
  border-left: thin solid rgb(52, 52, 53);
  margin-right: 4px;
  display: inline-flex;
  margin-bottom: -7px;
  margin-top: -5px;
}
.vbar3 {
  margin-right: 0px;
}

@keyframes getSmall {
  0% {
    height: 15px;
    transform: translateY(0px);
  }
  100% {
    height: 0px;
    transform: translateY(-7px);
  }
}
@keyframes getBig {
  0% {
    height: 0px;
    transform: translateY(-7px);
  }
  100% {
    height: 15px;
    transform: translateY(0px);
  }
}
@keyframes getToCenterT {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(7px);
  }
}
@keyframes getToCenterB {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-7px);
  }
}
@keyframes coloredBack {
  100% {
    background: linear-gradient(270deg, #ffffff, #ffffff);
  }
}
/**Makes vertical bars change size in diff. states */
#container.activate > .vertical {
  animation: getBig ease 0.1s reverse;
  animation-fill-mode:forwards;
}
#container.deactivate > .vertical {
  animation: getSmall ease 0.8s reverse;
}
/**Makes horizontal bars move from bottom to center and vice.*/
#container.activate > .horizontal.bottom {
  animation: getToCenterB ease 0.2s;
  animation-fill-mode: forwards;
}
#container.deactivate > .horizontal.bottom {
  animation: getToCenterB ease 0.4s reverse;
}
/**Makes horizontal bars move from Top to center and vice. */
#container.activate > .horizontal.top {
  animation: getToCenterT ease 0.2s;
  animation-fill-mode: forwards;
}
#container.deactivate > .horizontal.top {
  animation: getToCenterT ease 0.4s reverse;
}
/**Changes the color of background */
#container.activate {
  animation: coloredBack ease 0.3s;
  animation-fill-mode: forwards;
}
#container.deactivate {
  animation: coloredBack ease 0.6s reverse;
}

#container.deactivate:hover > .vertical:nth-child(odd){
  animation: getBig ease
 1s infinite alternate-reverse;
}
#container.deactivate:hover > .vertical:nth-child(even){
  animation: getBig ease
 1.5s infinite alternate-reverse;
}


</style>