<template>
    <div class="mod-pdf">
        <slot></slot>
    </div>
</template>
    
<script lang="ts" setup>

</script>

<style lang="sass" scoped>
.mod-pdf
    max-height: 30vh
    max-width: 600px
    position: fixed
    // visibility: hidden
    top: -40vh
    left: 50vw
    background: #FFF
    transform: translate(-50%, 0%)
    overflow-x: scroll 
    overflow-y: scroll
    z-index: 999       
</style>