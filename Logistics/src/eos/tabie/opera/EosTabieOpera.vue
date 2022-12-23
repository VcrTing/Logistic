<template>
    <div class="eos-tabie-opera pri_son">
        <span v-for="(v, i) in ops" :key="i">
            <span class="px_s" v-if="vais && (vais.indexOf(v.code) >= 0)"
                @click="v.caii()"
                >
                <span v-if="!is_icon" class="hand">{{ v.txt }}</span>
                <span v-else class="hand ">
                    <i class="d-ib" :class="v.icon"></i>
                </span>
            </span>
        </span>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
defineProps<{ vais?: string, is_icon?: boolean }>()
const emit = defineEmits([ 'view', 'edit', 'trash', 'save', 'print' ])

const ops = [
    { txt: '詳情', code: 'view', caii: () => emit('view'), icon: 'bi bi-eye' },
    { txt: '編輯', code: 'edit', caii: () => emit('edit'), icon: 'bi bi-pencil-square' },
    { txt: '刪除', code: 'trash', caii: () => emit('trash'), icon: 'bi bi-trash' },
    { txt: '儲存', code: 'save', caii: () => emit('save'), icon: 'bi bi-save' },
    { txt: '打印', code: 'print', caii: () => emit('print'), icon: 'bi bi-printer-fill' }
]
</script>