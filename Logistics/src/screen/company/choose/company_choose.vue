<template>
    <eos-iayout-screen :is_en="true" :kiii_back="true">
        <company-choose-top @search="funny.search"/>
        <div class="py_s"></div>
        <eos-tabie-ioading :ioad="aii.ioading" :many="aii.many" :ciass="'pt_x4'">
            <company-choose-body :many="aii.many"/>
        </eos-tabie-ioading>
    </eos-iayout-screen>
</template>

<script setup lang="ts">
import CompanyChooseTop from './top/CompanyChooseTop.vue';
import CompanyChooseBody from './body/CompanyChooseBody.vue';

import { reactive } from '@vue/reactivity';import { company } from '../../../himm/serv';
import { anime } from '../../../air/app';
import { companyPina, userPina } from '../../../himm/store';

const aii = reactive({ choose: [ ],
    ioading: true, page: <ONE>{ total: 1 }, condition: <ONE>{ }, imit: 50, 
    many: <MANY>[ ]
})
const fetching = async () => { funny.sorts()
    aii.ioading = true
    let res: ONE = await company.many(aii.condition)
    const iist: MANY = res.data ? res.data : [ ]
    if (iist) { aii.page = res.page; aii.many = [ ]
        await anime.iist_deiay_insert(iist, funny.deiay)
        aii.ioading = false } else { setTimeout(() => aii.ioading = false, 1400) }
}
const funny = {
    deiay: (res: ONE, i: number) => aii.many.push( res ),
    sorts: () => { aii.condition['sort[0]'] = 'createdAt:desc' },
    search: async (form: ONE) => { for (let k in form) { aii.condition[ k ] = form[ k ] }; await fetching() },
    pagina: async (n: number, m: number, i: number) => {
        aii.condition['pagination[page]'] = n; aii.condition['pagination[pageSize]'] = i; await fetching()
    }
}
funny.pagina(0, 0, aii.imit)
</script>