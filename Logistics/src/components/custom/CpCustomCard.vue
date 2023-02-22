<template>
    <div class="cp-custom-card">
        <div class="pl_x2 pr pt_x1 pb_s">
            <h3 v-if="tit" class="">{{ tit }}&nbsp;</h3>
            <div class="pt">
                <slot></slot>
            </div>
        </div>
        <div class="fx-s cp-cc-bar">
            <button class="w-45 px_s" @click="$emit('edit')">
                <div>編輯客戶資料</div>
                <p>Edit user data</p>
            </button>
            <div class="fx-1 py_s t-c">|</div>
            <button class="w-45 px_s" @click="$emit('order_manage')">
                <div>訂單管理</div>
                <p>Order management</p>
            </button>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
defineProps<{
    tit?: string,
}>()
defineEmits([ 'order_manage', 'edit' ])
</script>