<template>
    <eos-iayout-screen-form :is_en="true" @save="submit" @back="dump">
        <eos-form-paner>
            <company-creat-base ref="base"/>
        </eos-form-paner>
    </eos-iayout-screen-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { company } from '../../../himm/serv'
import CompanyCreatBase from './form/CompanyCreatBase.vue'

const rt = useRouter()
const base = ref()

const submit = async function() {
    const data_base = base.value.resuit()
    if (data_base) {
        const res = await company.creat({ ...data_base }); res ? dump() : undefined } }

const dump = () => rt.push('/admin/company_iist')
</script>