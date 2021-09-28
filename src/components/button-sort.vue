<template>
  <div
    id="btnSort"
    offset="4"
    cols="4"
    offset-sm="5"
    sm="2"
    :class="{ btnSortOn: asc, btnSortOff: !asc }"
    @click="changeOrder()"
    v-if="label"
  >
    {{label}}
    <icon-base v-if="asc">
      <icon-sort-down/>
    </icon-base>
    <icon-base v-else>
      <icon-sort-up/>
    </icon-base>
  </div>
</template>

<script>
import IconBase from '../components/icon-base.vue'
import IconSortDown from '../components/Icons/icon-sort-down.vue'
import IconSortUp from '../components/Icons/icon-sort-up.vue'
export default {
  name: 'buttonSort',
  components: {
    IconBase,
    IconSortDown,
    IconSortUp
  },
  props:{
    asc:Boolean,
    label:String
  },
  methods:{
    changeOrder:function(){
      this.$emit("changeOrder");
    }
  }
}
</script>

<style scoped>
  #btnSort {
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 5px 5px 0px 0px;
    border: black solid 1px;
    letter-spacing: 2px;
    padding: 3px;
  }
  #btnSort:hover {
    cursor: pointer;
  }
  .btnSortOn {
    background-color: var(--yellow);
  }
  .btnSortOff {
    background-color: var(--purple);
  }
  .btnSortOn:hover {
    background-color: var(--yellowHover);
  }
  .btnSortOff:hover {
    background-color: var(--purpleHover);
  }

</style>