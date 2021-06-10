<template>
    <b-container>
      <b-row align-v="center">
        <b-col class="photoContainer" offset-lg="3" lg="6">
            <div @click="
              $router.push({
                name: 'Film',
                params: { filmId: filmInfo.id, filmSize: filmInfo.size },
              })"
               class="overlay">
               <h1 class="item" v-text="`Film ${filmInfo.id}`"></h1>
            </div>
            <b-card-img id="image" :src="coverSrc(filmInfo)"> </b-card-img>
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
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@500&display=swap');
.overlay{
  position: absolute;
  display: flex;
  transition: all 0.3s ease;
  opacity: 0;
  width:100%;
  height: 100%;
  background-color: #0000009a;
  text-align: center;

}
.overlay h1{
  margin: auto;
  width: 50%;
  padding: 10px;
  color:wheat;
  transform: scale(0);
  transition: all 0.5s cubic-bezier(.23,1,.32,1);

  opacity: 0;
  font-family: 'Baloo Tammudu 2', cursive;
}
.photoContainer{
  padding:0px;
}
.photoContainer:hover .overlay {
  opacity: 1;
  cursor: pointer;
}
.photoContainer:hover h1 {
  opacity: 1;
  transform: scale(1);
}

</style>
