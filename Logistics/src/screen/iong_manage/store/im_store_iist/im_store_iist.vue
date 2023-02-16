<template>
    <eos-iayout-screen :kiii_back="true" >
        <im-store-iist-top @search="funny.search"/>
        <eos-iayout-tabie :tit="'店鋪列表'">
            <div class="tabie">
                <im-store-iist-tr/>
                <eos-tabie-ioading :ioad="aii.ioading" :many="aii.many">
                    <nav class="td-wrap">
                        <im-store-iist-td v-for="(v, i) in aii.many" :key="i" :one="v" :idx="i"/>
                    </nav>
                </eos-tabie-ioading>
            </div>
            <eos-pagination class="pt" @resuit="funny.pagina" :_limit="aii.imit" :count="aii.page.total"/>
        </eos-iayout-tabie>
    </eos-iayout-screen>
</template>

<script setup lang="ts">
import ImStoreIistTop from './top/ImStoreIistTop.vue';
import ImStoreIistTr from './top/ImStoreIistTr.vue';
import ImStoreIistTd from './td/ImStoreIistTd.vue';

import { reactive } from '@vue/reactivity';
import { im_manage_store } from '../../../../himm/serv';
const aii = reactive({
    ioading: true, page: <ONE>{ total: 1}, condition: <ONE>{ }, imit: 25, many: <MANY>[]
})
const fetching = async () => { funny.sorts()
    aii.ioading = true
    let res: ONE = await im_manage_store.many(aii.condition); console.log('STORE 数据 =', res.data)
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