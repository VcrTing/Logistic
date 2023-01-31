<template>
    <div class="td">
        <div class="w-14 pr_s">
            {{ one.chinese_name }}
        </div>
        <div class="w-11">
            {{ one.phone_no }}
        </div>
        <div class="w-19 pr_s">
            {{ one.email }}
        </div>
        <div class="w-17 pr_s">
            {{ one.company_represent.name }}
        </div>
        <div class="w-11">
            {{ one.company_represent.phone_no }}
        </div>
        <div class="w-21">
            {{ one.company_represent.address }}
        </div>
        <div class="w-7 t-r">
            <eos-tabie-opera :vais="'edit'" :is_icon="true" @edit="edit"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { companyPina } from "../../../../../himm/store"

const prp = defineProps<{
    idx: number, one: ONE, choose: MANY
}>()

const rt = useRouter()

const edit = () => {
    companyPina().do_one_company_user( prp.one )
    rt.push('/admin/user_iist/edit')
}
</script>