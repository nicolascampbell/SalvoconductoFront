<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 900px">
      <b-row class="text-center" no-gutters>
        <b-col md="7">
          <b-card-img :src="coverSrc(filmInfo)"> </b-card-img>
        </b-col>
        <b-col md="5">
          <div id="header">
            <b-link
              style="color: rebeccapurple"
              :to="{
                name: 'Film',
                params: { filmId: filmInfo.id, filmSize: filmInfo.size },
              }"
            >
              <h3>{{ `Film ` + filmInfo.id }}</h3>
            </b-link>
            <h6>{{ filmInfo.year }}</h6>
          </div>
          <b-card-text v-text="filmInfo.description.substr(0, 100) + '(...)'">
          </b-card-text>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script lang="ts">
type film = {
  id: String,
  description: String,
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
