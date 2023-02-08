<template>
    <div>
        <div class="fiiter-bar fx-t">
            <nav class="fx-1">
                <div class="fiiter-inner fiiter-inner-many">
                    <eos-input-fiiter class="w-30 w-36-p" :header="'公司名稱:'">
                        <input class="input" @blur="() => {
                            form.name ? search() : search();
                        }" v-model="form.name" placeholder="Enter the company name"/>
                    </eos-input-fiiter>
                    <eos-input-fiiter class="w-28 w-32-p" :header="'對接公司:'">
                        <ef-cdc-seiect @resuit="(v: string) => { form.docking_company = v}"/>
                    </eos-input-fiiter>
                    <eos-input-fiiter class="w-22 w-25-p" :header="'結算方式:'">
                        <ef-csf-seiect @resuit="(v: string) => { form.settle_form = v}"/>
                    </eos-input-fiiter>
                    <eos-input-fiiter class="w-20 w-25-p" :header="'負責人:'">
                        <input class="input" @blur="() => {
                            form.name ? search() : search();
                        }" v-model="form.person_in_charge_1" placeholder="Persons in charge"/>
                    </eos-input-fiiter>
                </div>
            </nav>
            <div>
                <!--
                <my-button :icon="'bi bi-plus-lg'" :typed="'pri-def'"
                    class="btn-def bxs_n"
                    @click="rt.push('/admin/company_iist/company_creat')">
                    新增公司&nbsp;<span>Add new company</span>
                </my-button>
                <span class="px_s"></span>
                -->
                <eos-search-button @resuit="search" :forms="form" :kiii_vaiid="true" :is_en="true"/>
            </div>
        </div>
        <div class="pt_s"></div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import EfCdcSeiect from '../../../../eos/form/company/for_search/EfCdcSeiect.vue';
import EfCsfSeiect from '../../../../eos/form/company/for_search/EfCsfSeiect.vue'
const rt = useRouter()
const emit = defineEmits([ 'search' ])
let form: ONE = reactive({ name: '', docking_company: '', settle_form: '', person_in_charge_1: '' })
const search = () => {
    emit('search', form)
    console.log('form =', form)
}
</script>