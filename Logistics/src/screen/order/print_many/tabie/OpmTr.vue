<template>
    <nav class="tr">
        <div class="w-5"></div>
        <div class="w-12">
            創建日期<br/><p class="tr-en">Create date</p>
        </div>
        <div class="w-23">
            翔烽運單號碼<br/><p class="tr-en">CF waybill number</p>
        </div>
        <div class="w-14">
            訂單組<br/><p class="tr-en">Group</p>
        </div>
        <div class="w-19">
            訂單編號<br/><p class="tr-en">Order No.</p>
        </div>
        <div class="w-9">
            件數<br/><p class="tr-en">Package</p>
        </div>
        <div class="w-13">
            PDF 預覽<br/><p class="tr-en">PDF Preview</p>
        </div>
        <div class="w-5">

            <eos-go-button v-if="aii.many.length > 30"/>
        </div>
    </nav>
</template>
    
<script lang="ts" setup>
defineProps<{
    aii: ONE
}>()
</script>