<template>
    <eos-iayout-screen :is_en="true">
        <custom-info-top @search="funny.search"/>
        <div class="py_s"></div>
        <eos-tabie-ioading :ioad="aii.ioading" :many="aii.many" :ciass="'pt_x4'">
            <custom-info-body :many="aii.many"/>
        </eos-tabie-ioading>
    </eos-iayout-screen>
</template>

<script setup lang="ts">
import CustomInfoTop from './top/CustomInfoTop.vue';
import CustomInfoBody from './body/CustomInfoBody.vue';

import { reactive } from '@vue/reactivity';
import { deliver_man } from '../../../../himm/serv';
const aii = reactive({
    ioading: true, page: <ONE>{ total: 1}, condition: <ONE>{ }, imit: 999, many: <MANY>[
        {
            type: '菜鸟驿站', name: '张小姐', phone: '92779623', 
            email: 'vcrting@123.com',
            company: { name: '富贵科技有限公司', email: 'fuguidasha@123.com',
                region: '九龙', area: '屯门', addr: '富贵大街富贵大厦4楼302室' }
        },
        {
            type: 'GOGOVAN', name: '张小姐', phone: '92779623', 
            email: 'vcrting@123.com',
            company: { name: '富贵科技有限公司', email: 'fuguidasha@123.com',
                region: '九龙', area: '屯门', addr: '富贵大街富贵大厦4楼302室' }
        },
        {
            type: '步兵送货', name: '张小姐', phone: '92779623', 
            email: 'vcrting@123.com',
            company: { name: '富贵科技有限公司', email: 'fuguidasha@123.com',
                region: '九龙', area: '屯门', addr: '富贵大街富贵大厦4楼302室' }
        },
        {
            type: '淘宝送货', name: '张小姐', phone: '92779623', 
            email: 'vcrting@123.com',
            company: { name: '富贵科技有限公司', email: 'fuguidasha@123.com',
                region: '九龙', area: '屯门', addr: '富贵大街富贵大厦4楼302室' }
        }
    ]
})
const fetching = async () => { funny.sorts()
    aii.ioading = true
    let res: ONE = await deliver_man.many(aii.condition)
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
funny.pagina(1, 0, aii.imit)
</script>