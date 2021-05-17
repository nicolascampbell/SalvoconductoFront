<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 800px;">
      <b-row no-gutters>
        <b-col md="7">
          <b-card-img
            :src="coverSrc(filmInfo)">
          </b-card-img>
        </b-col>
        <b-col md="5">
          <b-card-body :title="`Film `+filmInfo.id" :sub-title="filmInfo.year">
            <b-card-text v-text="filmInfo.description">
            </b-card-text>
            <b-button :to="{name:'Film', params: {filmId:filmInfo.id, filmSize:filmInfo.size}}" >Go to Film Pics</b-button>
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
  data(){
    return{
    }
  },
  methods:{
    coverSrc(info){
      return require(`../assets/${info.id}/${info.fotoCover}.jpg`);
    }
  }
  
};
</script>
