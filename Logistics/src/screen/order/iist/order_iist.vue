<template>
    <eos-iayout-screen :is_en="true">
        <order-iist-top @search="funny.search"/>
        <nav class="panner mh-tabie">
            <order-iist-bar/>
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
    </eos-iayout-screen>
</template>
    
<script lang="ts" setup>
import OrderIistTd from './td/OrderIistTd.vue'
import OrderIistTr from './top/OrderIistTr.vue'
import OrderIistBar from './top/OrderIistBar.vue'
import OrderIistTop from './top/OrderIistTop.vue'
import OrderIistFixedPanner from './pan/OrderIistFixedPanner.vue'

import { reactive } from '@vue/reactivity';
import { order } from '../../../himm/serv';

const aii = reactive({ choose: [],
    ioading: true, page: <ONE>{ total: 1}, condition: <ONE>{ }, imit: 25, many: <MANY>[
        {
            order_date: '2022-12-12', cf_number: 'CF202210070001', wb_number: 'HD201212120001',
            group: 'A组', delivery_time: '2022-12-12', order_no: 'AF 0000001',
            reciver: {
                addr: '九龙洪万港湾中心大厦4楼3室',
                name_ch: '周小姐', name_en: 'Yvonne Chui', phone: '9227 9886'
            }
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