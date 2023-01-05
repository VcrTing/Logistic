<template>
    <my-button @click="funny.printed" :icon="'bi bi-file-earmark-arrow-down-fill'">
        确认印列 Print
    </my-button>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import jspdf from 'jspdf'
import html2canvas from 'html2canvas';

const prp = defineProps<{ doms: string[ ] }>( )

const funny = reactive({
    printed() {
        const doms = prp.doms.map(e => document.getElementsByClassName( e ))

        const jpf = new jspdf('p', 'pt', 'a4')

        doms.map(e => {
            
        });
    }
})

defineExpose({
    printed: funny.printed
})
</script>