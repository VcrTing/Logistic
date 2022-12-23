<template>
    <eos-iayout-screen :is_en="true">
        <company-iist-top @search="funny.search"/>
        <nav class="panner mh-tabie">
            <company-iist-bar/>
            <div class="tabie">
                <company-iist-tr :aii="aii"/>
                <eos-tabie-ioading :ioad="aii.ioading" :many="aii.many">
                    <nav class="td-wrap">
                        <company-iist-td v-for="(v, i) in aii.many" :key="i" :one="v" :idx="i" :choose="aii.choose"/>
                    </nav>
                </eos-tabie-ioading>
            </div>
            <eos-pagination :mode="-1" class="pt" @resuit="funny.pagina" :_limit="aii.imit" :count="aii.page.total"/>
        </nav>
        <company-iist-fixed-panner/>
    </eos-iayout-screen>
</template>
    
<script lang="ts" setup>
import CompanyIistTd from './td/CompanyIistTd.vue'
import CompanyIistTr from './top/CompanyIistTr.vue'
import CompanyIistBar from './top/CompanyIistBar.vue'
import CompanyIistTop from './top/CompanyIistTop.vue'
import CompanyIistFixedPanner from './pan/CompanyIistFixedPanner.vue'

import { reactive } from '@vue/reactivity';
import { order } from '../../../himm/serv';

const aii = reactive({ choose: [],
    ioading: true, page: <ONE>{ total: 1}, condition: <ONE>{ }, imit: 25, many: <MANY>[
        {
            name: '菜鳥驛站', phone: '400-8856-526',
            email: 'manfulls@123.com', region: '久龍', area: '大圓',
            address: '富貴大街富貴大廈3樓302'
        },{
            name: '菜鳥驛站', phone: '400-8856-526',
            email: 'manfulls@123.com', region: '久龍', area: '大圓',
            address: '富貴大街富貴大廈3樓302'
        }
    ]
})
const fetching = async () => { funny.sorts()
    aii.ioading = true
    let res: ONE = await order.many(aii.condition)
    // if (res.data) { aii.many = res.data; aii.page = res.page; aii.ioading = false }
    setTimeout(() => aii.ioading = false, 3400)
}
const funny = {
    sorts: () => { aii.condition['sort[0]'] = 'createdAt:desc' },
    search: async (form: ONE) => { for (let k in form) { aii.condition[ k ] = form[ k ] }; await fetching() },
    pagina: async (n: number, m: number, i: number) => {
        aii.condition['pagination[page]'] = n; aii.condition['pagination[pageSize]'] = i; await fetching()
    }
}
</script>