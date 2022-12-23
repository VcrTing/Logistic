<template>
    <div>
        <div class="tabie">
            <cu-oib-iist-tr/>
            <nav class="td-wrap">
                <cu-oib-iist-td v-for="(v, i) in aii.many" :key="i" :one="v" :idx="i"/>
            </nav>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import CuOibIistTr from './tabie/CuOibIistTr.vue';
import CuOibIistTd from './tabie/CuOibIistTd.vue';
import { reactive } from '@vue/reactivity';

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
</script>