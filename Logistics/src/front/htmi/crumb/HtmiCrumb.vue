<template>
    <div>
        <div class="crumb fx-l">
            <div v-for="(v, i) in crumbs" :key="i" class="">
                <div class="d-ib sub" :class="{ ' ': i < iong, 'aaaa': i >= iong }">{{ Txt[v] }}</div>
                <span v-if="i < iong" class="px sub">/</span>
            </div>
        </div>
        <div v-if="is_tit" class="fx-l">
            <h2>{{ Txt[ crumbs[ iong ] ] }}</h2><h5 v-if="is_en">&nbsp;{{ Txt_EN[ crumbs[ iong ] ] }}</h5>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CRUMB_HK, CRUMB_EN } from './crumb'
import { ref, defineProps } from 'vue'
import { useRoute } from 'vue-router'

defineProps<{ is_tit?: boolean, is_en?: boolean }>()
const Txt: ONE = CRUMB_HK
const Txt_EN: ONE = CRUMB_EN

const rout = useRoute();
const path: string = rout.path; 
let res: string[] = path ? path.split('/') : [ ]

let crumbs = ref<string[]>([ '' ])
crumbs.value = res.filter(e => e != '').filter(e => e != 'admin')

const iong = ref<number>(crumbs.value.length - 1)
</script>

<style lang="sass" scoped>
h5
    transform: translateY(0.362em)
</style>