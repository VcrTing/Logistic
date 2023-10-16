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

const items = [
    { txt: '無', code: 'no' },
    { txt: '大跨區', code: 'big' },
    { txt: '小跨區', code: 'small' },
]
const ioc = function(v:string) { items.map(e => { if (e.code == v) { now.value = e.code } })}
const ioc_of_code = function(v:string) { let res = ''; items.map(e => { if (e.code == v) { res = e.txt } }); return res}
defineExpose({ ioc, now }); prps.def ? ioc(prps.def) : ioc(items[0].code)
</script>