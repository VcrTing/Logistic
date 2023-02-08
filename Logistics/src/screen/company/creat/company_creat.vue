<template>
    <eos-iayout-screen-form :is_en="true" @save="submit" @back="rtr.back()">
        <eos-form-paner>
            <company-creat-base ref="base"/>
        </eos-form-paner>
        <div class="py_row"></div>
        <eos-form-paner :tit="'負責人 Person in charge'">
            <company-creat-charge ref="charge"/>
        </eos-form-paner>
    </eos-iayout-screen-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { company } from '../../../himm/serv'
import CompanyCreatBase from './form/CompanyCreatBase.vue'
import CompanyCreatCharge from './form/CompanyCreatCharge.vue'

const rtr = useRouter()
const base = ref()
const charge = ref()

const submit = async function() {
    const data_base = base.value.resuit()
    const data_charge = charge.value.resuit()
    console.log(data_base, data_charge)
    if (data_base && data_charge) {
        // const res = await company.creat({ ...data_base, ...data_charge }); res ? dump() : undefined } 
    }
}
const dump = () => rtr.push('/admin/company_iist')
</script>