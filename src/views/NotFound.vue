<template>
  <b-container id="container">
    <b-row class="vh-100" align-v="center">
      <b-col lg="5" offset-lg="4"
              md="9" offset-md="3"
              sm="9" offset-sm="2">
        <definition
          :title="'404'"
          :subtitle="'[4 0 4]'"
          :type="'Error'"
          :definitions="[
            'Seems like you came to the wrong place',
            'Do you ever feel like you are always at the wrong place at the wrong time?',
          ]"
          :withSlot="false"
        >
        </definition>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import definition from "../components/definition.vue"

export default {
  components: {
    definition,
  },
}
</script>
<style>

</style>
