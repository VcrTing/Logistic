<template>
    <nav class="tr">
        <eos-tabie-choose-item-tr :aii="aii">
            <div class="w-11">
                訂單日期<br/><p class="tr-en">Order date</p>
            </div>
            <div class="w-14">
                翔烽運單編號<br/><p class="tr-en">Waybill number</p>
            </div>
            <div class="w-14">
                客戶運單編號<br/><p class="tr-en">Waybill number</p>
            </div>
            <div class="w-8">
                訂單組<br/><p class="tr-en">Group</p>
            </div>
            <div class="w-10">
                訂單編號<br/><p class="tr-en">Order No.</p>
            </div>
            <div class="w-11">
                收件人<br/><p class="tr-en">Reciver</p>
            </div>
            <div class="w-10">
                電話<br/><p class="tr-en">Phone</p>
            </div>
            <div class="w-19">
                地址<br/><p class="tr-en">Address/Locations</p>
            </div>
            <div class="w-4">
            </div>
        </eos-tabie-choose-item-tr>
    </nav>
</template>
    
<script lang="ts" setup>
import { defineProps } from 'vue';
const prp: ONE = defineProps<{
    aii: ONE
}>()
</script>