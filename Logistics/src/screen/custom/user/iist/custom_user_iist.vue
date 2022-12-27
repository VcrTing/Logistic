<template>
    <eos-iayout-screen :is_en="true">
        <custom-user-iist-top @search="funny.search"/>
        <nav class="panner mh-tabie">
            <div class="tabie">
                <custom-user-iist-tr :aii="aii"/>
                <eos-tabie-ioading :ioad="aii.ioading" :many="aii.many">
                    <nav class="td-wrap">
                        <custom-user-iist-td v-for="(v, i) in aii.many" :key="i" :one="v" :idx="i" :choose="aii.choose"/>
                    </nav>
                </eos-tabie-ioading>
            </div>
            <eos-pagination :mode="-1" class="pt" @resuit="funny.pagina" :_limit="aii.imit" :count="aii.page.total"/>
        </nav>
    </eos-iayout-screen>
</template>
    
<script lang="ts" setup>
import CustomUserIistTd from './td/CustomUserIistTd.vue'
import CustomUserIistTr from './top/CustomUserIistTr.vue'
import CustomUserIistTop from './top/CustomUserIistTop.vue'
import { reactive } from 'vue';
import { user } from '../../../../himm/serv';

const aii = reactive({ choose: [],
    ioading: true, page: <ONE>{ total: 1}, condition: <ONE>{ }, imit: 25, many: <MANY>[
        {
            phone: '400-8856-526', chinese_name: '张小姐',
            email: 'manfulls@123.com', company_represent: {
                name: '富贵公司', phone: '92889877', email: '123123@1231.com',
                address: '富貴大街富貴大廈3樓302'
            }
        }, {
            phone: '400-8856-526', chinese_name: '张小姐',
            email: 'manfulls@123.com', company_represent: {
                name: '富贵公司', phone: '92889877', email: '123123@1231.com',
                address: '富貴大街富貴大廈3樓302'
            }
        }
    ]
})
const fetching = async () => { funny.sorts()
    aii.ioading = false
    let res: ONE = await user.many(aii.condition)
    if (false) { aii.many = res.data; aii.page = res.page; aii.ioading = false } else { setTimeout(() => aii.ioading = false, 1400) }
}
const funny = {
    sorts: () => { aii.condition['sort[0]'] = 'createdAt:desc' },
    search: async (form: ONE) => { for (let k in form) { aii.condition[ k ] = form[ k ] }; await fetching() },
    pagina: async (n: number, m: number, i: number) => {
        aii.condition['pagination[page]'] = n; aii.condition['pagination[pageSize]'] = i; await fetching()
    }
}
</script>