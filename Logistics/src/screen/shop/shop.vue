<template>
    <router-view/>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { computed } from '@vue/reactivity'

const c = ref<object|null>(null)
</script>

<style lang="sass" scoped>

</style>