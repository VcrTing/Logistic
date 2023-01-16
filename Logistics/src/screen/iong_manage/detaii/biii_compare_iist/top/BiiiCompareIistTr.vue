<template>
    <nav class="tr">
        <eos-tabie-choose-item-tr :aii="aii">
            <div class="w-9 pr_s"><span class="hide-p">場表</span>編號</div>
            <div class="w-6 w-7-p ">Code</div>
            <div class="w-6 w-0-p">Code 2</div>

            <div class="w-9 w-10-p ">店鋪名稱</div>
            <div class="w-9 w-10-p">日期</div>

            <div class="w-7">Normal<div class="hide-p">Order</div></div>
            <div class="w-6">小跨區</div>

            <div class="w-5 w-6-p">
                <div class="fs_s_ipt">Cross<br/>Zone</div>
            </div>

            <div class="w-6 pr_s">
                <div class="fs_s_ipt">24 Hours</div>
            </div>
            <div class="w-7 w-8-p pr_s">
                <div class="fs_s_ipt">24 Hours<br/>Cross Zone</div>
            </div>

            <div class="w-6 pr_s">
                <div class="fs_s_ipt">Hamper</div>
            </div>
            <div class="w-7 pr_s">
                <div class="fs_s_ipt">Hamper Cross Zone</div>
            </div>

            <div class="w-6 w-7-p pr_s">
                <div class="fs_s_ipt">X'Mas Tree</div>
            </div>
            <div class="w-6">
                <div class="fs_s_ipt">X'Mas Tree Cross Zone</div>
            </div>

            <div class="w-5"></div>
        </eos-tabie-choose-item-tr>
    </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const prp: ONE = defineProps<{
    aii: ONE
}>()
</script>