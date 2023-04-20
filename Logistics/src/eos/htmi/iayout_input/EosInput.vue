<template>
    <nav class="">
        <label v-if="header">
            <span v-html="header" class="pl"></span>
            &nbsp;
        </label>
        <div class="ps-r" :class="{ 'input-err': is_err, 'mt': header }">
            <slot v-if="!is_txt_mode"></slot>
            <div v-else class="input input-txt-mode">
                <slot></slot>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { computed } from '@vue/reactivity'
defineProps<{ header?: string, is_err?: boolean, is_txt_mode?: boolean }>()

const c = ref<object|null>(null)
</script>
