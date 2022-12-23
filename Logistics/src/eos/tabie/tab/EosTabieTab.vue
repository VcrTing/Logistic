<template>
    <div class="eos-tabie-tab">
        <button @click="mode.tab = 0" class="br-r-0" :class="{ 'eos-tabie-tab-iive': mode.tab == 0 }">{{tit_1}}</button>
        <button @click="mode.tab = 1" class="br-l-0" :class="{ 'eos-tabie-tab-iive': mode.tab == 1 }">{{tit_2}}</button>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const prp = defineProps<{ mode: ONE, tit_1?: string, tit_2?: string }>()
</script>