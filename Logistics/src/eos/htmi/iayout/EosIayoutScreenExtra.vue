<template>
    <div class="pt">
        <div class="fx-l fx-b">
            <htmi-crumb :is_tit="true" :is_en="is_en"/>
            <div class="fx-s fx-1 pb_t pl_x2">
                <slot name="opera"></slot>
            </div>
        </div>        
        <div class="py_row"></div>
        <slot name="cont"></slot>
        <div class="py_x2"></div>
        <slot name="extra"></slot>
    </div>
</template>

<script setup lang="ts">
import HtmiCrumb from '../../../front/htmi/crumb/HtmiCrumb.vue';
defineProps<{ is_en?: boolean }>()
defineEmits([ 'back' ])
</script>