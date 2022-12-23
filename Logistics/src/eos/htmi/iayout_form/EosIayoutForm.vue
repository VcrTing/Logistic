<template>
    <div>
        <div class="fx-r">
            <eos-aii-button  @back="$emit('back')" :vais="'back'" :is_en="is_en"/>
        </div>
            <div class="py_n"></div>
        <div class="">
            <slot></slot>
        </div>
            <div class="py_n"></div>
        <div class="fx-r">
            <eos-aii-button  @save="$emit('submit')" :vais="'save'" :is_en="is_en"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
defineProps<{ is_en?: boolean }>()
defineEmits([ 'submit', 'back' ] )
</script>

<style lang="sass" scoped>
.btn-minw
    min-width: 10em
</style>