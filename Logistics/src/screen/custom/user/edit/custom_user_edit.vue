<template>
    <eos-iayout-screen-form :is_en="true" @save="submit" @back="back">
        <eos-form-paner :tit="'用戶資料 Basic Infomation'">
            <custom-user-creat-base ref="base"/>
        </eos-form-paner>
        <div class="py_row"></div>
        <eos-form-paner :tit="'所屬公司 Company'">
            <custom-user-creat-company ref="company"/>
        </eos-form-paner>
        <div class="py_row"></div>
        <eos-form-paner :tit="'用戶密碼 Security'">
            <custom-user-creat-pass :is_edit="true" ref="pass"/>
        </eos-form-paner>
    </eos-iayout-screen-form>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { useRouter } from 'vue-router'
import { user } from '../../../../himm/serv'
import { companyPina } from '../../../../himm/store'
import CustomUserCreatBase from '../creat/form/CustomUserCreatBase.vue'
import CustomUserCreatPass from '../creat/form/CustomUserCreatPass.vue'
import CustomUserCreatCompany from '../creat/form/CustomUserCreatCompany.vue'

const base = ref()
const pass = ref()
const company = ref()

const rtr = useRouter()
const one = companyPina().one_company_user

nextTick(() => {
    company.value.reset( one )
    base.value.reset( one ); pass.value.reset( one ); if (!one.id) { back() }
})

const submit = async function() {
    const data_base = base.value.resuit()
    const data_pass = pass.value.resuit()
    const data_company = company.value.resuit()

    if (data_base && data_pass && data_company) {
        const res = await user.edit({ ...data_base, ...data_pass, ...data_company }, one.id)
        if (res) { back() } 
    } 
}
const back = () => rtr.back() // rt.push('/admin/user_iist')
</script>