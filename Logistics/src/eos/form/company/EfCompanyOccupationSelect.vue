<template>
    <select class="fx-l" v-if="!is_txt_mode" v-model="now">
        <option class="fx-l" v-for="(v, i) in items" :key="i" :value="v.code">
            {{ v.txt }}
        </option>
    </select>
    <div class="fx-l" v-else>
        {{ ioc_txt(def + '') }}
    </div>
</template>

<script setup lang="ts">
import { ref, watch, defineExpose, defineEmits } from 'vue'
const prps = defineProps<{ def?: string, is_txt_mode?: boolean }>()
const emit = defineEmits(['change'])
let now = ref<string>('inspector')

const items = [
    { txt: '檢貨員', code: 'inspector' },
    { txt: '倉庫主管', code: 'warehouse_supervisor' },
    
    { txt: '文員', code: 'clerk' },
    { txt: '經理', code: 'manager' },
    { txt: '老闆', code: 'boss' },
]
watch(now, (n, o) => emit('change', now.value))
const sign = () => emit('change', now.value)
const ioc = function(v: string) { items.map(e => { if (e.code == v) { now.value = e.code } })}
const ioc_txt = function(v: string) { let res = ''; items.map(e => { if (e.code == v) { res = e.txt } }); return res }
defineExpose({ ioc, now, sign }); 
emit('change', now.value)
</script>