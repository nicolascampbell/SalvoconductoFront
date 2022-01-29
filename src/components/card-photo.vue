<template>
  <div class="photo-card">
    <a
      :href="getPhotoSrc()"
      target="_blank"
      rel="noopener noreferrer"
    >
      <b-img-lazy
        v-bind="mainProps"
        :src="getPhotoSrc()"
        :alt="`Photo ${photo.index} of film.`"
      />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Photo } from '@/customTypes'

export default Vue.extend({
  name: 'PhotoCard',
  props: {
    photo: {
      type: Object as () => Photo,
      required: true
    }
  },
  data () {
    return {
      mainProps: {
        center: true,
        fluid: true,
        blank: false,
        blankColor: '#bbb'
      },
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    getPhotoSrc: function () {
      return `${this.publicPath}films/${this.photo.film}/${this.photo.index}.jpg`
    }
  }
})
</script>
<style scoped>
.photo-card {
  background: white;
  cursor: pointer;
  object-fit: cover;
}
</style>
