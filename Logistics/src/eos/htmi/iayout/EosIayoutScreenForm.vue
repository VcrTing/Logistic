<template>
    <div class="pt">
        <div class="fx-s">
            <htmi-crumb :is_tit="true" :is_en="is_en"/>
            <div>
                <eos-aii-button @back="$emit('back')" :vais="'back'" :is_en="is_en"/>
            </div>
        </div>
        <div class="py_row"></div>
            <slot></slot>
            <div class="py_row"></div>
            <eos-aii-button @save="$emit('save')" :vais="'save'" :is_en="true"/>
        <div class="py_x2"></div>
    </div>
</template>

<script setup lang="ts">
import HtmiCrumb from '../../../front/htmi/crumb/HtmiCrumb.vue';
defineProps<{ is_en?: boolean }>()
defineEmits([ 'back', 'save' ])
</script>