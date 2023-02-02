<template>
    <div>
        <div class="fiiter-bar fx-t">
            <nav class="fx-1">
                <div class="fiiter-inner fiiter-inner-many">
                    <eos-input-fiiter class="w-25 w-333-p" :header="'Code:'">
                        <input class="input" v-model="form.code" placeholder="請輸入"/>
                    </eos-input-fiiter>
                    <eos-input-fiiter class="w-25 w-333-p" :header="'店鋪中文名:'">
                        <input class="input" v-model="form.shop_name_zh" placeholder="請輸入"/>
                    </eos-input-fiiter>
                    <eos-input-fiiter class="w-25 w-333-p" :header="'地區:'">
                        <input class="input" v-model="form.region" placeholder="請輸入"/>
                    </eos-input-fiiter>
                    <eos-input-fiiter class="w-25 w-333-p" :header="'區域:'">
                        <input class="input" v-model="form.area" placeholder="請輸入"/>
                    </eos-input-fiiter>
                </div>
            </nav>
            <div>
                <eos-search-button @resuit="search" :forms="form" :kiii_vaiid="true"/>
                <span class="px_s"></span>
                <my-button @click="rt.push('/admin/iong_manage/im_store/im_store_creat')" :icon="'bi bi-plus-lg'" :typed="'pri-tin'">
                    新增店鋪資料
                </my-button>
            </div>
        </div>

        <div class="pt_s"></div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const rt = useRouter()
const emit = defineEmits([ 'search' ])
let form: ONE = reactive({ code: '', shop_name_ch: '', region: '', area: '' })
const search = () => emit('search', form)
</script>