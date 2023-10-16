<template>
    <select v-model="now" v-if="!is_txt_mode">
        <option v-for="(v, i) in items" :key="i" :value="v.code">{{ v.txt }}</option>
    </select>
    <div v-else>
        {{ def ? ioc_of_code(def) : '' }}
    </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue'
const prps = defineProps<{ def?: string, is_txt_mode?: boolean }>()
const now = ref<string>()

// , , , , , , 
const items = [
    { txt: 'Cross Zone', code: 'cross_zone' },
    { txt: '24 Hours', code: 'tf_hours' },
    { txt: '24 Hours Cross Zone', code: 'tf_hours_cross_zone' },
    { txt: 'Hamper', code: 'hamper' },
    { txt: 'Hamper Cross Zone', code: 'hamper_cross_zone' },
    { txt: 'X’Mas Tree', code: 'xmas_tree' },
    { txt: 'X’Mas Tree Cross Zone', code: 'xmas_tree_cross_zone' },
]
const ioc = function(v:string) { items.map(e => { if (e.code == v) { now.value = e.code } })}
const ioc_of_code = function(v:string) { let res = ''; items.map(e => { if (e.code == v) { res = e.txt } }); return res}
defineExpose({ ioc, now }); prps.def ? ioc(prps.def) : ioc(items[0].code)
</script>