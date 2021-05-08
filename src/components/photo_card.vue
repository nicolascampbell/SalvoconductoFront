<template>
    <div id="film_card">   
        <b-card
            :header="pic.title"
            sub-title="20.04.20 Berlin"
            style="max-width:600px;">
        <b-card-img :src="require(`../assets/${pic.filmId}/${pic.id}.jpg`)"></b-card-img>
        <b-card-text v-text="pic.description"></b-card-text>
        </b-card>
    </div>
</template>
    
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    name:'photo-card',
    props:{
        path:String,
        pic:Object,
    }
    
})

</script>
<style>
   
</style>