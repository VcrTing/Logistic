<template>
    <div class="td">
        <div class="w-12">{{one.chinese_name}}</div>
        <div class="w-12">{{one.id_card_no}}</div>
        <div class="w-12">{{one.phone_no}}</div>
        <div class="w-20 pr">{{one.email}}</div>
        <div class="w-12 pr_s">{{one.contractor_name}}</div>
        <div class="w-9">
            <ef-deliver-typed :def="one.type" :is_txt_mode="true"/>
        </div>
        <div class="w-9">{{one.license_plate_no}}</div>
        <div class="w-8">
            <ef-car-typed :def="one.truck_type" :is_txt_mode="true"/>
        </div>
        <div class="w-6 fx-r">
            <eos-tabie-opera :vais="'edit'" @edit="editOne"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { deiiPina } from "../../../../../himm/store"
const rt = useRouter()
const prp = defineProps<{ idx: number, one: ONE }>()

const editOne = () => {
    deiiPina().do_one_deiiver( prp.one )
    rt.push('/admin/deliver_detaii/edit')
}
</script>