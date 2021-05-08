<template>
  <div id="container" class="vh-100">
    <router-view class="view"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "app",
  data(){
    return{
      left:'CollectionList',
      current:'Home',
      right:'FilmList',
      tmp:'',
    }
  },
  methods:{
    keyUpHandler:function(event:KeyboardEvent){
      switch (event.key) {
    case "ArrowLeft":
        this.$router.push({name:this.left});
        this.tmp =this.current;
        this.current=this.left;
        this.right=this.tmp;
        break;
    case "ArrowRight":
      console.log(this.right);
        this.$router.push({name:this.right});
        this.tmp =this.current;
        this.current=this.right;
        this.left=this.tmp;
        break;
    case "ArrowUp":
        console.log("up");
        break;
    case "ArrowDown":
        console.log("down");
        break;
}

    },
  },
  created: function () {
    window.addEventListener('keyup', this.keyUpHandler )
  },
  destroyed: function () {
    window.removeEventListener('keyup', this.keyUpHandler)
  },
})
</script>

<style>
</style>
