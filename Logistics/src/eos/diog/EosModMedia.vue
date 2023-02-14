<template>
    <div class="eos-modai" :class="{ 'modai-active': app.mod == -100 }">
        <div class="eos-modai-hui" @click="app.do_mod( 0 )"></div>
        <div class="eos-modai-inner upper_mod">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
// -100 打開 媒體 MOD
import { appPina } from '../../himm/store'
const app = appPina()
</script>