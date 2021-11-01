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

<script>
import IconBase from '../components/icon-base.vue'
import IconSortDown from '../components/Icons/icon-sort-down.vue'
import IconSortUp from '../components/Icons/icon-sort-up.vue'
export default {
  name: 'ButtonSort',
  components: {
    IconBase,
    IconSortDown,
    IconSortUp
  },
  props: {
    asc: Boolean,
    label: String
  },
  methods: {
    changeOrder: function () {
      this.$emit('changeOrder')
    }
  }
}
</script>

<style scoped>
  @import "../styles/yellow-button.css";
  @import "../styles/purple-button.css";

  #button-sort {
    border-radius: 5px 5px 0px 0px;
    letter-spacing: 2px;
  }

</style>
