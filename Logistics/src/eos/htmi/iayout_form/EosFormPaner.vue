<template>
    <nav class="panner upper">
        <h3 v-if="tit" class="pb">{{tit}}</h3>
        <slot></slot>
    </nav>
</template>

<script setup lang="ts">
defineProps<{ tit?: string }>()
</script>