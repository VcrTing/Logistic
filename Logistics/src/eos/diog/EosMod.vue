<template>
    <div class="eos-modai" :class="{ 'modai-active': app.mod > 0 }">
        <div class="eos-modai-hui" @click="app.do_mod( 0 )"></div>
        <div class="eos-modai-inner" v-if="app.mod > 0">
            <div class="eos-modai-center">
                <nav>
                    <slot></slot>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { appPina } from '../../himm/store'
const app = appPina()
</script>