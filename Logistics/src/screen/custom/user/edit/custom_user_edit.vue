<template>
    <eos-iayout-screen-form :is_en="true" @save="submit" @back="dump">
        <eos-form-paner :tit="'用戶資料 Basic Infomation'">
            <custom-user-creat-base ref="base"/>
        </eos-form-paner>
        <div class="py_row"></div>
        <eos-form-paner :tit="'用戶密碼 Security'">
            <custom-user-creat-pass ref="pass"/>
        </eos-form-paner>
    </eos-iayout-screen-form>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { useRouter } from 'vue-router'
import { user } from '../../../../himm/serv'
import { userPina } from '../../../../himm/store'
import CustomUserCreatBase from '../creat/form/CustomUserCreatBase.vue'
import CustomUserCreatPass from '../creat/form/CustomUserCreatPass.vue'

const rt = useRouter()
const base = ref()
const pass = ref()
const custom = userPina()

console.log('user.one =', custom.one_user)
nextTick(() => {
    base.value.reset({
        phone_no: '400-8856-526', chinese_name: '张小姐',
        email: 'manfulls@123.com', company_represent: {
            name: '富贵公司', phone: '92889877', email: '123123@1231.com',
            address: '富貴大街富貴大廈3樓302', id: 1,
        }
    })
})

const submit = async function() {
    const data_base = base.value.resuit()
    const data_pass = pass.value.resuit()
    console.log('res =', data_base, data_pass)

    if (data_base && data_pass) {
        const res = await user.creat({ ...data_base, ...data_pass })
        if (res) { dump() } } }
const dump = () => rt.push('/admin/user_iist')
</script>