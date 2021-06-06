<template>
  <div id="films_container" class="container">
    <b-row class="vh-100 text-center" align-v="center">
      <b-col offset-lg="1">
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
  </div>
</template>
<script lang="ts">
import Vue from "vue"
import definition from "../components/definition.vue"
import films from "../films.json"
export default Vue.extend({
  components: {
    definition,
  },
  data() {
    return {}
  },
  methods: {},
})
</script>
<style scoped>
</style>
