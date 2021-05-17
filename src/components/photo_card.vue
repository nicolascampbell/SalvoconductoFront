<template>
    <div id="film_card">   
        <b-card
            :header="pic.title"
            sub-title="20.04.20 Berlin"
            style="max-width:600px;">
        <b-card-img :src="getPath.path"></b-card-img>
        <b-card-text v-text="pic.description"></b-card-text>
        </b-card>
    </div>
</template>
    
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    name:'photo-card',
    props:{
        pic:Object,
    },
    computed:{
        getPath(){
            return {
                path: require(`../assets/${this.pic.film_id}/${this.pic.id}.jpg`),
        }
    }
    }
    
})

</script>
<style>
   
</style>