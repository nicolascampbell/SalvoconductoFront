<template >
  <div id="navtoken">
    <transition name="appear">
      <b-container id="nav" v-if="open">
        <b-row>
          <b-col cols="2" class="item">
            <b-link to="/"> Home </b-link>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="2" class="item">
            <b-link to="/Films"> Films </b-link>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="2" class="item">
            <b-link class="item" to="/Collections"> Collections </b-link>
          </b-col>
        </b-row>
      </b-container>
      </transition>

      <div id="token" v-if="!open" @click="open=!open">
      </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  data() {
    return {
      open: false,
    }
  },
  methods: {},
})
</script>
<style scoped>

#nav {
  text-align: center;
  background-color: grey;
}
#token{
  width:10%;
  height:100%;
  background-color: rebeccapurple;
  border-radius: 0px 20px 20px 0px;
  cursor: pointer;
}
#token:hover{
  background-color: rgb(145, 108, 182);
}
.item {
  padding-bottom: 10px;
}
.appear-enter-active {
  transition: all .3s cubic-bezier(.68,-0.55,.27,1.55);
}
.appear-leave-active {
  transition: all .3s cubic-bezier(.68,-0.55,.27,1.55);
}
.appear-enter, .appear-leave-to
/* .app-enter-active-leave-active below version 2.1.8 */ {
  transform: translateX(-100px);
  opacity: 0;
}
</style>