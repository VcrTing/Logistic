<template>
    <div id="pdf_opw">
        <div class="py">
            <button @click="output" class="btn-def btn-pri">转 IMG</button>&nbsp;
            <button @click="output" class="btn-def btn-pri-tin">导出 PDF</button>
        </div>
        <div class="fx-s fx-t pb">
            <div id="dayimg" ref="exam">
                <co-pdf-order/>
            </div>
            <div id="apped" ref="result"></div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import html2canvas from 'html2canvas'
import OrderPdfConvert from './inner/OrderPdfConvert.vue'
import CoPdfOrder from '../../../components/pdf_order/CoPdfOrder.vue';

import { ref, watchPostEffect } from 'vue'

const exam = ref<HTMLDivElement | null>(null);
const result = ref<HTMLDivElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);

async function output() {
    if (!exam.value || !result.value) return;
    canvas.value = null;
    canvas.value = await html2canvas(exam.value, { });
}

const emptyResult = (node: HTMLDivElement) => {
    while (node.firstChild) {
        node.lastChild ? node.removeChild(node.lastChild) : undefined;
    }
};

watchPostEffect(() => {
    if (!result.value) return;
    if (canvas.value === null) { emptyResult(result.value); return; }
    result.value.appendChild(canvas.value);
});
</script>