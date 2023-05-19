<template>
    <select v-model="now">
        <option v-for="(v, i) in items" :key="i" :value="v.v">
            {{ v.txt }}
        </option>
    </select>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits } from 'vue'
const emt = defineEmits([ 'resuit' ])
const items = [
    {
        txt: '是',
        v: true 
    },
    {
        txt: '否',
        v: false
    }
]

const now = ref<boolean>(false)
watch(now, (n, o) => emt('resuit', n))

</script>