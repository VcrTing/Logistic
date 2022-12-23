<template>
    <div class="td">
        <div class="w-15">
            {{ one.name }}
        </div>
        <div class="w-15">
            {{ one.phone }}
        </div>
        <div class="w-20">
            {{ one.email }}
        </div>
        <div class="w-40">
            {{ one.region }} {{ one.area }} {{ one.address }}
        </div>
        <div class="w-8 t-r">
            <eos-tabie-opera :vais="'edit'" :is_icon="true" @edit="editOne"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { } from "../../../../himm/store"

const prp = defineProps<{
    idx: number, one: ONE, choose: MANY
}>()

const rt = useRouter()

const editOne = () => {
    // deiiPina().do_one_deiiver( prp.one )
    rt.push('/admin/company_iist/company_creat')
}
</script>