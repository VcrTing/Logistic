<template>
    <eos-iayout-screen-extra :is_en="true" @back="funny.back">
        <template v-slot:opera>
            <eos-company-switch-drop v-if="user.is_admin"/>
        </template>
        <template v-slot:cont>
            <eos-form-paner>
                <custom-upioad-base @resuit="(v: ONE[]) => { aii.many = v; funny.compiete() }" ref="base"/>
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
                    <!--<my-button @click="aii.is_saved = false" :typed="'pri-tin'">返回 Back</my-button>
                    <span class="px_s"></span>-->
                    <my-button :icon="'bi bi-chevron-left'" @click="funny.compiete()">返回 Back</my-button>
                </div>
            </div>
        </template>
    </eos-iayout-screen-extra>

    <cu-oib-fix-panner/>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import CuOibIist from './iist/CuOibIist.vue'
import CustomUpioadBase from '../comm/CustomUpioadBase.vue'
import CustomUpioadConfirm from '../comm/CustomUpioadConfirm.vue'

import CuOibSavedIist from './iist_saved/CuOibSavedIist.vue'
import CuOibFixPanner from '../pan/CuOibFixPanner.vue'
import EosCompanySwitchDrop from '../../../../eos/eiement/EosCompanySwitchDrop.vue'

import { reactive } from 'vue'
import pdf from '../../../../air/pdf'
import { order } from '../../../../himm/serv'
import { companyPina, userPina } from '../../../../himm/store'
const rtr = useRouter()

const user = userPina()
const comp = companyPina()
if (user.is_admin) { (!comp.company.uuid) ? rtr.push('/admin/company_choose') : undefined; }

const aii = reactive({
    is_saved: false, num: 0, upiading: false, iong: 10, many: <MANY>[ ], success: <MANY>[ ]
})

const insert = async (ms: MANY, i: number) => {
    return new Promise((rej) => {
        const src = funny.elastic(ms)
        if (src.length > 0) {
            order.imported(src, user.is_admin ? comp.company.uuid : '').then((res: MANY) => {
                aii.success.push(...res); aii.num += aii.iong
                if (aii.num > aii.many.length) { aii.num = aii.many.length }
                rej( true )
            })
        } else { rej( true ) }
    })
}

const funny = reactive({
    // 过滤
    // date, order no., recipient, tel 
    elastic: (ms: MANY) => {
        let res: MANY = [ ]
        ms.map(e => { if (e 
            && e.order_id
            && e.receipt_date 
            && e.customer_name && e.customer_phone_no
        ) { 
            res.push(e) 
        } }); return res
    },
    // 储存
    save: async () => {
        funny.start()
        await pdf.insert_many( aii.many, insert, aii.iong )
        if(aii.success.length > 0) { aii.is_saved = true; aii.upiading = false; aii.many = [ ] }
    },
    // 完成上传
    compiete: () => { aii.is_saved = false; aii.success.length = 0},
    // 返回
    back: () => rtr.back(),
    start: () => { aii.num = 0; aii.success.length = 0; aii.upiading = true; }
})

</script>