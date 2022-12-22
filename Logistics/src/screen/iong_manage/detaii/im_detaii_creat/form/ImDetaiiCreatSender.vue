<template>
    <div class="py f-row">
        <eos-input class="w-333" :is_err="false" :header="'電話號碼：'">
            <input class="input" v-model="phone_no" placeholder="請輸入 電話號碼 進行搜索" @blur="search" />
        </eos-input>
        <eos-input class="w-333" :is_err="false" :header="'中文名：'">
            <input class="input" v-model="name" placeholder="請輸入 中文名 進行搜索" @blur="search" />
        </eos-input>
        <eos-input class="w-333" :is_err="false" :header="'英文名：'">
            <input class="input" v-model="name_en" placeholder="請輸入 英文名 進行搜索" @blur="search" />
        </eos-input>
    </div>
    <div class="pt f-row">
        <div class="w-333">
            <eos-inine-input :txt_mode="true">
                身份證號碼：<span>{{ sender.id_card_no }}</span>
            </eos-inine-input>
        </div>
        <div class="w-333">
            <eos-inine-input :txt_mode="true">
                電郵：<span>{{ sender.email }}</span>
            </eos-inine-input>
        </div>
        <div class="w-333">
            <eos-inine-input :txt_mode="true">
                公司名稱：<span>{{ sender.company_name }}</span>
            </eos-inine-input>
        </div>
    </div>
    <div class="pt_s pb f-row">
        <div class="w-333">
            <eos-inine-input :txt_mode="true">
                商業登記：<span>{{ sender.business_registration_no }}</span>
            </eos-inine-input>
        </div>
        <div class="w-333">
            <eos-inine-input :txt_mode="true">
                送貨員類別：<span>{{ sender.type }}</span>
            </eos-inine-input>
        </div>
        <div class="w-333">
            <eos-inine-input :txt_mode="true">
                判頭名稱：<span>{{ sender.contractor_name }}</span>
            </eos-inine-input>
        </div>
    </div>
    <div class="py f-row">
        <div class="w-333">
            <eos-inine-input :txt_mode="true">
                車牌：<span>{{ sender.license_plate_no }}</span>
            </eos-inine-input>
        </div>
        <div class="w-333">
            <eos-inine-input :txt_mode="true">
                貨車類型：<span>{{ sender.truck_type }}</span>
            </eos-inine-input>
        </div>
    </div>
    <cp-deiiver-net/>
</template>

<script setup lang="ts">
import { ref, watch, defineExpose } from 'vue'
import { deliver_man } from '../../../../../himm/serv'

const name = ref<string>()
const name_en = ref<string>()
const phone_no = ref<string>()

const name_err = ref<boolean>()

let sender = ref<{[key: string]: string}>({})

let funni = { chinese_name: '', english_name: '', phone_no: '' }
watch(name, async (n, o) => { funni['chinese_name'] = n + '' })
watch(name_en, async (n, o) => { funni['english_name'] = n + '' })
watch(phone_no, async (n, o) => { funni['phone_no'] = n + '' })
// 98761234
const search = async () => {
    if (name.value || name_en.value || phone_no.value) {
        let res = await deliver_man.many_of_param( funni )
        if (res) { 
            sender.value = res[0] ? res[0] : { }; name_err.value = false
            name.value = sender.value.chinese_name
            name_en.value = sender.value.english_name
            phone_no.value = sender.value.phone_no
        } else {  name_err.value = true }
    }
}
defineExpose({ resuit: () => {
    const src = sender.value ? sender.value : null
    const res = src ? src.id : null
    if (res) { return res } else { name_err.value = true } return false
} })
</script>