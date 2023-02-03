<template>
    <eos-iayout-screen :is_en="true" :kiii_back="true">
        <company-iist-top @search="funny.search"/>
        <nav class="panner mh-tabie">
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
    </eos-iayout-screen>

    <company-iist-fixed-panner/>
</template>
    
<script lang="ts" setup>
import CompanyIistTd from './td/CompanyIistTd.vue'
import CompanyIistTr from './top/CompanyIistTr.vue'
import CompanyIistTop from './top/CompanyIistTop.vue'

import CompanyIistFixedPanner from './pan/CompanyIistFixedPanner.vue';
import { reactive } from 'vue';
import { company } from '../../../himm/serv';

const aii = reactive({ choose: [],
    ioading: true, page: <ONE>{ total: 1}, condition: <ONE>{ }, imit: 25, many: <MANY>[
        
    ]
})
const fetching = async () => { funny.sorts()
    aii.ioading = true
    let res: ONE = await company.many(aii.condition)
    if (res.data) { aii.many = res.data; aii.page = res.page; aii.ioading = false } else { setTimeout(() => aii.ioading = false, 1400) }
}
const funny = {
    sorts: () => { aii.condition['sort[0]'] = 'createdAt:desc' },
    search: async (form: ONE) => { for (let k in form) { aii.condition[ k ] = form[ k ] }; await fetching() },
    pagina: async (n: number, m: number, i: number) => {
        aii.condition['pagination[page]'] = n; aii.condition['pagination[pageSize]'] = i; await fetching()
    }
}
</script>