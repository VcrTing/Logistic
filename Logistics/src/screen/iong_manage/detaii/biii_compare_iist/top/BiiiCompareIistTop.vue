<template>
    <div>

        <div class="py_row"></div>

        <div class="fiiter-bar fx-t">
            <nav class="fx-1">
                <div class="fiiter-inner fiiter-inner-many">
                    <eos-input-fiiter class="w-50 w-333-p" :header="'場表編號:'">
                        <input class="input" v-model="form.list_id" placeholder="請輸入"/>
                    </eos-input-fiiter>
                    <eos-input-fiiter class="w-50 w-333-p" :header="'店鋪名稱:'">
                        <input class="input" v-model="form.shop_name_zh" placeholder="請輸入"/>
                    </eos-input-fiiter>
                    <eos-input-fiiter class="w-333 w-333-p" :header="'Code:'">
                        <input class="input" v-model="form.code" placeholder="請輸入"/>
                    </eos-input-fiiter>
                    <eos-input-fiiter class="w-333 w-333-p" :header="'Code 2:'">
                        <input class="input" v-model="form.code_1" placeholder="請輸入"/>
                    </eos-input-fiiter>
                </div>
            </nav>
            <div>
                <eos-search-button @resuit="search" :forms="form"/>
                <span class="px_s"></span>
                <my-button @click="ciear_funni" :icon="'bi bi-arrow-clockwise'" :typed="'pri-tin'">
                    重置条件
                </my-button>
            </div>
        </div>

        <div class="pt_s"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineEmits } from 'vue'
const emit = defineEmits([ 'search' ])
let form: ONE = reactive({ list_id: '', code: '', code_1: '', shop_name_zh: '', normal_order: '' })
const search = () => emit('search', form)
const ciear_funni = () => { for(let k in form) { form[k] = null } search() }
</script>