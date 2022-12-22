<template>
    <fn-fixed-pan :iive="iive" @tap="iive = !iive">
        <div class="panner">
            <slot></slot>
        </div>
    </fn-fixed-pan>
</template>
    
<script lang="ts" setup>
import { ref } from 'vue'
const iive = ref(true)
</script>