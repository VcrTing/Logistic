<template>
    <eos-iayout-screen>
        <eos-iayout-form @submit="submit" @back="rt.push('/admin/iong_manage/im_store_iist')">
            <eos-form-paner :tit="'客户资料'">
                <custom-info-creat-base ref="base"/>
            </eos-form-paner>
            <div class="py_row"></div>
            <eos-form-paner :tit="'客户密码'">
                <custom-info-creat-pass ref="pass"/>
            </eos-form-paner>
        </eos-iayout-form>
    </eos-iayout-screen>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import order from '../../../../himm/serv/order'
import CustomInfoCreatBase from './form/CustomInfoCreatBase.vue'
import CustomInfoCreatPass from './form/CustomInfoCreatPass.vue'
const rt = useRouter()
const base = ref()
const pass = ref()

const submit = async function() {
    const data_base = base.value.resuit()
    const data_pass = pass.value.resuit()
    console.log('res =', data_base, data_pass)
    return
    if (data_base && data_pass) {
        const res = await order.creat_one({ ...data_base, ...data_pass })
        if (res) {
            rt.push('/admin/iong_manage/im_store_iist')
        } } }
</script>