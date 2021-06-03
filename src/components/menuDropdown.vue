<template >
  <div>
    <menu-icon @open="openModal" />
  </div>
</template>
<script lang="ts">
import Vue from "vue"
import menuIcon from './menuIcon.vue'
export default Vue.extend({
    components:{
        menuIcon
    },
  data() {
    return {}
  },
  methods: {
      openModal:function(){
        this.$bvModal.show("about-me-modal");
      }
  },
})
</script>