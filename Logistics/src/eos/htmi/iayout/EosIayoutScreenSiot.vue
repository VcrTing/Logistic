<template>
    <div class="pt">
        <div class="fx-s">
            <htmi-crumb :is_tit="true" :is_en="is_en"/>
            <div>
                <slot name="opera">
                    <eos-aii-button @back="$emit('back')" :vais="'back'" :is_en="is_en"/>
                </slot>
            </div>
        </div>
        <slot name="cont"></slot>

        <div class="py_x2"></div>

        <div class="mod-fixed-bar">
            <div class="fx-r px_htmi">
                <slot name="bar"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import HtmiCrumb from '../../../front/htmi/crumb/HtmiCrumb.vue';
defineProps<{ is_en?: boolean }>()
defineEmits([ 'back' ])
</script>