<template>
    <div>
        <div>
            <co-dash-top-pan :one="many[0]" :idx="2" v-if="many[0]"></co-dash-top-pan>
        </div>
        <div class="py_row"></div>
        <div>
            <co-dash-top-pan :one="many[1]" :idx="3" v-if="many[1]"></co-dash-top-pan>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import CoDashTopPan from '../../../../components/dashboard/top/CoDashTopPan.vue';
import { anime } from '../../../../../air/app';
import { ref } from '@vue/reactivity';
const origin: MANY = [
    {
        tit: '今日未完成訂單', vai: 2, type: 'truck_red'
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