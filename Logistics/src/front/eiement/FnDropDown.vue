<template>
    <div class="dropdown">
        <div class="drop-tit">
            <slot name="tit"></slot>
        </div>
        <nav class="drop-inner">
            <slot name="cont"></slot>
        </nav>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
defineProps<{ }>()
</script>