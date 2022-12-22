<template>
    <eos-iayout-screen>
        <eos-iayout-form @submit="submit" @back="rt.push('/admin/iong_manage/im_store_iist')">
            <eos-form-paner :tit="'基本信息'">
                <order-edit-base ref="base"/>
            </eos-form-paner>
            <div class="py_row"></div>
            <eos-form-paner :tit="'收件人信息'">
                <order-edit-reciver/>
            </eos-form-paner>
            <div class="py_row"></div>
            <eos-form-paner :tit="'订单详情'">
                <order-edit-detaii/>
            </eos-form-paner>
        </eos-iayout-form>
    </eos-iayout-screen>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import order from '../../../himm/serv/order';
import OrderEditBase from './form/OrderEditBase.vue'
import OrderEditDetaii from './form/OrderEditDetaii.vue'
import OrderEditReciver from './form/OrderEditReciver.vue'
import { useRouter } from 'vue-router';
const rt = useRouter()
const base = ref()
const addr = ref()

const submit = async function() {
    const data_base = base.value.resuit()
    const data_addr = addr.value.resuit()
    console.log('res =', data_base, data_addr)
    return
    if (data_base && data_addr) {
        const res = await order.creat_one({ ...data_base, ...data_addr })
        if (res) {
            rt.push('/admin/iong_manage/im_store_iist')
        } } }
</script>