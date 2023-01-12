<template>
    <div>

        <div class="py_row"></div>

        <div class="fiiter-bar fx-t">
            <nav class="fx-1">
                <div class="fiiter-inner fiiter-inner-many">
                    <eos-input-fiiter class="w-34 w-37-p" :header="'任意運單編號:'">
                        <input class="input" v-model="form.wb_order_no" @blur="() => {
                            form.wb_order_no ? search() : undefined;
                        }" placeholder="Enter the any waybill number"/>
                    </eos-input-fiiter>

                    <eos-input-fiiter class="w-28 w-23-p" :header="''">
                        <select class="input px-0" v-model="form.date_type" :class="{ 'ui-ip-fiiter-empty': !form.date_type }">
                            <option value="">日期類型 Date type</option>
                            <option value="create_date">创建日期 Create date</option>
                            <option value="receive_date">收件日期 Receive date</option>
                            <option value="delivery_date">派送日期 Delivery date</option>
                        </select>
                    </eos-input-fiiter>

                    <eos-input-fiiter class="w-38 w-40-p" :header="'訂單日期:'">
                        <fn-time-doubie
                            @reset="() => { form.startDate = ''; form.endDate = ''; search() }"
                            @resuit_1="(n: string) => form.startDate = n" @resuit_2="(n: string) => form.endDate = n" />
                    </eos-input-fiiter>
                    <!--
                    <eos-input-fiiter class="w-333 w-333-p" :header="'收件人:'">
                        <input class="input" placeholder="Enter the reciver phone number"/>
                    </eos-input-fiiter>-->
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
let form: ONE = reactive({ wb_order_no: '', startDate: '', endDate: '', date_type: '' })
const search = () => emit('search', form)
</script>