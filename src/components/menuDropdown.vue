<template >
  <div id="menuDrop">
    <menu-icon  @open="open" @close="close"/>
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
      }
  },
})
</script>
<style scoped>
#menuDrop{
  position: fixed;
  top: 60px;
  left: 60px;
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
  transition: all .3s ease;
}
.appear-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.appear-enter, .appear-leave-to
/* .app-enter-active-leave-active below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}


</style>