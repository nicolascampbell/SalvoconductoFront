<template>
  <div>
    <h2
      id="title"
      class="text-left"
    >
      {{ title }}
    </h2>
    <h6
      id="subtitle"
      class="text-left"
    >
      {{ subtitle }}
    </h6>
    <p class="text-left">
      {{ type }}
    </p>
    <ol class="text-left">
      <li
        v-for="(defs,index) in definitions"
        :key="index"
      >
        {{ defs }}
      </li>
      <li v-if="withSlot">
        <slot />
      </li>
    </ol>
  </div>
</template>
<script lang="ts">

export default {
  name: 'Definition',
  props: {
    title: String,
    subtitle: String,
    type: String,
    definitions: Array,
    withSlot: Boolean
  }
}
</script>
<style>
#title {
  color: rgb(71, 70, 70);
  display: inline-block;
  font-size: 2.1em;
}
#subtitle,p {
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
