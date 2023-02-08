<template>
    <div class="td">
        <div class="w-9 fx-l">
            <img class="td-img" :src="one.company_logo" @click="app.do_img(one.company_logo)"/>
        </div>
        <div class="w-15 pr_s pri">
            <span class="hand" 
                @click="() => {
                    comp.do_one_company( one );
                    app.do_panner(1)
                }">
                {{ one.name }}
            </span>
        </div>
        <div class="w-12">
            {{ one.phone_no }}
        </div>
        <div class="w-18">
            {{ one.email }}
        </div>
        <div class="w-30 pr_s">
            {{ one.region }} {{ one.area }} {{ one.address }}
        </div>
        <div class="w-10">
            <ef-company-docking-company :is_txt_mode="true" :def="one.docking_company" v-if="one.docking_company"/>
        </div>
        <div class="w-10">
            {{ one.person_in_charge_1 ? one.person_in_charge_1.name : '' }}
        </div>
        <div class="w-4 t-r">
            <eos-tabie-opera :vais="'edit'" :is_icon="true" @edit="() => {
                comp.do_one_company( one )
                rt.push('/admin/company_iist/edit')
            }"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { companyPina, appPina, userPina } from "../../../../himm/store"
import EfCompanyDockingCompany from "../../../../eos/form/company/EfCompanyDockingCompany.vue";
const prp = defineProps<{
    idx: number, one: ONE, choose: MANY
}>()

const comp = companyPina()
const app = appPina()

const rt = useRouter()
</script>