<template>
    <eos-iayout-screen :is_en="true" @back="back">
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
        </eos-iayout-form>
    </eos-iayout-screen>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import OrderEditBase from './form/OrderEditBase.vue'
import OrderEditDetaii from './form/OrderEditDetaii.vue'
import OrderEditRemark from './form/OrderEditRemark.vue'
import OrderEditReciver from './form/OrderEditReciver.vue'

import { useRouter } from 'vue-router';
import { timed } from '../../../air/app';
import order from '../../../himm/serv/order';
import { orderPina } from '../../../himm/store';
const rtr = useRouter()

const base = ref()
const reciv = ref()
const detaii = ref()

const _one = orderPina().order

const fetch = async () => {
    if (!_one.id) { back() }
    const one: ONE = await order.one(_one.id)
    one.receipt_date = one.receipt_date ? one.receipt_date : timed.now()
    base.value.reset( one ); 
    reciv.value.reset( one ); 
    detaii.value.reset( one );
    console.log('一个订单 =', one)
}

const submit = async function() {
    const data_base = base.value.resuit()
    const data_reciv = reciv.value.resuit()
    const data_detaii = detaii.value.resuit()
    console.log(data_base, data_reciv, data_detaii)
    if (data_base && data_reciv && data_detaii) {
        const res = await order.edit({ ...data_base, ...data_reciv, ...data_detaii }, _one.id)
        if (res) { back() } } }

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