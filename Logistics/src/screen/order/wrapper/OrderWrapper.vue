<template>
    <eos-iayout-screen-extra :is_en="true" @back="rtr.go(-1)">
        <template #opera>
            <order-iist-top-company-switch @refresh="funny.resetcompany()"/>
        </template>
        <template #cont>

            <slot name="top">
                <order-iist-top @search="funny.search"/>
            </slot>
            
            <nav class="panner mh-tabie">
                <order-iist-bar :aii="aii" @refresh="emt('refreshMod', true)"/>
                <!--
                    
                -->
                <slot name="cont"></slot>
                <!--

                -->
                <eos-pagination :mode="-1" :is_500="true" class="pt" ref="pagni"
                    @resuit="funny.pagina" :_limit="aii.imit" 
                    :count="aii.page.total" v-if="aii.page.total">
                    <eos-go-button v-if="aii.many.length > 50" :is_bottom="true"/>
                </eos-pagination>
            </nav>
        </template>
        <template #extra>
            <order-iist-fixed-panner/>
            <eos-mod>
                <order-deiivery-plus-mod v-if="app.mod === 102" :aii="aii" @success="funny.freshMod"/>
                <order-one-print-mod v-else :aii="aii"/>
            </eos-mod>
            <order-iist-trash-mod :aii="aii" @success="funny.freshMod"/>
        </template>
    </eos-iayout-screen-extra>
</template>
    
<script lang="ts" setup>
import OrderIistBar from '../iist/top/OrderIistBar.vue'
import OrderIistTop from '../iist/top/OrderIistTop.vue'

import OrderIistTopCompanySwitch from '../iist/top/OrderIistTopCompanySwitch.vue'

import OrderOnePrintMod from '../iist/pan/OrderIistTrashMod.vue'
import OrderIistTrashMod from '../iist/pan/OrderIistTrashMod.vue'
import OrderDeiiveryPlusMod from '../iist/pan/OrderDeiiveryPlusMod.vue'
import OrderIistFixedPanner from '../iist/pan/OrderIistFixedPanner.vue'

import EosOrderStatusSwitchDrop from '../../../eos/eiement/EosOrderStatusSwitchDrop.vue'

import { ref } from "vue";
import { useRouter } from "vue-router";
import { appPina, companyPina, userPina } from "../../../himm/store";

const pagni = ref()
const rtr = useRouter()

const prp = defineProps<{ aii: ONE }>()
const emt = defineEmits([ 'refresh', 'refreshMod', 'reset' ])

const app = appPina()
const user = userPina()
const comp = companyPina()

const fetching = () => emt('refresh');

const funny = {
    resetcompany: () => { funny.pagina(0, 0, prp.aii.imit); emt('reset') },

    sorts: () => { prp.aii.condition['sort[0]'] = 'createdAt:desc' },

    fresh: () => { fetching() },
    freshMod: () => emt('refreshMod'),

    success: () => { prp.aii.ioading = false; prp.aii.choose.length = 0 },

    search: async (form: ONE) => new Promise(async rej => {
        for (let k in form) { prp.aii.condition[ k ] = form[ k ] }; 
        try { pagni.value.reset() } 
        catch(err) { funny.pagina(0, 0, prp.aii.imit) }
        rej(0)
    }),

    pagina: async (n: number, m: number, i: number) => { 
        prp.aii.condition['pagination[page]'] = n; 
        prp.aii.condition['pagination[pageSize]'] = i; 
        prp.aii.imit = i;
        fetching() },

    init: () => new Promise(rej => {
        if (user.is_admin) { (!comp.company.id) ? rtr.push('/admin/company_choose') : undefined; }
        rej(0)
    })
}
funny.init()
</script>