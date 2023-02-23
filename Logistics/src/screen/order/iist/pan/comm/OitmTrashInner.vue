<template>
    <div v-if="app.mod === -201">
        <h4 class="px">批量刪除</h4>
        <p class="px sub">Are you sure to delete them?</p>
        <div class="fx-c pt_x2">
            <button class="btn-trash px_x2 py_s" @click="$emit('trash_mui')">
                <span class="err">刪除 Delete</span>
            </button>
        </div>
    </div>
    <div v-if="app.mod === -205">
        <h4 class="px">訂單操作</h4>
        <p class="px sub">Are you sure to delete it?</p>
        <div class="fx-c pt_x2">
            <button class="btn-trash px_x2 py_s" @click="$emit('trash')">
                <span class="err">刪除 Delete</span>
            </button>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { appPina } from '../../../../../himm/store'
defineEmits([ 'trash', 'trash_mui' ])
const app = appPina()
</script>