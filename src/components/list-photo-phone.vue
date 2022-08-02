<template>
    <div v-if="photos" id="images-container-phone">
        <div v-for="photo in photos" :key="photo.index">
            <photo-card :photo="photo" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import photoCard from './card-photo.vue'
import { Photo } from '@/customTypes'

export default Vue.extend({
    name: 'ListPhotoPhone',
    components: {
        photoCard,
    },
    props: {
        photos: { type: Array, default: (): Array<Photo> => [] },
    },
})
</script>

<style>
#images-container-phone > * {
    padding-top: 10%;
}
</style>
