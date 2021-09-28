<template>
  <div class="photo_card">
    <a :href="getPhotoSrc()" target="_blank" rel="noopener noreferrer">
      <b-img-lazy v-bind="mainProps" :src="getPhotoSrc()" />
    </a>
  </div>
</template>
    
<script lang="ts">
import Vue from "vue"
import { Photo } from "@/customTypes"

export default Vue.extend({
  name: "photoCard",
  props: {
    photo: {
      type: Object as () => Photo,
      required: true,
    },
  },
  data() {
    return {
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: false,
        blankColor: "#bbb",
      },
    }
  },
  methods: {
    getPhotoSrc: function () {
      return require(`../assets/${this.photo.film}/${this.photo.index}.jpg`)
    },
  },
})
</script>
<style>
.photo_card {
  background: white;
  cursor: pointer;
  object-fit: cover;
}
</style>