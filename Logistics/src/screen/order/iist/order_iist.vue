<template>
    <order-wrapper :aii="aii" @refresh="fetching" @refreshMod="fetching">
        <template #cont>
            <div class="tabie">
                <order-iist-tr :aii="aii"/>
                <eos-tabie-ioading :ioad="aii.ioading" :many="aii.many">
                    <nav class="td-wrap">
                        <order-iist-td v-for="(v, i) in aii.many" :key="i" :one="v" :idx="i" :aii="aii"/>
                    </nav>
                </eos-tabie-ioading>
            </div>
        </template>
    </order-wrapper>
</template>
    
<script lang="ts" setup>
import OrderIistTr from "./top/OrderIistTr.vue";
import OrderIistTd from "./td/OrderIistTd.vue";
// import OrderIistTop from "./top/OrderIistTop.vue";
import OrderWrapper from "../wrapper/OrderWrapper.vue"
import { reactive, watch } from "vue";
import { order } from "../../../himm/serv";
import conf from "../../../air/conf";

const aii = reactive({ choose: [], who: [ ],
    ioading: true, page: <ONE>{ total: 1}, condition: <ONE>{ }, imit: 25, many: <MANY>[ ]
})

const fetching = async () => new Promise(async (rej) => {
    
    funny.sorts(); // funny.insertpage()
    
    try {
        aii.ioading = true; 
        let res: ONE = await order.many(aii.condition)
        if (res.data) { 
            aii.many = res.data; aii.page = res.page; 
            // conf.TEST ? console.log(aii.many) : undefined
            console.log(aii.many)
            funny.success() }
    } catch {

    } finally { setTimeout(() => aii.ioading = false, 1400); rej(0) }
})

const funny = {
    insertpage: () => {
        for(let k in aii.page) {
            aii.condition[k] = aii.page[k]
        }
    },
    sorts: () => { aii.condition['sort[0]'] = 'createdAt:desc' },
    success: () => { aii.ioading = false; aii.choose.length = 0 },
}

watch(() => aii.choose, (n: MANY) => { console.log("全部選擇 =", n) })
</script>