<template>
    <b-container>
      <b-row align-v="center">
        
        <b-col offset-lg="3" lg="6">
          <b-link
              style="color: rebeccapurple"
              :to="{
                name: 'Film',
                params: { filmId: filmInfo.id, filmSize: filmInfo.size },
              }"
            >
          <b-card-img :src="coverSrc(filmInfo)"> </b-card-img>
          </b-link>
        </b-col>
      </b-row>
    </b-container>
</template>
<script lang="ts">
type film = {
  id: String,
  description: String,
  size: Number,
  year: String,
  place: String,
  tags: Array<String>,
  fotoCover: Number
}
export default {
  props: {
    filmInfo: {
      type: Object as () => film,
    }
  },
  data() {
    return {}
  },

  methods: {
    coverSrc(info:film) {
      return require(`../assets/${info.id}/${info.fotoCover}.jpg`)
    },
  },
}
</script>
<style scoped>
#header {
  padding-bottom: 15%;
}
</style>
