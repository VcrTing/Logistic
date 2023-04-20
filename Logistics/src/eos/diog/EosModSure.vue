<template>
    <div class="eos-modai eos-modai-sure" :class="{ 'modai-active': app.mod <= -200 }">
        <div class="eos-modai-hui" @click="app.do_mod( 0 )"></div>
        <div class="eos-modai-inner upper_mod">
            <nav v-if="app.mod <= -200">
                <slot>
                    <h4 class="px">是否確認刪除?</h4>
                    <p class="px sub">Do you want to delete it?</p>
                    <div class="fx-c pt_x2">
                        <button class="btn-trash px_x4 py_s" @click="$emit('trash')">
                            <i class="bi bi-trash-fill err"></i>
                        </button>
                    </div>
                </slot>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
// -200 打開 確認 MOD

import { appPina } from '../../himm/store'
const app = appPina()
defineEmits([ 'trash' ])
</script>