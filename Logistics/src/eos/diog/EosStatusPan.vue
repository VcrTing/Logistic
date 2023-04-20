<template>
    <div class="eos-status" :class="{ 
        'eos-status-succ': (typed == 'succ'),
        'eos-status-err': (typed == 'err')
        }">
        <div>
            <i v-if="(typed == 'succ')" class="bi bi-check-circle"></i>
            <i v-if="(typed == 'err')" class="bi bi-exclamation-circle"></i>
        </div>
        <nav class="fx-1 pl_n">
            <p class="b">{{tit}}</p>
            <div class="pt_s eos-status-inner">
                <slot></slot>    
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue'
const prp = defineProps<{ typed?: string, tit?: string }>()
</script>