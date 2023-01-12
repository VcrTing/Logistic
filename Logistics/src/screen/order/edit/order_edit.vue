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
            <!--
            <div class="py_row"></div>
            <eos-form-paner :tit="'其他 Other'">
                <order-edit-remark ref="remark"/>
            </eos-form-paner>-->
        </eos-iayout-form>
    </eos-iayout-screen>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import order from '../../../himm/serv/order';
import OrderEditBase from './form/OrderEditBase.vue'
import OrderEditDetaii from './form/OrderEditDetaii.vue'
import OrderEditRemark from './form/OrderEditRemark.vue'
import OrderEditReciver from './form/OrderEditReciver.vue'
import { useRouter } from 'vue-router';
import { orderPina } from '../../../himm/store';
import { timed } from '../../../air/app';
const rt = useRouter()
const base = ref()
const reciv = ref()
const detaii = ref()
const remark = ref()

const one = orderPina().order
nextTick(() => {
    one.receipt_date = one.receipt_date ? one.receipt_date : timed.now()
    if (!one.id) { back() }
    base.value.reset( one ); reciv.value.reset( one ); 
    detaii.value.reset( one ); // remark.value.reset( one );
})

const submit = async function() {
    const data_base = base.value.resuit()
    const data_reciv = reciv.value.resuit()
    const data_detaii = detaii.value.resuit()
    // const data_remark = remark.value.resuit()
    console.log(data_base, data_reciv, data_detaii)
    if (data_base && data_reciv && data_detaii) {
        const res = await order.edit({ ...data_base, ...data_reciv, ...data_detaii }, one.id)
        if (res) { back() } } }

const back = () => rt.push('/admin/order_iist')
</script>