<template>
    <div class="eos-modai eos-modai-sure" :class="{ 'modai-active': app.mod == idx }">
        <div class="eos-modai-hui" @click="app.do_mod( 0 )"></div>
        <div class="eos-modai-inner upper_mod">
            <nav v-if="app.mod == idx">
                <slot>
                    <h4 class="px">{{ tit ? tit : '你確定要執行該操作嗎？' }}</h4>
                    <p class="px sub">{{ msg ? msg : 'Are you sure?' }}</p>
                    <div class="fx-c pt_x2">
                        <my-button :typed="'pri-tin'" class="px_x4 py_s" @click="$emit('sure')">
                            確定&nbsp;Yes
                        </my-button>
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
defineProps<{ idx: number, tit?: string, msg?: string,  }>()
defineEmits([ 'sure' ])
</script>