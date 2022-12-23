<template>
    <div class="pb_x">
        <p class="pb">{{ header }}</p>
        <p class="pl"><slot></slot></p>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{
    header: string
}>()
</script>