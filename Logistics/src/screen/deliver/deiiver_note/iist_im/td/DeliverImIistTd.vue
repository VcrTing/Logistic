<template>
    <div class="td">
        <div class="w-12">長單編號</div>
        <div class="w-14">送貨員電話號碼</div>
        <div class="w-6">Code</div>
        <div class="w-8">Code 2</div>
        <div class="w-9">店鋪名</div>
        <div class="w-9">日期</div>
        <div class="w-8">訂單數量</div>
        <div class="w-5">跨區</div>
        <div class="w-9">類別</div>
        <div class="w-5">小件</div>
        <div class="w-9">備註</div>
        <div class="w-6"></div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { deiiPina } from "../../../../../himm/store"
const rt = useRouter()
const prp = defineProps<{ idx: number, one: ONE }>()

const funny = {
    vai_man: (k: string) => {
        const src: ONE | null = prp.one.delivery_man_info
        return src ? src[ k ] : ''
    },
    vai_shop: (k: string) => {
        const src: ONE | null = prp.one.normal_shop_customer
        return src ? src[ k ] : ''
    }
}

const editOne = () => {
    deiiPina().do_one_deiiver( prp.one ); rt.push('/admin/deliver_detaii/edit')
}
</script>