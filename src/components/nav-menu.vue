<template>
  <div v-if="this.$route.name">
    <div
      id="nav-menu"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <div :class="{ 'menu-closed': !open, 'menu-open': open }">
        <!--Actual MENU-->
        <b-container id="menu">
          <b-row no-gutters>
            <b-col
              id="item-home"
              cols="12"
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
        <!--This is the Menu BTN, is like a dropdown-->
        <div
          id="button-menu"
          class="purple-button"
          @click.stop="handleOpenMenu"
        >
          <icon-base
            width="20"
            height="20"
          >
            <icon-arrow-down
              v-if="!open"
              class="menu-arrow"
            />
            <icon-arrow-up
              v-else
              class="menu-arrow"
            />
          </icon-base>
        </div>
      </div>
    </div>
    <!--This here is the Back Button, only appears when we are not in Home-->
    <div
      v-if="this.$route.name !== 'Home'"
      id="button-back"
      class="yellow-button"
      @click="goToNextRoute(previousRoutes[$route.name])"
    >
      <div class="go-back-arrow">
        <icon-base><icon-arrow-return-left /></icon-base>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

import { previousRoutes } from '../navigationRoutes'
import IconBase from './icon-base.vue'
import IconArrowReturnLeft from './Icons/icon-arrow-return-left.vue'
import IconArrowDown from './Icons/icon-arrow-down.vue'
import IconArrowUp from './Icons/icon-arrow-up.vue'

export default Vue.extend({
  name: 'NavMenu',
  components: {
    IconBase,
    IconArrowReturnLeft,
    IconArrowDown,
    IconArrowUp
  },
  data () {
    return {
      open: false,
      lastScrollPosition: 0,
      previousRoutes: previousRoutes,
      touchParameters: {
        start: {
          Y: 0
        },
        end: {
          Y: 0
        }
      }
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
    handleScroll: function (): void {
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
    documentClick: function (): void {
      this.open = false
    },
    goToNextRoute (next: string) {
      const currentRoute = this.$router.currentRoute.name
      // Checks if the current rou
      if (currentRoute !== next) {
        this.$router.push({ name: next })
      }
    },
    handleTouchStart (event:any) {
      this.touchParameters.start = { Y: event.targetTouches[0].clientY }
      console.log(this.touchParameters)
    },
    handleTouchEnd (event:any) {
      this.touchParameters.end = { Y: event.changedTouches[0].clientY }
      console.log(this.touchParameters)
      if (Math.abs(this.touchParameters.start.Y - this.touchParameters.end.Y) > 20) {
        this.handleOpenMenu()
        this.resetParameters()
      }
    },
    handleOpenMenu () {
      this.open = !this.open
    },
    resetParameters () {
      this.touchParameters = {
        start: {
          Y: 0
        },
        end: {
          Y: 0
        }
      }
    }

  }
})
</script>
<style scoped>
@import "../styles/nav-menu-desktop.css";
@import "../styles/nav-menu-mobile.css";
@import "../styles/nav-menu.css";
@import "../styles/yellow-button.css";
@import "../styles/purple-button.css";
</style>
