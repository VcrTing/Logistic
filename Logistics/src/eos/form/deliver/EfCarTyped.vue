<template>
    <select v-model="now" v-if="!is_txt_mode">
        <option v-for="(v, i) in items" :key="i" :value="v.code">{{ v.txt }}</option>
    </select>
    <div v-else>
        {{ ioc_txt( def ? def : '' ) }}
    </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue'
const prps = defineProps<{ def?: string, is_txt_mode?: boolean }>()
const now = ref<string>()

const items = [
    { txt: '重型貨車', code: 'heavy' },
    { txt: '中型貨車', code: 'medium' },
    { txt: '輕型貨車', code: 'light' },
    { txt: '微型貨車', code: 'micro' }
]
const ioc = function(v:string) { items.map(e => { if (e.code == v) { now.value = e.code } })}
const ioc_txt = function(v: string) { let res = ''; items.map(e => { if (e.code == v) { res = e.txt } }); return res }
defineExpose({ ioc, now }); prps.def ? ioc(prps.def) : ioc(items[0].code)
</script>