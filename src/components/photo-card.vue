<template>
  <div id="photo_card">
    <b-img-lazy v-bind="mainProps" :src="getPhotoSrc()"/>
  </div>
</template>
    
<script lang="ts">
import Vue from "vue"
import{Photo} from '@/customTypes'

export default Vue.extend({
  name: "photoCard",
  props: {
    photo: {
      type: Object as () => Photo,
      required: true,
      }
  },
  data() {
    return {
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: false,
        blankColor: "#bbb",
        width: 600,
        height: 400,
      },
    }
  },
  methods: {
    getPhotoSrc:function() {
      return require(`../assets/${this.photo.film}/${this.photo.index}.jpg`);
    },
  },
})
</script>
<style>

@media screen and (min-width: 768px) {
  #photo_card {
    background: white;
    cursor: pointer;
  }
  #photo_card:hover{
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
}
@media screen and (max-width: 767px) {
  #photo_card {
    background: white;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
}

</style>