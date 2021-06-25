<template >
  <div
    @click="openCLick"
    @open="closeClick"
    v-b-toggle.sidebar-1
    ref="dropdownMenu"
    :class="{ activate
: clicked, deactivate: unclick||extended }"
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
      //to be able to click again and close it I had to use a counter to finish the trick
      counter:0,
    }
  },
  methods: {
    openCLick: function () {
      this.clicked = true;
      this.unclick = false;
      this.counter++;
      this.$emit("open");
    },
    closeClick: function (event) {
      //basically checks if the click event is the click to the buttom if it is then
      // pays no atention to it
      //from here https://forum.vuejs.org/t/closing-all-dropdown-on-document-click/11217/7
      if (!this.$el.contains(event.target)) {
          this.counter=0; 
          this.clicked = false;
          this.unclick = true;
          this.$emit("close");
      }else if(this.counter==2){
        this.counter=0;
        this.clicked = false;
        this.unclick = true;
        this.$emit("close");
      }

    },
    
  },
  props:{
    extended:Boolean
  },
  created() {
    window.addEventListener("click", this.closeClick)
  },
  destroyed() {
    window.removeEventListener("click", this.closeClick)
  },
})
</script>

<style scoped>
#container {
  cursor: pointer;
  position:absolute;
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
    
    transform: scale(1) translateY(0px);
  }
  100% {
    transform: scale(0) translateY(-7px);
  }
}
@keyframes getBig {
  0% {
    transform: scale(0) translateY(-7px);
  }
  100% {
    transform: scale(0.75) translateY(0px);
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
/**Makes VERTICAL bars change size in diff. states */
#container.activate > .vertical {
  animation: getBig ease 0.2s reverse;
  animation-fill-mode:forwards;
}
#container.deactivate> .vertical {
  animation-delay: 10s;
  animation: getBig ease 2s ;
  animation-fill-mode:forwards;

}
#container.deactivate>.vertical:nth-child(odd){
  
  animation: getBig ease 1.5s infinite alternate-reverse;
    animation-fill-mode:forwards;
      animation-delay: 0.75s;
}

#container.deactivate>.vertical.vertical:nth-child(even){
  animation: getBig ease 1.5s infinite alternate-reverse;
    animation-fill-mode:forwards;

}

/**Makes HORIZONTAL bars move from bottom to center and vice.*/
#container.activate > .horizontal.bottom {
  animation: getToCenterB ease 0.2s;
  animation-fill-mode: forwards;
}
#container.deactivate > .horizontal.bottom {
  animation: getToCenterB ease 0.2s reverse;
}
/**Makes HORIZONTAL bars move from Top to center and vice. */
#container.activate > .horizontal.top {
  animation: getToCenterT ease 0.2s;
  animation-fill-mode: forwards;
}
#container.deactivate > .horizontal.top {
  animation: getToCenterT ease 0.2s reverse;
}
/**Changes the color of BACKGROUND */
#container.activate {
  animation: coloredBack ease 0.3s;
  animation-fill-mode: forwards;
}
#container.deactivate {
  animation: coloredBack ease 0.2s reverse;
    animation-fill-mode: forwards;

}
/**HOVER VERTICAL */
#container.deactivate:hover > .vertical:nth-child(odd){
  animation: getBig ease 0.5s infinite alternate-reverse;
  animation-fill-mode: forwards;

}
#container.deactivate:hover > .vertical:nth-child(even){
  animation: getBig ease 0.5s infinite alternate-reverse;
  animation-delay: 0.25s;
    animation-fill-mode: forwards;
}


</style>