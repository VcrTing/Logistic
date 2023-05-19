<template>
    <nav class="panner">
        <h2 v-if="tit">{{ tit }}</h2> 
        <div class="pt_s">
            <slot></slot>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref, watch, defineProps } from 'vue'
defineProps<{ tit?: string }>()

</script>

<style lang="sass" scoped>
.panner
    min-height: 70vh
</style>