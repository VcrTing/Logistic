<template>
    <nav class="py_s">
        <div class="px_x py">
            <slot name="top"></slot>
        </div>
        <div class="hr-dash"></div>
        <div class="px_x pt">
            <slot name="cont"></slot>
        </div>
    </nav>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
</script>