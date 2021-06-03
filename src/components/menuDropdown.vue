<template >
  <div>
    <menu-icon @open="open" @close="close"/>
      <div id="menu" :class="{enter:openMenu, leave:closeMenu}">
         <router-link class="item" to="/">
            Home
          </router-link>
          <router-link class="item" to="/Films">
            Films
          </router-link>
          <router-link class="item" to="/Collections">
            Collections
          </router-link>
      </div>
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

#menu{
  position: fixed;
  height: 100vh;
  width: 0px;
  background-color:rgba(119, 119, 119, 0.5);
  right:0;
  top:115px;
  display: flex;
  flex-direction: column;

}
#menu.enter {
  animation: slide-in ease 0.5s ;
      animation-fill-mode:forwards;

}
#menu.leave  {
  animation: slide-out ease 0.5s;
    animation-fill-mode:forwards;

}
.item{
  text-align:center;
color: white;
  margin:5px;  /* and that, will result in a 10px gap */

}
@keyframes slide-in {
  0%{
    width:0px;
  }
  100%{
    width:170px;
    transform: translateX(-30px);
  }
  
}
@keyframes slide-out {
  0%{
    width:170px;
  }
  100%{
    width: 0px;
    transform: translateX(30px);
    opacity:0;
  }
  
}
</style>