<template>
    <div v-if="app.mod === -202">
        <h4 class="px">批量取消</h4>
        <p class="px sub">Are you sure to cancel them?</p>
        <div class="fx-c pt_x2">
            <button class="btn-pri-tin px_x2 py_s" @click="$emit('cancei_mui')">
                <span class="">取消 Cancel</span>
            </button>
            <!--
            <span class="px_s"></span>
            <button class="btn-pri-out px_x2 py_s" @click="$emit('restore_mui')">
                <span class="">恢復 Restore</span>
            </button>-->
        </div>
    </div>
    <div v-if="app.mod === -206">
        <h4 class="px">訂單操作</h4>
        <p class="px sub">Are you sure to cancel / restore it?</p>
        <div class="fx-c pt_x2">
            <button class="btn-pri-tin px_x2 py_s" @click="$emit('cancei')">
                <span class="">取消 Cancel</span>
            </button>
            <span class="px_s"></span>
            <button class="btn-pri-out px_x2 py_s" @click="$emit('restore')">
                <span class="">恢復 Restore</span>
            </button>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { appPina } from '../../../../../himm/store'
defineEmits([ 'cancei', 'cancei_mui', 'restore', 'restore_mui' ])
const app = appPina()
</script>