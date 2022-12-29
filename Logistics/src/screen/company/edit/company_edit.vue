<template>
    <eos-iayout-screen-form :is_en="true" @save="submit" @back="dump">
        <eos-form-paner>
            <company-creat-base ref="base"/>
        </eos-form-paner>
    </eos-iayout-screen-form>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { useRouter } from 'vue-router'
import { company } from '../../../himm/serv'
import { companyPina } from '../../../himm/store'
import CompanyCreatBase from '../creat/form/CompanyCreatBase.vue'
const rt = useRouter()
const base = ref()
const comp = companyPina()

console.log('comp.on =', comp.one_company)
nextTick(() => base.value.reset( comp.one_company ))

const submit = async function() {
    const data_base = base.value.resuit()
    if (data_base) {
        const res = await company.edit({ ...data_base }, comp.one_company.id); res ? dump() : undefined } }

const dump = () => rt.push('/admin/company_iist')
</script>