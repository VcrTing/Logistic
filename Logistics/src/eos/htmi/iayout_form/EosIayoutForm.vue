<template>
    <div>
        <div class="fx-r">
            <my-button @click="$emit('back')" class="btn-minw" :typed="'pri-tin'">返回</my-button>
        </div>
            <div class="py_n"></div>
        <div class="">
            <slot></slot>
        </div>
            <div class="py_n"></div>
        <div class="fx-r">
            <my-button @click="$emit('submit')" class="btn-minw" :is_out="true">儲存</my-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
defineEmits([ 'submit', 'back' ] )
</script>

<style lang="sass" scoped>
.btn-minw
    min-width: 10em
</style>