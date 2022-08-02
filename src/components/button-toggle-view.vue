<template>
    <div
        v-if="label"
        id="button-toggle-view"
        v-b-tooltip.hover
        title="Change how you look through images!"
        :class="{ 'yellow-button': view, 'purple-button': !view }"
        @click="changeView()"
    >
        {{ label }}
        <icon-base v-if="!view">
            <icon-presentation />
        </icon-base>
        <icon-base v-else>
            <icon-grid />
        </icon-base>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

import IconBase from '../components/icon-base.vue'
import IconPresentation from '../components/Icons/icon-presentation.vue'
import IconGrid from '../components/Icons/icon-grid.vue'
export default Vue.extend({
    name: 'ButtonToggleView',
    components: {
        IconBase,
        IconPresentation,
        IconGrid,
    },
    props: {
        label: { type: String, default: 'Change View' },
    },
    data() {
        return {
            view: false,
        }
    },
    methods: {
        // eslint-disable-next-line no-use-before-define
        changeView: function () {
            this.view = !this.view
            this.$emit('changeView')
        },
    },
})
</script>

<style scoped>
@import '../styles/yellow-button.css';
@import '../styles/purple-button.css';

#button-toggle-view {
    border-radius: 5px 5px 0px 0px;
    letter-spacing: 2px;
    margin-bottom: 100px;
}
</style>
