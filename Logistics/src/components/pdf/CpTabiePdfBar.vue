<template>
    <div class="fx-l">
        <eos-print-drop>
            <button @click="$emit('p_aii')">全部 All</button>
            <!--
            <button>標簽 Label</button>
            <button>送貨單 Delivery note</button>
            -->
        </eos-print-drop>
        <span class="px_s"></span>
        <my-button :typed="'pri-out'">
            <i class="bi bi-plus-lg"></i>
            批量上傳訂單 Upload orders in bulk
        </my-button>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from "@vue/reactivity";
defineEmits([ 'p_aii' ])
</script>