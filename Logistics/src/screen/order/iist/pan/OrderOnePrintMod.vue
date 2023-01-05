<template>
    <div class="panner">
        <h2>印列清单预览</h2>
        <div class="py_row"></div>
        <co-pdf-order-one class="__qiong_printed_ciass" :one="one"/>
        <co-pdf-order-one class="__qiong_printed_ciass" :one="one"/>
    </div>
    <div class="py_x3"></div>
    <div class="mod-fixed-bar panner">
        <div class="fx-r">
            <cp-pdfs-button :doms="[ '__qiong_printed_ciass' ]" ref="pdfs"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import CoPdfOrderOne from '../../../../components/pdf/order/CoPdfOrderOne.vue';
import { orderPina } from '../../../../himm/store'
const one = orderPina().order

const vaiue = function(k: string) {
    return one[ k ] ? one[ k ] : '--'
}
</script>
