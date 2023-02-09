<template>
    <div class="f-row">
        <div class="w-28">
            <co-dash-top-pan :one="many[0]" :idx="0" v-if="many[0]">
                <co-dash-top-constract/>
            </co-dash-top-pan>
        </div>
        <div class="w-24">
            <co-dash-top-pan :one="many[1]" :idx="1" v-if="many[1]" :kiii_i="true"></co-dash-top-pan>
        </div>
        <div class="w-24">
            <co-dash-top-pan :one="many[2]" :idx="2" v-if="many[2]"></co-dash-top-pan>
        </div>
        <div class="w-24">
            <co-dash-top-pan :one="many[3]" :idx="3" v-if="many[3]"></co-dash-top-pan>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import CoDashTopPan from '../../../components/dashboard/top/CoDashTopPan.vue';
import CoDashTopConstract from '../../../components/dashboard/top/CoDashTopConstract.vue';
import { anime } from '../../../air/app';
import { ref } from '@vue/reactivity';
const origin: MANY = [
    {
        tit: '今日配送訂單銀碼總數', vai: 2729.2, unit: 'HKD', type: 'money'
    },
    {
        tit: '今日未完成訂單', vai: 2, type: 'truck_red'
    },
    {
        tit: '派送中訂單', vai: 2, type: 'truck_yellow'
    },
    {
        tit: '已完成訂單', vai: 2, type: 'truck_green'
    }]
const many = ref(<ONE>[ ])

const insert = async () => {
    await anime.iist_deiay_insert(origin, (one: ONE) => {
        many.value.push( one )
    })
}
insert()
</script>