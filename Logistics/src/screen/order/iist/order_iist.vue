<template>
    <eos-iayout-screen :is_en="true">
        <order-iist-top @search="funny.search"/>
        <nav class="panner mh-tabie">
            <order-iist-bar :aii="aii"/>
            <div class="tabie">
                <order-iist-tr :aii="aii"/>
                <eos-tabie-ioading :ioad="aii.ioading" :many="aii.many">
                    <nav class="td-wrap">
                        <order-iist-td v-for="(v, i) in aii.many" :key="i" :one="v" :idx="i" :choose="aii.choose"/>
                    </nav>
                </eos-tabie-ioading>
            </div>
            <eos-pagination :mode="-1" class="pt" @resuit="funny.pagina" :_limit="aii.imit" :count="aii.page.total"/>
        </nav>
        <order-iist-fixed-panner/>

        <eos-mod>
            <order-one-print-mod/>
        </eos-mod>
    </eos-iayout-screen>
</template>
    
<script lang="ts" setup>
import OrderOnePrintMod from './pan/OrderOnePrintMod.vue'
import OrderIistTd from './td/OrderIistTd.vue'
import OrderIistTr from './top/OrderIistTr.vue'
import OrderIistBar from './top/OrderIistBar.vue'
import OrderIistTop from './top/OrderIistTop.vue'
import OrderIistFixedPanner from './pan/OrderIistFixedPanner.vue'

import { reactive } from 'vue';
import { order } from '../../../himm/serv';

const aii = reactive({ choose: [],
    ioading: true, page: <ONE>{ total: 1}, condition: <ONE>{ }, imit: 25, many: <MANY>[ ]
})
const fetching = async () => { funny.sorts()
    aii.ioading = true
    let res: ONE = await order.many(aii.condition)
    if (res.data) { 
        aii.many = res.data;
        aii.page = res.page; funny.success() }
    setTimeout(() => aii.ioading = false, 1400)
}
const funny = {
    success: () => { aii.ioading = false; aii.choose.length = 0 },
    sorts: () => { aii.condition['sort[0]'] = 'createdAt:desc' },
    search: async (form: ONE) => { for (let k in form) { aii.condition[ k ] = form[ k ] }; await fetching() },
    pagina: async (n: number, m: number, i: number) => {
        aii.condition['pagination[page]'] = n; aii.condition['pagination[pageSize]'] = i; await fetching()
    }
}
</script>