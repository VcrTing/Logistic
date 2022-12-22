<template>
    <nav>
        <eos-input class="py w-100-p w-100" :is_err="form_err.list_total_count" :header="'訂單總數量：'">
            <input class="input" type="number" v-model="form.list_total_count" placeholder="請輸入" />
        </eos-input>
        <eos-input class="pb w-100-p w-100" :is_err="false" :header="'Nomal Order：'">
            <input class="input" type="number" v-model="form.normal_order" placeholder="請輸入" />
        </eos-input>

        <div class="py f-row">
            <eos-input class="w-50" :is_err="false" :header="'小跨區費用：'">
                <input class="input" v-model="form.small_cross_district" type="number" placeholder="請輸入" />
            </eos-input>
            <eos-input class="w-50" :is_err="false" :header="'大跨區費用：'">
                <input class="input" v-model="form.large_cross_district" type="number" placeholder="請輸入" />
            </eos-input>
        </div>
        <div class="py w-100 fx-l">
            <span class="pl pr_x2">是否額外收費</span>
            <eos-switch @resuit="(v: any) => form.is_extra_fee = v ? true : false"/>
        </div>

        <div class="pt_x2 f-row">
            <eos-input class="w-50" :is_err="false" :header="'停車場費用：'">
                <input class="input" v-model="form.car_park" type="number" placeholder="請輸入" />
            </eos-input>
            <eos-input class="w-50" :is_err="false" :header="'隧道費：'">
                <input class="input" v-model="form.tunnel_fee" type="number" placeholder="請輸入" />
            </eos-input>
        </div>
        <div class="py f-row">
            <eos-input class="w-50" :is_err="false" :header="'雜費：'">
                <input class="input" v-model="form.misc_fee" type="number" placeholder="請輸入" />
            </eos-input>
            <eos-input class="w-50" :is_err="false" :header="'樓梯層數：'">
                <input class="input" v-model="form.floor_count" type="number" placeholder="請輸入" />
            </eos-input>
        </div>
    </nav>
</template>

<script setup lang="ts">
// 210039
// 富威花園
// 23432345
import { ref, reactive, defineExpose } from 'vue'

const form = reactive({
    list_total_count: '', is_extra_fee: false, small_cross_district: '', large_cross_district: '',
    car_park: '', tunnel_fee: null, misc_fee: null, floor_count: 1, normal_order: null
})
const form_err = reactive({ list_total_count: false })

const can = () => { let res = true
    if (!form.list_total_count) { form_err.list_total_count = true; return false } else { form_err.list_total_count = false }
    Object.values( form_err ).map( e => { if (e) { res = false } }); return res
}

defineExpose({ resuit: () => can() ? form : null })
</script>