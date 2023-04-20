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
    { txt: 'Select a settle form', code: '' },
    { txt: '月結30日', code: 'settle_30_days' },
    { txt: '月結60日', code: 'settle_60_days' },
    { txt: '月結90日', code: 'settle_90_days' },
    { txt: '貨到付款', code: 'cash_on_delivery' }
]
const sign = () => emit('resuit', now.value); sign()
watch(now, (n, o) => sign())
defineExpose({ now, sign }); 
</script>