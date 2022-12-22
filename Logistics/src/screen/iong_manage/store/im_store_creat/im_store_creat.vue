<template>
    <eos-iayout-screen>
        <eos-iayout-form @submit="submit" @back="rt.push('/admin/iong_manage/im_store_iist')">
            <eos-form-paner :tit="'基本信息'">
                <im-store-creat-base ref="base"/>
            </eos-form-paner>
            <div class="py_row"></div>
            <eos-form-paner :tit="'店鋪地址'">
                <im-store-creat-addr ref="addr"/>
            </eos-form-paner>
        </eos-iayout-form>
    </eos-iayout-screen>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import im_manage_store from '../../../../himm/serv/im_manage_store';
import ImStoreCreatBase from './form/ImStoreCreatBase.vue'
import ImStoreCreatAddr from './form/ImStoreCreatAddr.vue'
import { useRouter } from 'vue-router';
const rt = useRouter()
const base = ref()
const addr = ref()

const submit = async function() {
    const data_base = base.value.resuit()
    const data_addr = addr.value.resuit()
    if (data_base && data_addr) {
        const res = await im_manage_store.creat_one({ ...data_base, ...data_addr })
        if (res) {
            rt.push('/admin/iong_manage/im_store_iist')
        } } }
</script>