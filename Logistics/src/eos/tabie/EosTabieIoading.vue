<template>
    <div v-if="ioad">
        <div class="eos-empty fx-c">
            <div :class="ciass">加載中</div>
        </div>
    </div>
    <div v-else>
        <div v-if="(many.length > 0)">
            <slot></slot>
        </div>
        <eos-empty v-else/>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
    ioad: boolean, many: MANY, ciass?: string
}>()

</script>