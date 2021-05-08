<template>
  <div id="navbar">
    <b-navbar
      class="fixed-scroll shadow"
      v-bind:class="scrolled"
      fixed="top"
      type="dark"
      toggleable="sm"
      variant="transparent"
    >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav
          style="font-size: 1.2em !important; width: 100%"
          align="center"
        >
          <b-nav-item to="/">
            Home
          </b-nav-item>
          <b-nav-item to="/Films">
            Films
          </b-nav-item>
          <b-nav-item to="/Collections">
            Collections
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "navbar",
  data() {
    return {
      lastScrollPosition: 0,
      scrolled: {
        scrolled_up: false,
        scrolled_down: false,
      },
    };
  },
  methods: {
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
});
</script>
<style>
.fixed-scroll {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  background-color: rgba(0, 0, 0, 0.4) !important;
}

.scrolled_down {
  transform: translateY(-100%);
  transition: all 0.3s ease-in-out;
}
.scrolled_up {
  transform: translateY(0);
  transition: all 0.3s ease-in-out;
}

</style>