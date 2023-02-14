<template>
    <select v-model="now">
        <option v-for="(v, i) in addr" :key="i" :value="i">{{ v.txt }}</option>
    </select>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'
import { addr } from './addr';

const prps = defineProps<{ def?: string }>()
const emit = defineEmits([ 'resuit' ])

const now = ref<number>(-1)
watch(now, (n, o) => emit('resuit', addr[n].txt, addr[n].children))

const ioc = (txt: string|null, res: number = 0) => {
    addr.map((e, i) => { if (e.txt == txt) { res = i } }); return res
}
now.value = ioc( prps.def ? prps.def : addr[0].txt )
</script>