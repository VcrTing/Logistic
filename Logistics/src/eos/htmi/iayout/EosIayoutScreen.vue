<template>
    <div class="pt">
        <htmi-crumb :is_tit="true" :is_en="is_en"/>            
        <slot></slot>
        <div class="py_x2"></div>
    </div>
</template>

<script setup lang="ts">
import HtmiCrumb from '../../../front/htmi/crumb/HtmiCrumb.vue';
defineProps<{ is_en?: boolean }>()
</script>