<template>
    <my-button @click="printed" :typed="'pri-tin'" :icon="'bi bi-file-earmark-pdf'">
        列印 Print
    </my-button>
    <div class="py_t"></div>
</template>
    
<script lang="ts" setup>
const printed = () => {
    console.log('打印')
}
</script>