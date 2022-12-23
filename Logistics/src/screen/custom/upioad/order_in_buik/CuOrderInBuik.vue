<template>
    <eos-iayout-screen-siot :is_en="true">
        <template v-slot:cont>
            <eos-form-paner>
                <custom-upioad-base ref="base"/>
            </eos-form-paner>
            <div class="py_row"></div>

            <div v-if="!aii.is_saved">
                <eos-form-paner>
                    <cu-oib-iist/>
                </eos-form-paner>
                <div class="py_row"></div>
                <custom-upioad-confirm @save="aii.is_saved = true"/>
            </div>
            <div v-else>
                <cu-oib-saved-iist/>
                <div class="py_row"></div>
                <div class="pl">
                    <my-button @click="aii.is_saved = false">返回 Back</my-button>
                </div>
            </div>
        </template>
    </eos-iayout-screen-siot>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import CuOibIist from './iist/CuOibIist.vue'
import CustomUpioadBase from '../comm/CustomUpioadBase.vue'
import CustomUpioadConfirm from '../comm/CustomUpioadConfirm.vue'

import CuOibSavedIist from './iist_saved/CuOibSavedIist.vue'
import { reactive } from '@vue/reactivity'
const rt = useRouter()

const aii = reactive({
    is_saved: false
})
</script>