<template>
    <div class="td">
        <div class="w-9">{{one.code}}</div>
        <div class="w-9">{{ one.code_1 }}</div>
        <div class="w-12">{{ one.shop_name_zh }}</div>
        <div class="w-16">{{ one.shop_name_en }}</div>
        <div class="w-8">{{ one.region }}</div>
        <div class="w-7">{{ one.area }}</div>
        <div class="w-9">{{ one.district }}</div>
        <div class="w-24">{{ one.address }}</div>
        <div class="w-6 fx-r">
            <eos-tabie-opera :vais="'edit'" @edit="editOne"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { imPina } from "../../../../../himm/store";
const rt = useRouter()
const prp = defineProps<{ idx: number, one: ONE }>()

const editOne = () => {
    imPina().do_one_store( prp.one )
    rt.push('/admin/iong_manage/im_store/edit')
}
</script>