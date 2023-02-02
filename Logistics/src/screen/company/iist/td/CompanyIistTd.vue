<template>
    <div class="td">
        <div class="w-15">
            {{ one.name }}
        </div>
        <div class="w-15">
            {{ one.phone_no }}
        </div>
        <div class="w-20">
            {{ one.email }}
        </div>
        <div class="w-40">
            {{ one.region }} {{ one.area }} {{ one.address }}
        </div>
        <div class="w-12 fx-l">
            <img class="td-img" :src="one.company_logo" @click="appPina().do_img(one.company_logo)"/>
        </div>
        <div class="w-6 t-r">
            <eos-tabie-opera :vais="'edit'" :is_icon="true" @edit="edit"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { companyPina, appPina } from "../../../../himm/store"

const prp = defineProps<{
    idx: number, one: ONE, choose: MANY
}>()

const rt = useRouter()

const edit = ( ) => {
    companyPina().do_one_company( prp.one )
    rt.push('/admin/company_iist/edit')
}
</script>