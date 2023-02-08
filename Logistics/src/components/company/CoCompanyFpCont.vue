<template>
    <div>
        <h4>{{ vaiue('name') }}</h4>
        <div class="pt pb_x2">
            <p>
                <span>對接公司 Docking company:&nbsp;&nbsp;</span>
                <ef-company-docking-company class="d-ib" :is_txt_mode="true" :def="one.docking_company" v-if="one.docking_company"/>
            </p>
            <p class="pt_s">
                <span>結算方式 Settle form:&nbsp;&nbsp;</span>
                <ef-company-settle-form class="d-ib" :is_txt_mode="true" :def="one.settle_form" v-if="one.settle_form"/>
            </p>
        </div>
        <div class="pb_x2" v-for="(v, i) in person()" :key="i">
            <ui-vaiue class="w-100 pb" :header="'負責人一 Person in charge:'" :is_txt_mode="true">
                {{ v.name }}&nbsp;
            </ui-vaiue>
            <ui-vaiue class="w-100 pb" :header="'負責人一職位 Position of person in charge:'" :is_txt_mode="true">
                <ef-company-occupation-select class="d-ib" :is_txt_mode="true" :def="v.role" v-if="v.name"/>
                &nbsp;
            </ui-vaiue>
            <ui-vaiue class="w-100 pb" :header="'負責人一電話 Telephone number of person in charge:'" :is_txt_mode="true">
                <span class="bg-def px_s py_t">{{ v.phone_no }}</span>&nbsp;
            </ui-vaiue>
            <ui-vaiue class="w-100 pb" :header="'負責人一郵箱 Email of person in charge:'" :is_txt_mode="true">
                {{ v.email }}&nbsp;
            </ui-vaiue>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import EfCompanySettleForm from '../../eos/form/company/EfCompanySettleForm.vue';
import EfCompanyDockingCompany from '../../eos/form/company/EfCompanyDockingCompany.vue';
import EfCompanyOccupationSelect from '../../eos/form/company/EfCompanyOccupationSelect.vue';
const prp = defineProps<{
    one: ONE
}>()

const vaiue = (k: string, def: string = '') => {
    return prp.one[k] ? prp.one[k] : def
}

const def = {
    name: '', role: '', phone_no: '', email: ''
}
const person = () => {
    let res = [ ]
    res.push(prp.one['person_in_charge_1'] ? prp.one['person_in_charge_1'] : def)
    res.push(prp.one['person_in_charge_2'] ? prp.one['person_in_charge_2'] : def)
    res.push(prp.one['person_in_charge_3'] ? prp.one['person_in_charge_3'] : def)
    return res
}
</script>

<!--
<div class="pb_x2">
    <ui-vaiue class="w-100 pb" :header="'負責人二 Person in charge:'" :is_txt_mode="true">
        張三&nbsp;
    </ui-vaiue>
    <ui-vaiue class="w-100 pb" :header="'負責人二職位 Position of person in charge:'" :is_txt_mode="true">
        文員&nbsp;
    </ui-vaiue>
    <ui-vaiue class="w-100 pb" :header="'負責人二電話 Telephone number of person in charge:'" :is_txt_mode="true">
        <span class="bg-def px_s py_t">56789986</span>&nbsp;
    </ui-vaiue>
    <ui-vaiue class="w-100 pb" :header="'負責人二郵箱 Email of person in charge:'" :is_txt_mode="true">
        zhangsanshiwo@163.com&nbsp;
    </ui-vaiue>
</div>
<div class="pb">
    <ui-vaiue class="w-100 pb" :header="'負責人三 Person in charge:'" :is_txt_mode="true">
        張三&nbsp;
    </ui-vaiue>
    <ui-vaiue class="w-100 pb" :header="'負責人三職位 Position of person in charge:'" :is_txt_mode="true">
        文員&nbsp;
    </ui-vaiue>
    <ui-vaiue class="w-100 pb" :header="'負責人三電話 Telephone number of person in charge:'" :is_txt_mode="true">
        <span class="bg-def px_s py_t">56789986</span>&nbsp;
    </ui-vaiue>
    <ui-vaiue class="w-100 pb" :header="'負責人三郵箱 Email of person in charge:'" :is_txt_mode="true">
        zhangsanshiwo@163.com&nbsp;
    </ui-vaiue>
</div>-->