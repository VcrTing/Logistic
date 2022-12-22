<template>
    <nav class="tr">
        <eos-tabie-choose-item-tr :many="aii.many" :choose="aii.choose">
            <div class="w-5 w-0-p">序號</div>
            <div class="w-8 w-9-p"><span class="hide-p">場表</span>編號</div>
            <div class="w-7">Code</div>
            <div class="w-7">Code2</div>
            <div class="w-10">店鋪名稱</div>
            <div class="w-5">地區</div>
            <div class="w-5">區域</div>
            <div class="w-7">區域2</div>
            <div class="w-10">送貨員電話</div>
            <div class="w-9">日期</div>
            <div class="w-7 t-c"><span class="hide-p">訂單</span>數量</div>
            <div class="w-9">送貨員報數</div>
            <div class="w-5 w-7-p t-c">後加單</div>
            <div class="w-6 w-8-p"></div>
        </eos-tabie-choose-item-tr>
    </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const prp: ONE = defineProps<{
    aii: ONE
}>()
</script>