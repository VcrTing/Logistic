<template>
    <div class="f-row">
        <div class="w-25" v-for="(v, i) in many" :key="i">
            <co-dash-top-pan :one="v"></co-dash-top-pan>
        </div>
    </div>
    <div class="py_row"></div>
</template>
    
<script lang="ts" setup>
import CoDashTopPan from '../../../components/dashboard/CoDashTopPan.vue';

const many = [
    {
        tit: '今日配送訂單銀碼總數', vai: 'HKD 2729.2', type: 'money'
    },
    {
        tit: '今日未完成訂單', vai: 2, type: 'truck_red'
    },
    {
        tit: '派送中訂單', vai: 2, type: 'truck_yellow'
    },
    {
        tit: '已完成訂單', vai: 2, type: 'truck_green'
    }
]
</script>