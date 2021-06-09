<template >
  <div id="menuDrop"  >
    <menu-icon  @open="open" @close="close" :class="scrolled"/>
      <transition name="appear">
        <div id="menu" v-if="openMenu">
          <b-link class="item" to="/">
              Home
            </b-link>
            <b-link class="item" to="/Films">
              Films
            </b-link>
            <b-link class="item" to="/Collections">
              Collections
            </b-link>
        </div>
      </transition>
  </div>
</template>
<script lang="ts">
import Vue from "vue"
import menuIcon from './menuIcon.vue'
export default Vue.extend({
    components:{
        menuIcon
    },
  data() {
    return {
      openMenu:false,
      closeMenu:false,
      lastScrollPosition: 0,
      scrolled: {
        scrolled_up: false,
        scrolled_down: false,
      },
    }
  },
  methods: {
      open(){
        this.openMenu=true;
        this.closeMenu=false;
      },
      close(){
        this.openMenu=false;
        this.closeMenu=true;
      },
      handleScroll: function () {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // Because of momentum scrolling on mobiles,
      //we shouldn't continue if it is less than zero
      if (currentScrollPosition < 30) {
        return;
      }
      // Here we determine whether we need to show or hide the navbar
      this.scrolled.scrolled_up =
        currentScrollPosition < this.lastScrollPosition;
      this.scrolled.scrolled_down = !this.scrolled.scrolled_up;
      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition;
    },
  },
   created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
})
</script>
<style scoped>

.scrolled_down {
  transform: translateX(-300%);
  transition: all 0.2s cubic-bezier(.68,-0.55,.27,1.55);
  opacity: 0;
}
.scrolled_up {
  transform: translateX(100%);
  transition: all 0.3s cubic-bezier(.68,-0.55,.27,1.55);
}

#menuDrop{
  position: fixed;
  top: 10%;
  bottom: 90%;
  left: 5%;
  z-index: 1;
}

#menu{
  position:absolute;
  top:20px;
  left:-28px;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100px;
}
.item{
  font-size: 1.2em;
  color:rgb(71, 70, 70);
}
.appear-enter-active {
  transition: all .3s cubic-bezier(.68,-0.55,.27,1.55);
}
.appear-leave-active {
  transition: all .8s cubic-bezier(.68,-0.55,.27,1.55);
}
.appear-enter, .appear-leave-to
/* .app-enter-active-leave-active below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}


</style>