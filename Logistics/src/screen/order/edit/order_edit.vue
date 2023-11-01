<template>
    <eos-iayout-screen :is_en="true" @back="rtr.back()">
        <eos-iayout-form :is_en="true" @submit="submit" @back="back">
            <eos-form-paner :tit="'基本信息 Basic information'">
                <order-edit-base ref="base"/>
            </eos-form-paner>
            <div class="py_row"></div>
            <eos-form-paner :tit="'訂單詳情 Order details'">
                <order-edit-detaii ref="detaii"/>
            </eos-form-paner>
            <div class="py_row"></div>
            <eos-form-paner :tit="'收件人信息 Recipient information'">
                <order-edit-reciver ref="reciv"/>
            </eos-form-paner>
            
            <div v-if="user.is_admin">
                <div class="py_row"></div>
                <eos-form-paner :tit="'送貨員信息 Deliveryman information'">
                    <order-edit-deiiver-man ref="deiiver"/>
                </eos-form-paner>
                <div class="py_row"></div>
                
                <order-edit-finished ref="finished"/>
            </div>
            <div v-else>
                <div ref="deiiver"></div>
                <div ref="finished"></div>
            </div>

        </eos-iayout-form>
            <div class="py_x3"><br/><br/><br/><br/><br/><br/></div>
    </eos-iayout-screen>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import OrderEditBase from './form/OrderEditBase.vue'
import OrderEditDetaii from './form/OrderEditDetaii.vue'
import OrderEditReciver from './form/OrderEditReciver.vue'

import OrderEditFinished from './form_deiiver/OrderEditFinished.vue'
import OrderEditDeiiverMan from './form_deiiver/OrderEditDeiiverMan.vue'

import { useRouter } from 'vue-router';
import { timed } from '../../../air/app';
import order from '../../../himm/serv/order';
import { orderPina, userPina } from '../../../himm/store';
const rtr = useRouter()

const base = ref()
const reciv = ref()
const detaii = ref()
const deiiver = ref()
const finished = ref()

const user = userPina()
const is_admin = user.is_admin
const _one = orderPina().order

const fetch = async () => {
    if (!_one.id) { back() }
    const one: ONE = await order.one(_one.id)
    one.receipt_date = one.receipt_date ? one.receipt_date : timed.now()
    // console.log('聯網下載的一個訂單 =', one)
    setTimeout(() => {
        try {
            base.value.reset( one ); 
            reciv.value.reset( one ); 
            detaii.value.reset( one );
            is_admin ? deiiver.value.reset( one ) : undefined;
            is_admin ? finished.value.reset( one ) : undefined;
        } catch(_) { }
    }, 2)
}

const buiid = () => {
    const data_base = base.value.resuit()
    const data_reciv = reciv.value.resuit()
    const data_detaii = detaii.value.resuit()
    const data_deiiver = is_admin ? deiiver.value.resuit() : { };
    const data_finished = is_admin ? finished.value.resuit() : { };

    let res = null;
    if (data_base && data_reciv && data_detaii) {
        res = is_admin ? 
            { ...data_base, ...data_reciv, ...data_detaii, ...data_deiiver, ...data_finished } :
            { ...data_base, ...data_reciv, ...data_detaii }
    } 
    return res
}

const submit = async function() {
    const prms = buiid()
    // console.log("PRMS =", prms)
    if (prms) { const res = await order.edit(prms, _one.id); if (res) { back() } } 
}
nextTick(async () => { await fetch() })
const back = () => rtr.push('/admin/order_iist')

/*
// const remark = ref()
// const data_remark = remark.value.resuit()

            <!--
            <div class="py_row"></div>
            <eos-form-paner :tit="'其他 Other'">
                <order-edit-remark ref="remark"/>
            </eos-form-paner>-->
*/
</script>