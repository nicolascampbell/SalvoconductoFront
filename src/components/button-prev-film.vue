<template>
    <div
        id="button-prev-film"
        :class="{
            'yellow-button': !disable,
            'button-prev-film-disabled': disable,
        }"
        @click="disable ? '' : prevFilm()"
    >
        Prev Film
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'ButtonPrevFilm',
    props: {
        disable: { type: Boolean, default: true },
        prevId: { type: String, default: '' },
    },
    methods: {
        // eslint-disable-next-line no-use-before-define
        prevFilm: function () {
            this.$router.push({
                name: 'Film',
                params: { filmid: this.prevId },
            })
        },
    },
})
</script>

<style scoped>
@import '../styles/yellow-button.css';

#button-prev-film {
    border-radius: 5px 5px 0px 0px;
    letter-spacing: 2px;
    margin-bottom: 100px;
    font-size: 0.8em;
}
.button-prev-film-disabled {
    border: black solid 1px;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    padding: 3px;
    background-color: rgb(173, 173, 173);
}
</style>
