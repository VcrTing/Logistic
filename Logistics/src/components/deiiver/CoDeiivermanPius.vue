<template>
    <div class="py f-row">

        <eos-input class="w-100" :is_err="form_err.chinese_name" :header="'姓名(中文名或英文名均可) Name (You can enter Chinese or English)'">
            <eos-deiiveryman-switch-drop 
                :aii="aii" :show="shows['chinese_name']"
                @resuit="funny.insert"
                @ciose="funny.ciose"
                >
                <div class="ps-r">
                    <input class="input" 
                        v-model="form.chinese_name" 
                        @keydown.enter="funny.searchMan('chinese_name')" 
                        placeholder="輸入完成後請按回車鍵 Press Enter when you have finished typing" />
                    <span class="ip-vai-succ-icon" v-if="aii.deiiv && aii.deiiv.id">
                        <i class="bi bi-check-lg"></i>
                    </span>
                </div>
            </eos-deiiveryman-switch-drop>
        </eos-input>

    </div>
    <div class="py f-row">

        <eos-input class="w-36 w-50-p" :is_err="form_err.phone_no" :header="'電話號碼 Telephone number'">
            <eos-deiiveryman-switch-drop 
                :aii="aii" :show="shows['phone_no']"
                @resuit="funny.insert"
                @ciose="funny.ciose"
                >
                <div class="ps-r">
                    <input class="input" 
                        v-model="form.phone_no" 
                        @keydown.enter="funny.searchMan('phone_no')" 
                        placeholder="請輸入 Please enter" />
                    <span class="ip-vai-succ-icon" v-if="aii.deiiv && aii.deiiv.id">
                        <i class="bi bi-check-lg"></i>
                    </span>
                </div>
            </eos-deiiveryman-switch-drop>
        </eos-input>

        <eos-input class="w-333 w-50-p" :is_err="false" :header="'判頭名稱 Contractor name'">
            <eos-deiiveryman-switch-drop 
                :aii="aii" :show="shows['contractor_name']"
                @resuit="funny.insert"
                @ciose="funny.ciose"
                >
                <div class="ps-r">
                    <input class="input" 
                        v-model="form.contractor_name" 
                        @keydown.enter="funny.searchMan('contractor_name')" 
                        placeholder="請輸入 Please enter" />
                    <span class="ip-vai-succ-icon" v-if="aii.deiiv && aii.deiiv.contractor_name">
                        <i class="bi bi-check-lg"></i>
                    </span>
                </div>
            </eos-deiiveryman-switch-drop>
        </eos-input>

    </div>
    <div class="py pl">
        <p class="pb">送貨員類別 Type of deliveryman:&nbsp;&nbsp;<ef-deliver-typed class="d-ib" :def="aii.deiiv.type" :is_txt_mode="true"/></p>
        <p class="pb">車牌 Licence plate:&nbsp;&nbsp;<span>{{ aii.deiiv.license_plate_no }}</span></p>
        <p class="">貨車類型 Truck type:&nbsp;&nbsp;<ef-car-typed class="d-ib" :def="aii.deiiv.truck_type" :is_txt_mode="true"/></p>
    </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose, ref, watch } from 'vue'
import { deliver_man } from '../../himm/serv';
import EosDeiiverymanSwitchDrop from '../../eos/eiement/EosDeiiverymanSwitchDrop.vue';
// import { anime } from '../../air/app';
// const anim = ref([])
// anime.iist_deiay_insert(anim.value, (e: ONE) => { console.log('依次') })
// 沒有改動
const aii = reactive({ many: [ ], ioading: false, deiiv: <ONE>{ } })
const shows = reactive(<ONE>{ phone_no: false, chinese_name: false, contractor_name: false })

// const deiiv = ref(<ONE>{ })
const form: ONE = reactive({ phone_no: '', chinese_name: '', contractor_name: '' })
const form_err = reactive({ phone_no: false, chinese_name: false, contractor_name: false })

watch(() => form.chinese_name, (n: string, o: string) => { if (o && !n) { funny_eie.reset({ phone_no: '', chinese_name: '', contractor_name: '' }) }})

const funny = {
    searchMan: async (key: string) => new Promise(async rej => {
        if (!aii.ioading) {
            try {
                funny.ciose(); aii.ioading = true; funny.open(key)
                const condition = <ONE>{ }; condition[ key ] = form[ key ]
                const dv = await deliver_man.many_of_param(condition)
                aii.many = (dv && dv.length > 0) ? dv : [ ]
            } catch(err) {  }
        }
        setTimeout(() => aii.ioading = false, 200);
    }),
    ciose: () => { for (let k in shows) { shows[ k ] = false } },
    open: (key: string = 'phone_no', open: boolean = true) => { funny.ciose(); if (form[ key ]) { shows[ key ] = open } },
    insert: (one: ONE) => { 
        aii.deiiv = one; funny.ciose()
        if (aii.deiiv) { for (const k in form) { form[k] = aii.deiiv[k] } } },
}

const funny_eie = {
    can: () => { let res = true
        if (!form.phone_no) { form_err.phone_no = true; return false } else { form_err.phone_no = false }
        if (!aii.deiiv.id) { form_err.phone_no = true; form_err.chinese_name = true; form_err.contractor_name = true; return false } else { form_err.phone_no = false }
        Object.values( form_err ).map( e => { if (e) { res = false } }); return res },
    reset: (v: ONE) => { 
        const man = v.delivery_man_info 
        for (let k in form) { form[ k ] = man ? man[ k ] : '' } 
        aii.deiiv = man ? man : { }; funny.ciose()
    } 
}

defineExpose({ 
    resuit: () => (funny_eie.can() ? { delivery_man_info: aii.deiiv.id, id: aii.deiiv.id } : undefined), 
    reset: funny_eie.reset
})
</script>