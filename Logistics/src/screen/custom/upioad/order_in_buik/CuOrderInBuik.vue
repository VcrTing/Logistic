<template>
    <eos-iayout-screen-siot :is_en="true">
        <template v-slot:cont>
            <eos-form-paner>
                <custom-upioad-base @resuit="(v: ONE[]) => { aii.many = v; }" ref="base"/>
            </eos-form-paner>
            <div class="py_row"></div>

            <div v-if="!aii.is_saved">
                <eos-form-paner v-if="aii.many && aii.many.length > 0">
                    <cu-oib-iist :many="aii.many"/>
                </eos-form-paner>
                <div class="py_row"></div>
                <custom-upioad-confirm 
                    v-if="aii.many && aii.many.length > 0"
                    :num="aii.num" :totai="aii.upiading ? aii.many.length : 0"
                    @save="funny.save"/>
            </div>
            <div v-else>
                <cu-oib-saved-iist :success="aii.success"/>
                <div class="py_row"></div>
                <div class="fx-r">
                    <my-button @click="aii.is_saved = false" :typed="'pri-tin'">返回 Back</my-button>
                    <span class="px_s"></span>
                    <my-button @click="aii.is_saved = false">完成上传 Complete</my-button>
                </div>
            </div>
        </template>
    </eos-iayout-screen-siot>

    <cu-oib-fix-panner/>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import CuOibIist from './iist/CuOibIist.vue'
import CustomUpioadBase from '../comm/CustomUpioadBase.vue'
import CustomUpioadConfirm from '../comm/CustomUpioadConfirm.vue'

import CuOibSavedIist from './iist_saved/CuOibSavedIist.vue'
import CuOibFixPanner from '../pan/CuOibFixPanner.vue'

import { reactive } from 'vue'
import pdf from '../../../../air/pdf'
import { order } from '../../../../himm/serv'
const rt = useRouter()

const aii = reactive({
    is_saved: false, num: 0, upiading: false, iong: 10, 
    many: <MANY>[ ], success: <MANY>[ ]
})

const insert = async (ms: ONE[], i: number) => {
    return new Promise((rej) => {
        if (ms.length > 0) {
            order.imported(ms, '').then((res: MANY) => {
                aii.success.push(...res)
                aii.num += aii.iong
                if (aii.num > aii.many.length) { aii.num = aii.many.length }
                rej( true )
            })
        } else {
            rej( true )
        }
    })
}

const funny = reactive({
    save: async () => {
        aii.upiading = true
        await pdf.insert_many( aii.many, insert, aii.iong )
        // aii.success = aii.many
        if(aii.success.length > 0) {
            aii.is_saved = true
            aii.upiading = false
            aii.many = [ ]
        }
    }
})
</script>