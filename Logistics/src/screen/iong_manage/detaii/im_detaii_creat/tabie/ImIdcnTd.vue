<template>
    <div class="td">
        <div class="w-9">{{ idx + 1 }}</div>
        <div class="w-12">{{one.list_id}}</div>
        <div class="w-11">{{one.delivery_price}}</div>
        <div class="w-10">{{one.is_delivered ? '是': '否'}}</div>
        <div class="w-9">{{one.list_count}}</div>
        <div class="w-16 pr_s">
            <ef-deiive-iist-typed :def="one.type" :is_txt_mode="true"/>
        </div>
        <div class="w-10">
            <ef-cross-region-typed :def="one.is_cross_region" :is_txt_mode="true"/>
        </div>
        <div class="w-17">{{one.remarks}}</div>
        <div class="w-6 t-r">
            <eos-tabie-opera :vais="'trash'" @trash="() => emt('trash', idx)"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, defineExpose } from 'vue'
const emt = defineEmits([ 'trash' ])
const prps = defineProps<{
    idx: number,
    one: { [k: string]: any } // any // 
}>()
</script>