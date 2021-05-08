<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 800px;">
      <b-row no-gutters>
        <b-col md="7">
          <b-card-img
            :src="require(`../assets/${filmInfo.name}/${filmInfo.coverFotoId}.jpg`)">
          </b-card-img>
        </b-col>
        <b-col md="5">
          <b-card-body :title=filmInfo.name :sub-title=filmInfo.date>
            <b-card-text v-text="filmInfo.description">
            </b-card-text>
            <b-button :to="{name:'Film', params: { filmId: filmInfo.name }}" >Go to Film Pics</b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script lang="ts">
export default {
  props:{
    filmInfo:Object,
  },
  
};
</script>
