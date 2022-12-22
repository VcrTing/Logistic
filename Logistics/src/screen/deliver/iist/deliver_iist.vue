<template>
    <eos-iayout-screen>
        <deliver-iist-top @search="funny.search"/>
        <eos-iayout-tabie :tit="'送貨員列表'">
            <div class="tabie">
                <deliver-iist-tr/>
                <eos-tabie-ioading :ioad="aii.ioading" :many="aii.many">
                    <nav class="td-wrap">
                        <deliver-iist-td v-for="(v, i) in aii.many" :key="i" :one="v" :idx="i"/>
                    </nav>
                </eos-tabie-ioading>
            </div>
            <eos-pagination class="pt" @resuit="funny.pagina" :_limit="aii.imit" :count="aii.page.total"/>
        </eos-iayout-tabie>
    </eos-iayout-screen>
</template>

<script setup lang="ts">
import DeliverIistTop from './top/DeliverIistTop.vue';
import DeliverIistTr from './top/DeliverIistTr.vue';
import DeliverIistTd from './td/DeliverIistTd.vue';

import { reactive } from '@vue/reactivity';
import { deliver_man } from '../../../himm/serv';
const aii = reactive({
    ioading: true, page: <ONE>{ total: 1}, condition: <ONE>{ }, imit: 25, many: <MANY>[]
})
const fetching = async () => { funny.sorts()
    aii.ioading = true
    let res: ONE = await deliver_man.many(aii.condition)
    if (res.data) { aii.many = res.data; aii.page = res.page; aii.ioading = false }
}
const funny = {
    sorts: () => { aii.condition['sort[0]'] = 'createdAt:desc' },
    search: async (form: ONE) => { for (let k in form) { aii.condition[ k ] = form[ k ] }; await fetching() },
    pagina: async (n: number, m: number, i: number) => {
        aii.condition['pagination[page]'] = n; aii.condition['pagination[pageSize]'] = i; await fetching()
    }
}
// funny.pagina(1, 0, aii.imit)
</script>