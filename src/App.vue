<template>
    <div id="container">
        <navbar id="navbar" />
        <router-view :key="$route.fullPath" class="view" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import navbar from './components/nav-menu.vue'
export default Vue.extend({
    name: 'App',
    components: {
        navbar: navbar,
    },
    data() {
        return {}
    },
})
</script>

<style>
@import './styles/yellow-button.css';
@import './styles/purple-button.css';

@media screen and (min-width: 768px) {
    @import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');
    :root {
        --purple: rgb(145, 107, 182);
        --purpleTransparent: rgba(145, 107, 182, 0.651);
        --yellow: #fae844f8;
        --purpleHover: rgb(190, 153, 226);
        --yellowHover: #f3e77ef8;
    }
    #container {
        font-family: 'Courier Prime', monospace;
    }

    #navbar {
        top: 0;
        width: 100%;
        height: 2em;
        position: fixed;
        z-index: 100;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        z-index: 1;
    }
}
@media screen and (max-width: 767px) {
    @import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');
    :root {
        --purple: rgb(145, 107, 182, 0.8);
        --yellow: #fae844de;
        --purpleHover: rgb(190, 153, 226, 0.8);
        --yellowHover: #f3e77ee1;
    }
    #container {
        font-family: 'Courier Prime', monospace;
    }
    #navbar {
        top: 0;
        width: 100%;
        height: 10em;
        /**Position is absolute so that navbar does not go with you everywhere. This frees up the screen */
        position: absolute;
        z-index: 100;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        z-index: 1;
    }
}
</style>
