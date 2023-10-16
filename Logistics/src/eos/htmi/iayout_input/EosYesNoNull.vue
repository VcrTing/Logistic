<template>
    <select v-model="now">
        <option v-for="(v, i) in items" :key="i" :value="v.v">
            {{ v.txt }}
        </option>
    </select>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits, defineExpose } from 'vue'
const emt = defineEmits([ 'resuit' ])
const items = [
    {
        txt: '- -',
        v: null 
    },
    {
        txt: '是',
        v: true 
    },
    {
        txt: '否',
        v: false
    }
]

const now = ref<boolean|null>(null)
watch(now, (n: boolean|null, o) => {
    emt('resuit', n)
})
defineExpose({
    now
})
</script>