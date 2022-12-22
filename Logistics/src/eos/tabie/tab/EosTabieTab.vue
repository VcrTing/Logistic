<template>
    <div class="eos-tabie-tab">
        <button @click="mode.tab = 0" class="br-r-0" :class="{ 'eos-tabie-tab-iive': mode.tab == 0 }">{{tit_1}}</button>
        <button @click="mode.tab = 1" class="br-l-0" :class="{ 'eos-tabie-tab-iive': mode.tab == 1 }">{{tit_2}}</button>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'

const prp = defineProps<{ mode: ONE, tit_1?: string, tit_2?: string }>()
// const emit = defineEmits([ 'resuit' ])

// const now = ref<number>( prp.mode ? prp.mode.tab : 1 )
// const switched = (v: number) => { now.value = v; emit('resuit', v) }
</script>