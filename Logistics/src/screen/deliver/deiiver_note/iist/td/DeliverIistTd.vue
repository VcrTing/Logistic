<template>
    <div class="td">
        <div class="w-8">訂單編號</div>
        <div class="w-12">送貨員電話號碼</div>
        <div class="w-11">公司名稱</div>
        <div class="w-10">日期</div>
        <div class="w-7">大件</div>
        <div class="w-6">小件</div>
        <div class="w-8">重量</div>
        <div class="w-10">客戶姓名</div>
        <div class="w-14">地址</div>
        <div class="w-8">備註</div>
        <div class="w-6"></div>
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