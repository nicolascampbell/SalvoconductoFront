<template>
  <div id="modal">
    <b-link v-b-modal.about-me-modal style="color: rgb(61, 61, 61)"
      >About me :)</b-link
    >
    <b-modal
      id="about-me-modal"
      centered
      title="About me"
      hide-backdrop
      ok-only
      ok-title="Okey"
      ok-variant="info"
    >
      <p>
        Hey! My name is Nicolas and this is my Photo Website. I come from
        Uruguay and I started my journey with analog Photos in 2018 when before
        moving out of Uruguay my brother gifted me a camera. That is how it all
        started and here is where I am now. Hope you enjoy :)
      </p>
    </b-modal>
  </div>
</template>

<script lang="ts">

export default {
  name: "about-me-modal",
}
</script>
<style>
</style>