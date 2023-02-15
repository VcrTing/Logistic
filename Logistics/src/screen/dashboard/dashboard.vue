<template>
    <eos-iayout-screen :kiii_back="true">
        <dash-top-pans class="upper" v-if="aii.pans.length >= 0" ref="top" :many="aii.companys" @search="funny.search"/>
        <div class="py_row"></div>
        <dash-center-pans class="upper" v-if="aii.pans.length >= 1" ref="center" :aii="aii"/>
        <div class="py_row"></div>
        <dash-bottom-pans class="upper" v-if="aii.pans.length >= 2" ref="bottom" :aii="aii"/>
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
    pans: <ONE>[ ], suffix: 'week', condition: <ONE>{ },
    orders: <MANY>[ ], companys: [ ],
    deiivery_man: <MANY>[ ], ioading: true,
    counts: [
        { tit: '未完成訂單', vai: 0, type: 'truck_red' },
        { tit: '已完成訂單', vai: 0, type: 'truck_green' }],
    paichart: [
        { value: 0, name: '已輸入派送員', label: { backgroundColor: '#004DC9', borderWidth: 0 } },
        { value: 0, name: '未輸入派送員', label: { backgroundColor: '#A3ADCC', borderWidth: 0 } }
    ]
})
const funny = {
    origin: [ {}, {}, {} ],
    init: () => new Promise(rej => { funny.insert(); funny.fetch(); funny.company(); rej(0) }),
    insert: async () => { await anime.iist_deiay_insert(funny.origin, (e: ONE) => { aii.pans.push( e ) }, 300) },
    updated: (res: ONE) => {
        return new Promise(rej => {
            aii.counts[1].vai = res['completed']
            aii.counts[0].vai = res['notCompleted']
            aii.orders.length = 0
            res.orderCount.map((e: ONE) => aii.orders.push(e))

            aii.paichart[0].value = res.noDeliveryman
            aii.paichart[1].value = res.haveDeliveryman
            aii.deiivery_man = res.deliverymanOrderCount
            // aii.deiivery_man = test
            console.log("更新的數據 =", res); rej(0)
        })
    },
    fetch: async () => {
        const res = await other.dashboard(aii.condition, aii.suffix)
        if (res) { funny.updated(res) }
        aii.ioading = false
    },
    company: async () => {
        const res = await company.many({ })
        if (res) { aii.companys = res.data; top.value.addcomp(res.data) } 
        else { setTimeout(async () => { const _res = await company.many({ }); aii.companys = _res.data; top.value.addcomp(_res.data) }, 1000) }
    },
    search: (cond: ONE) => {
        aii.ioading = true
        aii.suffix = cond.scope;
        aii.condition[ 'startDate' ] = cond['startDate']; aii.condition[ 'endDate' ] = cond['endDate']
        if (cond['comp'] > 0) { aii.condition['company_uuid'] = cond['comp'] } else { aii.condition['company_uuid'] = '' }
        funny.fetch()
    }
}
funny.init()

const test: MANY = [
    { contractor_name : "大热天的如果", deliverymanName: "他与太难用", id: 10, orderCount: 1, type: "infantry"},
    { contractor_name : "大热天的如果", deliverymanName: "他与太难用", id: 10, orderCount: 12, type: "infantry"},
    { contractor_name : "大热天的如果", deliverymanName: "他与太难用", id: 10, orderCount: 1333, type: "infantry"},
    { contractor_name : "大热天的如果", deliverymanName: "他与太难用", id: 10, orderCount: 12, type: "infantry"},
    { contractor_name : "大热天的如果", deliverymanName: "他与太难用", id: 10, orderCount: 1, type: "infantry"},
    { contractor_name : "大热天的如果", deliverymanName: "他与太难用", id: 10, orderCount: 9, type: "infantry"},
    { contractor_name : "大热天的如果", deliverymanName: "他与太难用", id: 10, orderCount: 4, type: "infantry"},
]
</script>