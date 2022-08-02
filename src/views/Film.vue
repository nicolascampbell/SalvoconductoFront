<template>
    <!--TODO add loading thing-->
    <div v-if="loadedSources">
        <b-container id="film-container" fluid>
            <b-row id="first-row" align-v="center">
                <b-col offset="1" offset-md="3" offset-xl="6" xl="5">
                    <definition
                        :title="`Film ${film._id}`"
                        :subtitle="'[Film]'"
                        :type="'Chronicle'"
                        :definitions="[
                            `Taken on ${film.year}`,
                            `Taken in ${film.place}`,
                            film.description,
                        ]"
                        :with-slot="false"
                    />
                </b-col>
            </b-row>
            <b-row align-h="around" style="text-align: center">
                <b-col cols="4" lg="1">
                    <button-prev-film
                        :disable="previous[$route.params.filmid] ? false : true"
                        :prev-id="previous[$route.params.filmid] || ''"
                    />
                </b-col>
                <b-col cols="4" lg="1">
                    <button-next-film
                        :disable="next[$route.params.filmid] ? false : true"
                        :next-id="next[$route.params.filmid] || ''"
                    />
                </b-col>
            </b-row>
            <b-row
                align-v="center"
                :class="{ 'image-galery-row': !desktopView }"
                no-gutters
            >
                <b-col :class="{ 'image-galery-col': !desktopView }">
                    <list-photo-phone v-if="isMobile()" :photos="film.photos" />
                    <list-photo-desktop v-else :photos="film.photos" />
                </b-col>
            </b-row>
            <b-row
                class="row"
                align-h="around"
                style="margin-top: 5%; text-align: center; margin-bottom: 5%"
            >
                <b-col cols="4">
                    <btn-scroll-top />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

import definition from '../components/definition.vue'
import { Film } from '@/customTypes'
import btnScrollTop from '../components/button-scroll-top.vue'
import ListPhotoDesktop from '../components/list-photo-desktop.vue'
import listPhotoPhone from '@/components/list-photo-phone.vue'
import buttonNextFilm from '../components/button-next-film.vue'
import buttonPrevFilm from '../components/button-prev-film.vue'

import { previous, next } from '@/films'

export default Vue.extend({
    name: 'Film',
    components: {
        definition,
        btnScrollTop,
        ListPhotoDesktop,
        listPhotoPhone,
        buttonNextFilm,
        buttonPrevFilm,
    },
    data() {
        return {
            film: {
                type: Object as () => Film,
            },
            index: -1,
            loadedSources: false,
            previous: previous,
            next: next,
        }
    },
    async beforeMount() {
        try {
            const response = await axios.get(
                `https://salvoconducto.net/api/film/${this.$route.params.filmid}`
            )
            if (response.data === null) {
                this.$router.push({ name: 'NotFound' })
            }
            this.film = response.data
            this.loadedSources = true
        } catch (e) {
            this.$router.push({ name: 'NotFound' })
        }
    },
    methods: {
        // Checks if we are on mobile or not.
        isMobile: function (): boolean {
            return window.matchMedia('(max-width: 767px)').matches
        },
    },
})
</script>
<style scoped>
#first-row {
    height: 90vh;
}
@media screen and (min-width: 767px) {
    #film-container {
        padding-right: 4em;
        padding-left: 4em;
    }
    .image-galery-col {
        padding: 0% 5% 5px 5%;
    }
    .image-galery-row {
        width: 100%;
        height: 100%;
    }
}
@media screen and (max-width: 767px) {
    #film-container {
        padding-right: 6%;
        padding-left: 6%;
    }
    .image-galery-row {
        width: 100%;
        padding-top: 10%;
    }
}
@media screen and (max-width: 767px) and (orientation: landscape) {
    #film-container {
        padding-right: 10%;
        padding-left: 10%;
    }
}
</style>
