<template>
    <div
        id="button-scroll-to-top"
        v-b-tooltip.hover
        title="Go back to top."
        class="purple-button"
        @click="scrollToTop()"
    >
        <icon-base><icon-arrow-90deg-up /></icon-base>
    </div>
</template>

<script lang="ts">
import IconBase from './icon-base.vue'
import IconArrow90degUp from './Icons/icon-arrow-90deg-up.vue'
export default {
    name: 'ButtonScrollTop',
    components: {
        IconBase,
        IconArrow90degUp,
    },
    methods: {
        scrollToTop(): void {
            window.scroll({
                top: 0,
                behavior: 'smooth',
            })
        },
    },
}
</script>

<style scoped>
@import '../styles/purple-button.css';

#button-scroll-to-top {
    display: block;
    border-radius: 0px 0px 5px 5px;
    letter-spacing: 2px;
    text-align: center;
}
#button-scroll-to-top:active {
    background-color: var(--yellow);
}
</style>
