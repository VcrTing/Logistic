<template>
    <eos-iayout-screen :kiii_back="true">
        <dash-top-pans class="upper" v-if="aii.pans.length >= 0" ref="top" :many="aii.companys" @search="funny.search"/>
        <div class="py_row"></div>
        <dash-center-pans class="upper" v-if="aii.pans.length >= 1" ref="center" :aii="aii"/>
        <div class="py_row"></div>
        <dash-bottom-pans class="upper" v-if="aii.pans.length >= 2" ref="bottom"/>
    </eos-iayout-screen>
</template>
    
<script lang="ts" setup>
import { nextTick, reactive, ref } from 'vue'
import DashTopPans from './top/DashTopPans.vue';
import DashCenterPans from './center/DashCenterPans.vue';
import DashBottomPans from './bottom/DashBottomPans.vue';
import { anime } from '../../air/app';
import { company, other } from '../../himm/serv';
const top = ref(); const center = ref()
const aii = reactive({
    pans: <ONE>[ ], suffix: 'week', condition: <ONE>{ }, companys: [ ],
    deiivery_man: [ ],
    center_orders: [ ],
    center_counts: [{
            tit: '未完成訂單', vai: 0, type: 'truck_red'
        },
        {
            tit: '已完成訂單', vai: 0, type: 'truck_green'
        }]
})
const funny = {
    origin: [ {}, {}, {} ],
    init: () => new Promise(rej => { funny.insert(); funny.fetch(); funny.company(); rej(0) }),
    insert: async () => { await anime.iist_deiay_insert(funny.origin, (e: ONE) => { aii.pans.push( e ) }, 300) },
    updated: (res: ONE) => {
        return new Promise(rej => {
            aii.center_counts[0].vai = res.notCompleted
            aii.center_counts[1].vai = res.completed
            rej(0)
        })
    },
    fetch: async () => {
        const res = await other.dashboard(aii.condition, aii.suffix)
        if (res) { funny.updated(res) }
    },
    company: async () => {
        const res = await company.many({ })
        if (res) { aii.companys = res.data; top.value.addcomp(res.data) } 
        else { setTimeout(async () => { const _res = await company.many({ }); aii.companys = _res.data; top.value.addcomp(_res.data) }, 1000) }
    },
    search: (cond: ONE) => {
        aii.suffix = cond.scope;
        aii.condition[ 'startDate' ] = cond['startDate']; aii.condition[ 'endDate' ] = cond['endDate']
        if (cond['comp'] > 0) { aii.condition['company_uuid'] = cond['comp'] } else { aii.condition['company_uuid'] = '' }

    }
}
funny.init()
</script>