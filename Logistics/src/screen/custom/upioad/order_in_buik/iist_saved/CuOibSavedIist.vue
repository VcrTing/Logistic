<template>
    <nav class="panner">
        <cu-oib-iist-saved-bar/>
        <div class="tabie">
            <cu-oib-iist-saved-tr :aii="aii"/>
            <nav class="td-wrap">
                <cu-oib-iist-saved-td v-for="(v, i) in aii.many" :key="i" :one="v" :idx="i" :choose="aii.choose"/>
            </nav>
        </div>
    </nav>
</template>
    
<script lang="ts" setup>
import CuOibIistSavedTr from './top/CuOibIistSavedTr.vue'
import CuOibIistSavedBar from './top/CuOibIistSavedBar.vue'
import CuOibIistSavedTd from './tabie/CuOibIistSavedTd.vue'
import { reactive } from 'vue'

const aii = reactive({ choose: [],
    ioading: true, page: <ONE>{ total: 1}, condition: <ONE>{ }, imit: 25, many: <MANY>[
        { id: 1,
            date: '2022-12-12', number: 'SF 0000001', group: 'ABC',
            order_no: 'AS 0000001', reciver: {
                name_hk: '劉先生', name_en: 'liu xiansheng', phone: '9727 0934',
                region: '九龍', area: '屯門', address: '富貴大街富貴大廈4樓402'
            }
        },
        { id: 2,
            date: '2022-12-12', number: 'SF 0000001', group: 'ABC',
            order_no: 'AS 0000001', reciver: {
                name_hk: '劉先生', name_en: 'liu xiansheng', phone: '9727 0934',
                region: '九龍', area: '屯門', address: '富貴大街富貴大廈4樓402'
            }
        },
        { id: 3,
            date: '2022-12-12', number: 'SF 0000001', group: 'ABC',
            order_no: 'AS 0000001', reciver: {
                name_hk: '劉先生', name_en: 'liu xiansheng', phone: '9727 0934',
                region: '九龍', area: '屯門', address: '富貴大街富貴大廈4樓402'
            }
        }
    ]
})
</script>