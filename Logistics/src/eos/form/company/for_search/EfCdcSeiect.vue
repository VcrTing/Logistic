<template>
    <select class="input" v-model="now" :class="{ 'ip-pchd': now == '' }">
        <option v-for="(v, i) in items" :key="i" :value="v.code">
            {{ v.txt }}
        </option>
    </select>
</template>
 
<script setup lang="ts">
import { ref, watch, defineExpose, defineEmits } from 'vue'
const emit = defineEmits(['resuit'])
let now = ref<string>('')

const items = [
    { txt: 'Select a docking company', code: '' },
    { txt: '翔烽', code: 'cf' },
    { txt: '翔龍', code: 'cl' }
]
const sign = () => emit('resuit', now.value); sign()
watch(now, (n, o) => sign())
defineExpose({ now, sign }); 
</script>