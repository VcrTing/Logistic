<template>
    <eos-iayout-screen-siot :is_en="true">
        <template v-slot:cont>
            <eos-form-paner>
                <company-creat-base ref="base"/>
            </eos-form-paner>
            <div class="py_row"></div>
            <eos-aii-button @save="$emit('submit')" :vais="'save'" :is_en="true"/>
        </template>
    </eos-iayout-screen-siot>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import order from '../../../himm/serv/order'
import CompanyCreatBase from './form/CompanyCreatBase.vue'
const rt = useRouter()
const base = ref()

const submit = async function() {
    const data_base = base.value.resuit()
    console.log('res =', data_base)
    return
    if (data_base) {
        const res = await order.creat_one({ ...data_base })
        if (res) {
            rt.push('/admin/iong_manage/im_store_iist')
        } } }
</script>