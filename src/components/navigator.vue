<template>
  <div id="navigator">
    <b-container>
      <b-row align-h="center">
        <b-col cols="6">
          <img
            v-if="show_routes.up != null"
            @click="
              $router.push({
                name: show_routes.up.name,
                params: show_routes.up.params,
              })
            "
            class="arrow"
            :src="require('../assets/arrow_up.png')"
          />
        </b-col>
      </b-row>
      <b-row align-h="between">
        <b-col style="padding: 0px 10px 0px 11px" cols="2"
          ><img
            v-if="show_routes.left != null"
            @click="
              $router.push({
                name: show_routes.left.name,
                params: show_routes.left.params,
              })
            "
            class="arrow"
            :src="require('../assets/arrow_left.png')"
        /></b-col>
        <b-col style="padding-left: 11px" cols="2">
          <img
            v-if="show_routes.right != null"
            @click="
              $router.push(show_routes.right)
            "
            class="arrow"
            :src="require('../assets/arrow_right.png')"
          />
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="6"
          ><img
            v-if="show_routes.down != null"
            @click="
              $router.push({
                name: show_routes.down.name,
                params: show_routes.down.params,
              })
            "
            class="arrow"
            :src="require('../assets/arrow_down.png')"
        /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
type route = {
  name: String
  params: Object
}
type show_routes = {
  left: route
  right: route
  up: route
  down: route
}
export default Vue.extend({
  name: "navigator",
  data() {
    let hola="sw";
  },
  props: {
    show_routes: {
      type: Object as () => show_routes,
    },
  },
})
</script>
<style>
.arrow {
  transform: scale(0.9);
  transition: transform 0.2s;
}
.arrow:hover {
  transform: scale(1.1);
}
</style>