<template>
    <div class="fx-l">
        <label v-if="header">{{header}}</label>
        <div>
            <div v-if="txt_mode" class="pl">
                <slot></slot>
            </div>
            <slot v-else></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{ header?: string, txt_mode?:boolean }>()
</script>

<style lang="sass" scoped>

</style>