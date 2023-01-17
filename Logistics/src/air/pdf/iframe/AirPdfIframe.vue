<template>
    <iframe class="co-pdf-iframe" :src="ink"/>
</template>
    
<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps<{
    ink: string
}>()
</script>

<style lang="sass" scoped>
.co-pdf-iframe
    width: 720px
    height: 800px
    overflow: hidden
    overflow-y: scroll
    // content-visibility: auto
    border: 1px solid transparent
</style>