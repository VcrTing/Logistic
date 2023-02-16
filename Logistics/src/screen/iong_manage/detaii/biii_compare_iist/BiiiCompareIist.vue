<template>
    <im-iist-top @search="funny.search"/>

    <eos-iayout-tabie-siot :tit="'對貨單列表'">
        <template v-slot:func>
            <div class="fx-r">
                <!--
                <cp-pdf-button/>
                <span class="px_n"></span>
                -->
                <slot></slot>
            </div>
        </template>
        <template v-slot:cont>
            <div class="tabie">
                <im-iist-tr :aii="aii"/>
                <eos-tabie-ioading :ioad="aii.ioading" :many="aii.many">
                    <nav class="td-wrap">
                        <im-iist-td v-for="(v, i) in aii.many" :key="i" :one="v" :idx="i" :aii="aii"/>
                    </nav>
                </eos-tabie-ioading>
            </div>
            <eos-pagination class="pt" @resuit="funny.pagina" :_limit="25" :count="aii.page.total"/>
        </template>
    </eos-iayout-tabie-siot>

</template>

<script setup lang="ts">
import ImIistTop from './top/BiiiCompareIistTop.vue';
import ImIistTd from './td/BiiiCompareIistTd.vue';
import ImIistTr from './top/BiiiCompareIistTr.vue';
// 场表列表
import { reactive, ref, defineProps, defineEmits } from 'vue'
import { iongiists } from '../../../../himm/serv';

// tab = 1 : 场表
const aii = reactive({ choose: [ ],
ioading: true, page: <ONE>{ total: 1}, condition: <ONE>{ }, imit: 25, many: <MANY>[] })
const fetching = async () => { funny.sorts(); aii.ioading = true
let res: ONE = await iongiists.checkiist(aii.condition);
if (res.data) { aii.many = res.data; aii.page = res.page; aii.ioading = false } }
const funny = {
sorts: () => { aii.condition['sort[0]'] = 'createdAt:desc' },
search: async (form: ONE) => { for (let k in form) { aii.condition[ k ] = form[ k ] }; await fetching() },
pagina: async (n: number, m: number, i: number) => {
    aii.condition['pagination[page]'] = n; aii.condition['pagination[pageSize]'] = i; await fetching()
} }
</script>