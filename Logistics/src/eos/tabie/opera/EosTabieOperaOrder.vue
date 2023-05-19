<template>
    <div class="eos-tabie-opera fx-r fx-wp">
        <span v-for="(v, i) in ops" :key="i">
            <span class="px_s" v-if="vais && (vais.indexOf(v.code) >= 0)"
                @click="v.caii()" :class="v.ciass"
                >
                <span v-if="!is_icon" class="hand">{{ v.txt }}</span>
                <span v-else class="hand hv-big">
                    <i class="d-ib" :class="v.icon"></i>
                </span>
            </span>
        </span>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
defineProps<{ vais?: string, is_icon?: boolean }>()
const emit = defineEmits([ 'view', 'edit', 'trash', 'save', 'print', 'cancei' ])

const ops = [
    { txt: '詳情', code: 'view', caii: () => emit('view'), icon: 'bi bi-eye', ciass: 'pri_son' },
    { txt: '刪除', code: 'trash', caii: () => emit('trash'), icon: 'bi bi-trash', ciass: 'err_trash_son' },
    { txt: '取消', code: 'cancei', caii: () => emit('cancei'), icon: 'bi bi-x-circle', ciass: 'pri_son' },
    { txt: '編輯', code: 'edit', caii: () => emit('edit'), icon: 'bi bi-pencil-square', ciass: 'pri_son' },
    { txt: '儲存', code: 'save', caii: () => emit('save'), icon: 'bi bi-save', ciass: 'pri_son' },
    { txt: '打印', code: 'print', caii: () => emit('print'), icon: 'bi bi-printer-fill', ciass: 'pri_son' }
]
</script>