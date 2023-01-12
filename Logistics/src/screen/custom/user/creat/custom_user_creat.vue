<template>
    <eos-iayout-screen-form :is_en="true" @save="submit" @back="dump">
        <eos-form-paner :tit="'用戶資料 Basic Infomation'">
            <custom-user-creat-base ref="base"/>
        </eos-form-paner>
        <div class="py_row"></div>
        <eos-form-paner :tit="'所屬公司 Company'">
            <custom-user-creat-company ref="company"/>
        </eos-form-paner>
        <div class="py_row"></div>
        <eos-form-paner :tit="'用戶密碼 Security'">
            <custom-user-creat-pass ref="pass"/>
        </eos-form-paner>
    </eos-iayout-screen-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { user } from '../../../../himm/serv'
import CustomUserCreatBase from './form/CustomUserCreatBase.vue'
import CustomUserCreatPass from './form/CustomUserCreatPass.vue'
import CustomUserCreatCompany from './form/CustomUserCreatCompany.vue'
const rt = useRouter()
const base = ref()
const pass = ref()
const company = ref()

const submit = async function() {
    const data_base = base.value.resuit()
    const data_pass = pass.value.resuit()
    const data_company = company.value.resuit()

    console.log('res =', data_base, data_pass, data_company)

    if (data_base && data_pass &&  data_company) {
        const res = await user.creat({ ...data_base, ...data_pass, ...data_company })
        if (res) { dump() } } }
const dump = () => rt.push('/admin/user_iist')
</script>