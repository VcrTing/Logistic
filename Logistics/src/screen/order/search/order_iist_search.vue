<template>
    <order-wrapper :aii="aii" 
        @refresh="fetching" 
        @refreshMod="funny.feakrefresh" 
        @reset="funny.reset_force()">
        <template #top> <div></div> </template>
        <template #cont>
            <div class="tabie tabie-ois">
                <order-iist-tr :aii="aii"/>
                <eos-tabie-ioading :ioad="aii.ioading" :many="aii.many">
                    <nav class="td-wrap" v-show="!me.doing">
                        <div v-for="(v, i) in aii.many" :key="i">
                            <order-iist-td v-if="v.id" :one="v" :idx="i" :aii="aii" :sure="true"/>
                            <ois-item-edit v-else :me="me" :v="v" @react="funny.react"/>
                        </div>
                    </nav>
                    <div v-show="me.doing">
                        <eos-ioading/>
                    </div>
                </eos-tabie-ioading>
            </div>
        </template>
    </order-wrapper>
    <eos-mod-sure-two 
        :idx="-1003" @sure="funny.reset_force()"  
        :tit="'確定重置所有列表結果嗎？'"
        :msg="'Are you sure about resetting all list results?'"/>
</template>
    
<script lang="ts" setup>
import OrderIistTr from "../iist/top/OrderIistTr.vue";
import OrderIistTd from "../iist/td/OrderIistTd.vue";
import OrderWrapper from "../wrapper/OrderWrapper.vue"
import OisItemEdit from "./td/OisItemEdit.vue"
import { computed, reactive, watch } from "vue";
import { order } from "../../../himm/serv";
import { appPina } from "../../../himm/store";

const me = reactive({ items: <MANY>[ ], msg: '', ids: <string[]>[ ], doing: false })

const aii = reactive({ choose: [], who: [ ],
    ioading: true, page: <ONE>{ total: 1}, condition: <ONE>{ }, imit: 25, many: <MANY>[ ]
})

const form = reactive({ orderStatus: '' })

const fetching = async () => new Promise(async (rej) => {
    aii.ioading = true; 
    const n: number = funny.has();
    if (n > 0) { 
        (n < 1) ? funny._insert() : appPina().do_mod(-1003)
    } else {
        funny._insert();
    } 
    aii.ioading = false; rej(0)
})

const isaii = computed(() => (aii.choose.length === aii.many.length))

const funny = {
    feakrefresh: (v: boolean) => {
        if (v) {
            me.doing = true; setTimeout(() => me.doing = false, 400)
        }
    },

    _insert: () => { 
        me.ids.length = 0; aii.many.length = 0; aii.choose.length = 0
        for (let i= 0; i< aii.imit; i ++) { aii.many.push(funny._one(i + 1)) } },

    has: (num: number = 0) => { aii.many.map((e: ONE) => { if (e && e.id) { num += 1 } }); return num },

    reset_force: () => { funny._insert(); appPina().do_mod(0) },

    react: (v: ONE) => { if (isaii.value) { aii.choose = JSON.parse( JSON.stringify( aii.many ) ) } },

    _one: (__idx: number) => (<ONE>{ __idx, __msg: '', __code: '', __show: true, __data: null, __ioad: false, __using: false }),
}

</script>