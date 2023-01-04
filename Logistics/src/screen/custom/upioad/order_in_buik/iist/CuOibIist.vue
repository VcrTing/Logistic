<template>
    <div>
        <div class="tabie">
            <cu-oib-iist-tr/>
            <eos-tabie-ioading :ioad="aii.ioading" :many="many">
                <nav class="td-wrap">
                    <div v-for="(v, i) in aii.items" :key="i">
                        <cu-oib-iist-td :one="v" :idx="i"/>
                    </div>
                </nav>
            </eos-tabie-ioading>
        </div>
        <div class="pt" v-if="many && many.length > 0">
            <eos-pagination @resuit="funny.pagina" :count="many.length" :_limit="aii.imit"/>
        </div>

        <eos-mod>
            <cu-oib-td-form @refresh="refresh"/>
        </eos-mod>
    </div>
</template>
    
<script lang="ts" setup>
import CuOibTdForm from './form/CuOibTdForm.vue';
import CuOibIistTr from './tabie/CuOibIistTr.vue';
import CuOibIistTd from './tabie/CuOibIistTd.vue';
import { reactive } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';

const prp = defineProps<{
    many: ONE[ ]
}>()

watch(prp.many, (n, o) => { funny.pagina(0, 0, aii.imit) })
const aii = reactive({
    items: <ONE[]>[ ], imit: 25, ioading: false, start: 0
})

const funny = reactive({
    pagina: (n: number, st: number, imt: number) => {
        aii.ioading = true
        aii.start = st; aii.imit = imt
        aii.items = prp.many.slice(st, st + imt)
        aii.ioading = false
    }
})

const refresh = (one: ONE) => {
    aii.items.map((e: ONE, i: number)=> {
        if (e.index === one.index) {
            aii.items[ i ] = one
        }
    })
}

/*
const aii = reactive({
    many: [
        {
            date: '2022-12-12', number: 'SF 0000001', group: 'ABC',
            order_no: 'AS 0000001', reciver: {
                name_hk: '劉先生', name_en: 'liu xiansheng', phone: '9727 0934',
                region: '九龍', area: '屯門', address: '富貴大街富貴大廈4樓402'
            }
        },
        {
            date: '2022-12-12', number: 'SF 0000001', group: 'ABC',
            order_no: 'AS 0000001', reciver: {
                name_hk: '劉先生', name_en: 'liu xiansheng', phone: '9727 0934',
                region: '九龍', area: '屯門', address: '富貴大街富貴大廈4樓402'
            }
        },
        {
            date: '2022-12-12', number: 'SF 0000001', group: 'ABC',
            order_no: 'AS 0000001', reciver: {
                name_hk: '劉先生', name_en: 'liu xiansheng', phone: '9727 0934',
                region: '九龍', area: '屯門', address: '富貴大街富貴大廈4樓402'
            }
        }
    ]
})
*/
</script>