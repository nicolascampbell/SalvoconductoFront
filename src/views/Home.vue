<template>
  <div>
    <b-container style="position: relative">
      <b-row class="vh-100" align-v="center">
        <b-col>
        </b-col>
        <b-col>
          <h1 id="title" class="text-left">Salvoconducto</h1>
          <h6 id="subtitle" class="text-left">[Sal·vo·con·duc·to]</h6>
          <p class="text-left">Website</p>
          <ol class="text-left">
            <li>A place to share what my eyes see.</li>
            <li>Within can be found all my films and collections.</li>
            <li>Freedom to do something without fear of punishment.</li>
            <li><about-me /></li>
          </ol>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
    
  </div>
</template>
<script lang="ts">
import aboutMe from "../components/about_me_modal.vue"
export default {
  components: {
    aboutMe,
  },
}
</script>
<style>
#title {
  color: rgb(71, 70, 70);
  display: inline-block;
}
#subtitle,
p {
  color: rgb(109, 106, 106);
}
ol li::marker {
  color: rebeccapurple;
  font-size: 0.83em;
  line-height: 0.5em;
  vertical-align: baseline;
  position: relative;
  top: -0.4em;
  font-weight: bold;
}
li {
  color: rgb(61, 61, 61);
  margin: 0 0 10px 0;
}
</style>
