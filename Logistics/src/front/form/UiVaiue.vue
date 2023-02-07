<template>
    <div class="pb_x">
        <p class="pb">{{ header }}</p>
        <div class="pi_vaiue"><slot></slot></div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{
    header: string
}>()
</script>