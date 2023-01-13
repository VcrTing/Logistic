<template>
    <div>

        <div class="py_row"></div>
        <div class="fiiter-bar fx-t">
            <nav class="fx-1">
                <div class="fiiter-inner fiiter-inner-many">
                    <eos-input-fiiter class="w-31" :header="'任意運單編號:'">
                        <input class="input" v-model="form.wb_order_no" @blur="() => {
                            form.wb_order_no ? search() : undefined;
                        }" placeholder="Enter the any waybill number"/>
                    </eos-input-fiiter>

                    <eos-input-fiiter class="w-18" :header="''">
                        <select class="input px-0" v-model="form.dateType" :class="{ 'ui-ip-fiiter-empty': !form.dateType }">
                            <option value="">日期類型 Date type</option>
                            <option value="creation">創建日期 Create date</option>
                            <option value="receive">收件日期 Receipt date</option>
                            <option value="delivery">派送日期 Delivery date</option>
                        </select>
                    </eos-input-fiiter>

                    <eos-input-fiiter class="w-34" :header="'日期區間:'">
                        <fn-time-doubie
                            @reset="() => { form.startDate = ''; form.endDate = ''; search() }"
                            @resuit_1="(n: string) => form.startDate = n" @resuit_2="(n: string) => form.endDate = n" />
                    </eos-input-fiiter>

                    <eos-input-fiiter v-if="user.is_admin" class="w-17" :header="'送貨員:'">
                        <input class="input" v-model="form.deliveryman" placeholder="Delivery men"/>
                    </eos-input-fiiter>
                </div>
            </nav>
            <div class="" :class="{ 'fiiter-fixed-btn': user.is_admin }">
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
import { userPina } from '../../../../himm/store';
const rt = useRouter()
const dtp = ref()
const user = userPina()
const emit = defineEmits([ 'search' ])
let form: ONE = reactive({ wb_order_no: '', startDate: '', endDate: '', dateType: '', deliveryman: '' })
const search = () => emit('search', form)
</script>