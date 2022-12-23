<template>
    <nav class="tr">
        <eos-tabie-choose-item-tr :many="aii.many" :choose="aii.choose">
            <div class="w-9">
                訂單日期<br/><p class="tr-en">Order date</p>
            </div>
            <div class="w-12">
                翔烽運單號碼<br/><p class="tr-en">CF waybill number</p>
            </div>
            <div class="w-12">
                客戶運單編號<br/><p class="tr-en">Waybill number</p>
            </div>
            <div class="w-7">
                訂單組<br/><p class="tr-en">Group</p>
            </div>
            <div class="w-9">
                派送時間<br/><p class="tr-en">Delivery time</p>
            </div>
            <div class="w-10">
                訂單編號<br/><p class="tr-en">Order No.</p>
            </div>
            <div class="w-9">
                收件人<br/><p class="tr-en">Reciver</p>
            </div>
            <div class="w-10">
                收件電話<br/><p class="tr-en">Phone</p>
            </div>
            <div class="w-16">
                地址<br/><p class="tr-en">Address</p>
            </div>
            <div class="w-6"></div>
        </eos-tabie-choose-item-tr>
    </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const prp: ONE = defineProps<{
    aii: ONE
}>()
</script>