<template>
  <div id="modal">
    <a v-b-modal.about-me-modal
      >About me :)</a>
    <b-modal
      id="about-me-modal"
      centered
      hide-backdrop
      ok-only
      ok-title="Okey"
    >
      <definition
          :title="'Nicolás'"
          :subtitle="'[Ni·co·lás]'"
          :type="'Person'"
          :definitions="[
            'I come from Uruguay.',
            'I started to take pictures in 2018.',
            'I got an Olympus Trip 35 as a gift before moving to Germany, that is how it all started.',
            'Even though I started to take pictures to save what I like, now they are in some way a documentary of my life.'
          ]"
          :withSlot="false"
        >
      </definition>
    </b-modal>
  </div>
</template>
<script lang="ts">
import definition from "./definition.vue"

export default {
  name: "aboutMeModal",
  components:{
    definition
  }
}
</script>
<style scoped>

::v-deep #about-me-modal{
  font-family: "Courier New", Courier, monospace;
}

a {
  position: absolute;
  display: inline-block;
  overflow: hidden;
  font-weight: 600!important;
  background: linear-gradient(to right, rgb(65, 23, 107), rebeccapurple 50%, rgb(145, 85, 201) 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 400ms ease;
}
a:hover {
  background-position: 0 100%;
}

::v-deep .btn:last-of-type{
  background-color: #fae844f8;
  border: black solid 1px;
  color:black;
  font-family: Arial, Helvetica, sans-serif;
}
::v-deep .btn:last-of-type:hover{
  background-color: rgb(145, 107, 182);
}
</style>