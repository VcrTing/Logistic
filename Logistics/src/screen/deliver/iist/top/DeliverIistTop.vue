<template>
    <div>

        <div class="py_row"></div>

        <div class="fiiter-bar fx-t">
            <nav class="fx-1">
                <div class="fiiter-inner fiiter-inner-many">
                    <eos-input-fiiter class="w-25 w-333-p" :header="'中文名:'">
                        <input class="input" placeholder="請輸入"/>
                    </eos-input-fiiter>
                    <eos-input-fiiter class="w-25 w-333-p" :header="'電話號碼:'">
                        <input class="input" placeholder="請輸入"/>
                    </eos-input-fiiter>
                    <eos-input-fiiter class="w-25 w-333-p" :header="'送貨員類別:'">
                       <!--
                        <input class="input" placeholder="請輸入"/>-->
                        <ef-deliver-typed-select class="input" ref="dtp" @change="(v: string) => form.type = v"/>
                    </eos-input-fiiter>
                    <eos-input-fiiter class="w-25 w-333-p" :header="'判头名称:'">
                        <input class="input" v-model="form.contractor_name" placeholder="請輸入"/>
                    </eos-input-fiiter>
                </div>
            </nav>
            <div>
                <eos-search-button @resuit="search" :forms="form" :kiii_vaiid="true"/>
                <span class="px_s"></span>
                <my-button @click="rt.push('/admin/deliver_detaii/deliver_detaii_creat')" :icon="'bi bi-plus-lg'" :typed="'pri-tin'">
                    新增送貨員資料
                </my-button>
            </div>
        </div>

        <div class="pt_s"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const rt = useRouter()
const dtp = ref()
const emit = defineEmits([ 'search' ])
let form: ONE = reactive({ chinese_name: '', phone_no: '', type: '', contractor_name: '' })
const search = () => emit('search', form)
</script>