<template>
    <div class="fx-l">
        <i class="fx-l" :class="icon"></i>
        <div class="pl"><slot></slot></div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
defineProps<{
    icon?: string
}>()
</script>
<style lang="sass" scoped>
.bi-telephone-fill
    transform: scale(0.91)
.bi-geo-alt-fill
    transform: scale(1.04)
</style>