<template>
    <eos-iayout-screen>
        <eos-iayout-form @submit="submit" @back="back">
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
import { reactive, ref, nextTick } from 'vue'
import im_manage_store from '../../../../himm/serv/im_manage_store';
import ImStoreCreatBase from '../im_store_creat/form/ImStoreCreatBase.vue'
import ImStoreCreatAddr from '../im_store_creat/form/ImStoreCreatAddr.vue'
import { useRouter } from 'vue-router';
import { imPina } from '../../../../himm/store';
const rt = useRouter()
const base = ref()
const addr = ref()

const one: ONE = imPina().one_store
nextTick(() => { if (one) {
    base.value.reset(one); addr.value.reset(one)
    if (!one.code_1) { back() }
} })
const submit = async function() {
    const data_base = base.value.resuit()
    const data_addr = addr.value.resuit()
    if (data_base && data_addr) {
        const res = await im_manage_store.patch({ ...data_base, ...data_addr }, one.code_1)
        if (res) { back() } 
    }
}
const back = () => rt.push('/admin/iong_manage/im_store_iist')
</script>