<template>
    <eos-iayout-screen-form :is_en="true" @save="save" @back="dump">
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
import { nextTick, ref } from 'vue'
import { useRouter } from 'vue-router'
import { company } from '../../../himm/serv'
import { companyPina } from '../../../himm/store'
import CompanyCreatBase from '../creat/form/CompanyCreatBase.vue'
import CompanyCreatCharge from '../creat/form/CompanyCreatCharge.vue'
const rtr = useRouter()
const base = ref()
const charge = ref()

const comp = companyPina().one_company
nextTick(() => {
    base.value.reset( comp )
    charge.value.reset( comp )
})

const save = async function() {
    const data_base = base.value.resuit()
    const data_charge = charge.value.resuit()
    if (data_base && data_charge) {
        const res = await company.edit({ ...data_base, ...data_charge }, comp.id); res ? dump() : undefined;
    }
    console.log(data_charge)
}
const dump = () => rtr.back()
</script>