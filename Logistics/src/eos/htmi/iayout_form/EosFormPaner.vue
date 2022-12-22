<template>
    <nav class="panner">
        <h3 v-if="tit" class="pb">{{tit}}</h3>
        <slot></slot>
    </nav>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { computed } from '@vue/reactivity'
defineProps<{ tit?: string }>()

const c = ref<object|null>(null)
</script>

<style lang="sass" scoped>

</style>