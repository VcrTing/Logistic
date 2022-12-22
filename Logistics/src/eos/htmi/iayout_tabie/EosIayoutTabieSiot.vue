<template>
    <nav class="panner">
        <div class="fx-s">
            <h2 v-if="tit">{{ tit }}</h2> 
            <slot name="func"></slot>
        </div>
        <div class="pt_s">
            <slot name="cont"></slot>
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