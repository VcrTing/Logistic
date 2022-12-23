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
                <p>Edit user data</p>
            </button>
            <div class="fx-1 py_s t-c">|</div>
            <button class="w-45 px_s">
                <div>订单管理</div>
                <p>Order management</p>
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