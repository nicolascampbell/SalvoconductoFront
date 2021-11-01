<template>
  <div
    v-if="label"
    id="button-sort"
    v-b-tooltip.hover
    title="Order the films according to date."
    :class="{ 'yellow-button': asc, 'purple-button': !asc }"
    @click="changeOrder()"
  >
    {{ label }}
    <icon-base v-if="asc">
      <icon-sort-down />
    </icon-base>
    <icon-base v-else>
      <icon-sort-up />
    </icon-base>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import IconBase from '../components/icon-base.vue'
import IconSortDown from '../components/Icons/icon-sort-down.vue'
import IconSortUp from '../components/Icons/icon-sort-up.vue'
export default Vue.extend({
  name: 'ButtonSort',
  components: {
    IconBase,
    IconSortDown,
    IconSortUp
  },
  props: {
    asc: { type: Boolean, default: false },
    label: { type: String, default: 'Date' }
  },
  methods: {
    // eslint-disable-next-line no-use-before-define
    changeOrder: function () {
      this.$emit('changeOrder')
    }
  }
})
</script>

<style scoped>
  @import "../styles/yellow-button.css";
  @import "../styles/purple-button.css";

  #button-sort {
    border-radius: 5px 5px 0px 0px;
    letter-spacing: 2px;
  }

</style>
