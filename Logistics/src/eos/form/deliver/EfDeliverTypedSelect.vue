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
let now = ref<string>()

const items = [
    { txt: '無', code: null },
    { txt: '步兵', code: 'infantry' },
    { txt: '貨車司機', code: 'driver' }
]
watch(now, (n, o) => emit('change', n))
const ioc = function(v: string) { items.map(e => { if (e.code == v) { now.value = e.code } })}
const ioc_txt = function(v: string) { let res = ''; items.map(e => { if (e.code == v) { res = e.txt } }); return res }
defineExpose({ ioc, now }); 
</script>