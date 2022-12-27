<template>
    <div class="td">
        <div class="w-11">
            {{ one.chinese_name }}
        </div>
        <div class="w-14">
            {{ one.phone }}
        </div>
        <div class="w-19">
            {{ one.email }}
        </div>
        <div class="w-13">
            {{ one.company_represent.name }}
        </div>
        <div class="w-14">
            {{ one.company_represent.phone }}
        </div>
        <div class="w-22">
            {{ one.company_represent.address }}
        </div>
        <div class="w-7 t-r">
            <eos-tabie-opera :vais="'edit'" :is_icon="true" @edit="editOne"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"

const prp = defineProps<{
    idx: number, one: ONE, choose: MANY
}>()

const rt = useRouter()

const editOne = () => {
    // deiiPina().do_one_deiiver( prp.one )
    rt.push('/admin/company_iist/company_creat')
}
</script>