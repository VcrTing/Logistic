<template>
    <div class="mod-pdf">
        <slot></slot>
    </div>
</template>
    
<script lang="ts" setup>

</script>

<style lang="sass" scoped>
.mod-pdf
    max-height: 40vh
    position: fixed
    top: 58vh
    left: 50vw
    background: #FFF
    transform: translate(-50%, 0%)
    overflow: hidden 
    overflow-y: scroll
    z-index: 999       
</style>