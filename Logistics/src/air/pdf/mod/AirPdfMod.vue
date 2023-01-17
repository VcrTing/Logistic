<template>
    <div class="mod-pdf" :class="{ 'mod-pdf-test': conf.TEST_PDF }">
        <slot></slot>
    </div>
</template>
    
<script lang="ts" setup>
import conf from '../../conf';
</script>

<style lang="sass" scoped>
.mod-pdf
    max-height: 10vh
    max-width: 720px
    position: fixed
    visibility: hidden
    top: -40vh
    left: 50vw
    background: #FFF
    transform: translate(-50%, 0%)
    overflow-x: scroll 
    overflow-y: scroll
    z-index: 1

.mod-pdf-test
    top: 2vh !important
    z-index: 500 !important
    min-height: 96vh !important
    visibility: visible !important

</style>