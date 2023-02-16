<template>
    <div class="py f-row">
        <eos-input class="w-25 w-333-p" :is_err="num_err" :header="'Code：'">
            <input class="input" v-model="num" placeholder="請輸入 Code 進行搜索" @blur="search"/>
        </eos-input>
        <eos-input class="w-25 w-333-p" :is_err="num_err" :header="'Code 2：'">
            <input class="input" v-model="num_2" placeholder="請輸入 Code2 進行搜索" @blur="search" />
        </eos-input>
        <eos-input class="w-50 w-333-p" :is_err="num_err" :header="'店鋪中文名稱：'">
            <input class="input" v-model="store_name" placeholder="請輸入 店鋪中文名 進行搜索" @blur="search" />
        </eos-input>
        <div class="w-25 w-0-p"></div>
    </div>
    <div class="py f-row">
        <div class="w-25 w-333-p">
            <eos-inine-input :txt_mode="true">
                國家 / 地區：<span>{{ shop.region }}</span>
            </eos-inine-input>
        </div>
        <div class="w-25 w-333-p">
            <eos-inine-input :txt_mode="true">
                區域：<span>{{ shop.district }}</span>
            </eos-inine-input>
        </div>
        <div class="w-50 w-333-p">
            <eos-inine-input :txt_mode="true">
                區域詳情：<span>{{ shop.area }}</span>
            </eos-inine-input>
        </div>
    </div>
    <div class="py">
        <eos-inine-input :txt_mode="true">
            詳細地址：<span>{{ shop.address }}</span>
        </eos-inine-input>
    </div>

    <cp-store-net/>
</template>

<script setup lang="ts">
import { ref, defineExpose, watch } from 'vue'
import { im_manage_store } from '../../../../../himm/serv'

const num = ref<string>()
const num_2 = ref<string>()
const store_name = ref<string>()

let shop = ref<ONE>({})

let funni = { code: '', code_1: '', shop_name_zh: '' }
watch(num, async (n, o) => { funni['code'] = n + '' })
watch(num_2, async (n, o) => { funni['code_1'] = n + '' })
watch(store_name, async (n, o) => { funni['shop_name_zh'] = n + '' })

const num_err = ref<boolean>(false)
const search = async () => {
    if (num.value || num_2.value || store_name.value) {
        let res = await im_manage_store.many_of_param( funni )
        if (res) { 
            shop.value = res[0] ? res[0] : { }; num_err.value = false //
            num.value = shop.value.code
            num_2.value = shop.value.code_1
            store_name.value = shop.value.shop_name_zh
        } else { num_err.value = true }
    }
}

defineExpose({ 
    resuit: () => {
        const src = shop.value ? shop.value : null
        const res =  src ? src.id : null
        if (res) { return res } else { num_err.value = true } return false
    },
    reset: (v: ONE) => { 
        num.value = v.code
        num_2.value = v.code_1
        store_name.value = v.shop_name_zh
        shop.value = v
    }  
})

/*
interface SHOP {
    address: string
    area: string
    code: string
    code_1: string
    district: string
    id: number | string
    region: string
    shop_name_en: string
    shop_name_zh: string
}
*/

</script>