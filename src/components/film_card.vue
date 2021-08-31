<template>
    <b-container>
      <b-row align-v="center">
        <b-col class="photoContainer">
            <div @click="
              $router.push({
                name: 'Film',
                params: { filmInfo: filmInfo, filmid:filmInfo._id},
              })"
               class="overlay">
               <h2 class="item" v-text="`Film ${filmInfo._id}`"></h2>
            </div>
            <b-img-lazy v-bind="mainProps" id="image" :src="coverSrc(filmInfo)" > </b-img-lazy>
        </b-col>
      </b-row>
    </b-container>
</template>
<script lang="ts">
type film = {
  _id: String,
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
    return {
      mainProps: {
          center: true,
          fluidGrow: true,
          blank: true,
          blankColor: '#bbb',
          width: '100%',
          height: '100%',
        }
    }
  },

  methods: {
    coverSrc(info:film) {
      console.log(info)
      return require(`../assets/${info._id}/${info.fotoCover}.jpg`)
    },
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varela&display=swap');
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
.overlay h2{
  margin: auto;
  width: 50%;
  padding: 10px;
  color:rgb(255, 255, 255);
  transition: all 2s cubic-bezier(.23,1,.32,1);

  opacity: 0;
  font-family: 'Varela', sans-serif;
}
.photoContainer{
  padding:0px;
}
.photoContainer:hover .overlay {
  opacity: 1;
  cursor: pointer;
}
.photoContainer:hover h2{
  opacity: 1;
}

</style>
