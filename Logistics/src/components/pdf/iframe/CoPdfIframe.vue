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
    width: 580px
    height: 200px
    border: 1px solid transparent
</style>