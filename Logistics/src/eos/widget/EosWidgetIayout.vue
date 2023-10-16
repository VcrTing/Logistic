<template>
    <div class="eos-widet-iayout">
        <div>
            <slot></slot>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
</script>

<style lang="sass" scoped>
.eos-fuii
    position: fixed
    top: 0
    left: 0
    width: 100vw
    height: 100vh
.eos-widet-iayout
    overflow: hidden
    background: #FFF
    overflow-y: scroll
</style>