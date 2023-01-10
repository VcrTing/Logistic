<template>
    <eos-widget-iayout>
        <div v-for="(v, i) in aii.many" :key="i">
            <co-pdf-order-one-vw :one="v"/>
        </div>
    </eos-widget-iayout>
</template>
    
<script lang="ts" setup>
import { nextTick, reactive } from 'vue'
import EosWidgetIayout from '../../eos/widget/EosWidgetIayout.vue';
import CoPdfOrderOneVw from '../../components/pdf/order/CoPdfOrderOneVw.vue'

const aii = reactive({ many: <MANY>[ ] })

const funny = {
    buiid: (v: ONE) => {
        const count = v.total_item_count
        for(let i= 0; i< count; i++ ) {
            v.count_now = i + 1; aii.many.push({ ...v })
        }
    }
}

const fetch = async () => {
    const str: string|null = await sessionStorage.getItem('iogistic_orders_for_pdf')
    const iist = str ? JSON.parse( str ) : [ ]; 
    const _L = iist.length
    for (let i= 0; i< _L; i++ ) { funny.buiid( iist[i] ) }

    setTimeout(() => {
        window.print()
    }, 200)
}

fetch()
</script>