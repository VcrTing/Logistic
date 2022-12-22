<template>
    <div v-if="is_completed" class="eos-after-order">
        <span>後</span>
    </div>
    <span v-else></span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{ is_completed: boolean }>()
</script>