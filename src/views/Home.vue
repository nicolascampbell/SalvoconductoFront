<template>
  <b-container>
    <b-row class="vh-100" align-v="center" no-gutters>
      <b-col lg="4" offset-lg="4"
              md="6" offset-md="3"
              sm="8" offset-sm="3"
              cols="9" offset="1" >
        <definition
          :title="'Salvoconducto'"
          :subtitle="'[Sal·vo·con·duc·to]'"
          :type="'Website'"
          :definitions="[
            'A place to share what my eyes see.',
            'Within can be found all my films and collections.',
            'Freedom to do something without fear of punishment.',
          ]"
          :withSlot="true"
        >
          <about-me />
        </definition>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import aboutMe from "../components/modal-about-me.vue"
import definition from "../components/definition.vue"

export default {
  name:'Home',
  components: {
    aboutMe,
    definition,
  },
}
</script>
<style scoped>
</style>
