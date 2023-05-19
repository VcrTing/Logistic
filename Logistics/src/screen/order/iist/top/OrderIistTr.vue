<template>
    <nav class="tr">
        <eos-tabie-choose-item-tr :aii="aii">
            <div class="w-9">
                創建日期<br/><p class="tr-en">Create date</p>
            </div>
            <div class="w-13">
                翔烽運單號碼<br/><p class="tr-en">CF waybill number</p>
            </div>
            <div class="w-13">
                客戶運單編號<br/><p class="tr-en">Waybill number</p>
            </div>
            <div class="w-10">
                訂單組<br/><p class="tr-en">Group</p>
            </div>
            <div class="w-12 w-11-p">
                訂單編號<br/><p class="tr-en">Order No.</p>
            </div>

            <div class="w-9">
                派送日期<br/><p class="tr-en">Delivery date</p>
            </div>
            <div class="w-8">
                訂單日期<br/><p class="tr-en">Order date</p>
            </div>

            <div class="w-9">
                收件人<br/><p class="tr-en">Recipient</p>
            </div>
            <div class="w-7 w-8-p">
                收件電話<br/><p class="tr-en">Phone</p>
            </div>

            <div class="w-3"></div>
            <!--
            <div class="w-16 ">
                地址<br/><p class="tr-en">Address</p>
            </div>-->
            <div class="w-7 fx-r">
                <eos-go-button v-if="aii.many.length > 30"/>
            </div>
        </eos-tabie-choose-item-tr>
    </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps<{
    aii: ONE
}>()
</script>