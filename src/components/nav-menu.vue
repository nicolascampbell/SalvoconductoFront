<template>
  <div  v-if="this.$route.name">
    <transition name="appear">
      <div
        v-if="open"
        id="nav-menu"
        :class="{ 'padd': this.$route.name !== 'Home' }"
      >
        <b-container id="menu">
          <b-row>
            <b-col
              id="item-home"
              cols="6"
              md="12"
              @click="goToNextRoute('Home')"
            >
              <span> Home </span>
            </b-col>
            <b-col
              id="item-collections"
              cols="6"
              md="6"
              @click="goToNextRoute('CollectionList')"
            >
              <span> Collections </span>
            </b-col>
            <b-col
              id="item-films"
              offset="6"
              cols="6"
              offset-md="0"
              md="6"
              style="padding-right=0;"
              @click="goToNextRoute('FilmList')"
            >
              <span> Films </span>
            </b-col>
          </b-row>
        </b-container>
        <!--This here is the a little "decorative" cap Btn but is also purple-->
        <div
          id="button-menu-side"
          class="purple-button"
          @click="open = !open"
        />
      </div>
    </transition>

    <!--This here is the Back Button, only appears when we are not in Home-->
    <div
      v-if="this.$route.name !== 'Home'"
      id="button-back"
      class="yellow-button"
      @click="goToNextRoute(previousRoutes[$route.name])"
    >
      <div class="arrow">
        <icon-base><icon-arrow-return-left /></icon-base>
      </div>
    </div>
    <!--This here is the Menu Button-->
    <transition name="appear">
      <div
        v-if="!open"
        id="button-menu"
        :class="{ padd: this.$route.name !== 'Home', 'purple-button':true }"
        @click.stop="open = !open"
      >
        <div class="arrow">
          <icon-base><icon-arrow-right /></icon-base>
        </div>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

import { previousRoutes } from '../navigationRoutes'
import IconBase from './icon-base.vue'
import IconArrowRight from './Icons/icon-arrow-right.vue'
import IconArrowReturnLeft from './Icons/icon-arrow-return-left.vue'

export default Vue.extend({
  name: 'NavMenu',
  components: {
    IconBase,
    IconArrowRight,
    IconArrowReturnLeft
  },
  data () {
    return {
      open: false,
      lastScrollPosition: 0,
      // TODO: check if this is necessary
      previousRoutes: previousRoutes
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
    document.addEventListener('click', this.documentClick)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
    document.addEventListener('click', this.documentClick)
  },
  methods: {
    handleScroll: function ():void {
      // For now this method may be unecessary because we want to close it always
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      // Because of momentum scrolling on mobiles,
      // we shouldn't continue if it is less than zero
      if (currentScrollPosition < 30) {
        return
      }
      // Here we determine whether we need to show or hide the navbar
      this.$data.open = false

      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition
    },
    documentClick: function ():void {
      this.open = false
    },
    goToNextRoute (next: string) {
      const currentRoute = this.$router.currentRoute.name
      // Checks if the current rou
      if (currentRoute !== next) {
        this.$router.push({ name: next })
      }
    }
  }
})
</script>
<style scoped>
  @import "../styles/nav-menu-desktop.css";
  @import "../styles/nav-menu-mobile.css";
  @import "../styles/yellow-button.css";
  @import "../styles/purple-button.css";

  #button-back, #button-menu{
    position: absolute;
  }

  .arrow {
    margin: 0;
    margin-left: 5px;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  /**This selects the b-cols */
  #menu >*>*:hover{
    cursor: pointer;
    color: blueviolet;
    background-color: rgba(248, 233, 94, 0.5);
  }
  #item-home,
  #item-films,
  #item-collections {
    padding:5px
  }
  #item-home {
    background-color: #e9e9e9;
  }
  #item-collections {
    background-color: #f0f0f0;
  }
   #item-films {
    background-color: #f5f5f5;
  }
</style>
