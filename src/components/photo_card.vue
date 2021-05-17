<template>
    <div id="film_card">   
        <b-card
            :header="pic.title"
            >
        <b-card-img :src="getImg(pic)"></b-card-img>
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
    methods:{
        getImg(pic){
            let path= pic.id.split('_');
            return require(`../assets/${path[0]}/${path[1]}.jpg`);        
        }
    }
    
})

</script>
<style>
   
</style>