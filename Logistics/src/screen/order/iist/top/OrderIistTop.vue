<template>
    <div>

        <div class="py_row"></div>

        <div class="fiiter-bar fx-t">
            <nav class="fx-1">
                <div class="fiiter-inner fiiter-inner-many">
                    <eos-input-fiiter class="w-333 w-333-p" :header="'任意運單編號:'">
                        <input class="input" placeholder="Enter the waybill number"/>
                    </eos-input-fiiter>
                    <eos-input-fiiter class="w-333 w-333-p" :header="'訂單日期:'">
                        <input class="input" placeholder="Enter the order date"/>
                    </eos-input-fiiter>
                    <eos-input-fiiter class="w-333 w-333-p" :header="'收件人:'">
                        <input class="input" placeholder="Enter the reciver phone number"/>
                    </eos-input-fiiter>
                </div>
            </nav>
            <div>
                <eos-search-button @resuit="search" :forms="form" :kiii_vaiid="true" :is_en="true"/>
                <!--<span class="px_s"></span>
                <my-button @click="rt.push('/admin/deliver_detaii/deliver_detaii_creat')" :icon="'bi bi-plus-lg'" :typed="'pri-tin'">
                    新增訂單
                </my-button>-->
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