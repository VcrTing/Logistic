<template>
    <div class="cp-custom-card">
        <div class="pl_x2 pr py_x1">
            <h4 v-if="tit">{{ tit }}&nbsp;</h4>
            <div class="pt">
                <slot></slot>
            </div>
        </div>
        <div class="fx-s cp-cc-bar">
            <button class="w-45 px_s">
                <div>编辑客户资料</div>
            </button>
            <div class="fx-1 py_s t-c">|</div>
            <button class="w-45 px_s">
                <div>查看客户上传订单</div>
            </button>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
defineProps<{
    tit?: string
}>()
</script>