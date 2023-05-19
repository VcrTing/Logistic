<template>
    <i class="bi bi-lightbulb-fill buib-succ" v-if="is_check"></i>
    <i class="bi bi-lightbulb buib-err" v-else></i>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue'
defineProps<{ is_check: boolean }>()

</script>

<style lang="sass" scoped>
.bi-lightbulb,
.bi-lightbulb-fill
    transform: translateY(-0.2em)
</style>