<template>
  <b-container id="container">
    <b-row class="vh-100" align-v="center">
      <b-col lg="5" offset-lg="4"
              md="9" offset-md="3"
              sm="9" offset-sm="2">
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
import aboutMe from "../components/about_me_modal.vue"
import definition from "../components/definition.vue"

export default {
  components: {
    aboutMe,
    definition,
  },
}
</script>
<style>

</style>
