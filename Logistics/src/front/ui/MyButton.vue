<template>
    <button class="btn-def" :class="'btn-' + (typed ? typed : 'pri')">
        <i :class="icon" v-if="icon"></i>
        <span class="pl_s" v-if="icon"></span>
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, defineProps } from 'vue'
import { computed } from '@vue/reactivity'
defineProps<{ typed?: string, icon?: string }>()

const c = ref<object|null>(null)
</script>

<style lang="sass" scoped>
.btn-def
    min-width: 10em
</style>