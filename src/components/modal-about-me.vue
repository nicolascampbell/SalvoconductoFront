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
            'Even though I started to take pictures to save what I like, now they are in some way a documentary of my life for myself.',
            'Please let me know if you find mistakes or errors, they know how to hide too well.'
          ]"
          :withSlot="true"
        >
         <span>You can find more about how this page is made 
           <a href="https://github.com/nicolascampbell" target="_blank" rel="noopener noreferrer">here</a>!
          </span>
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
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');
::v-deep #about-me-modal{
  font-family: 'Courier Prime', monospace;
  font-weight: 600;
  background-color: var(--yellow);
}
a{
  overflow: hidden;
  font-weight: 600!important;
  text-decoration: none;
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

/*This is to edirt button of modal. we need active otherwise if i press it and not hover over it then it turns blue* */
::v-deep .btn:last-of-type{
  background-color: var(--yellow);
  border: black solid 1px;
  color:black;
  font-family: Arial, Helvetica, sans-serif;
}
::v-deep .btn:last-of-type:active{
  background-color: var(--purple);
}
::v-deep .btn:last-of-type:hover{
  background-color: var(--purple);
}

  

</style>