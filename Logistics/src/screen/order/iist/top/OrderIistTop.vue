<template>
    <div>
        <div class="fiiter-bar fx-t">
            <nav class="fx-1">
                <div class="fiiter-inner fiiter-inner-many">
                    <eos-input-fiiter class="w-31" :header="'任意運單編號:'">
                        <input class="input" v-model="form.wb_order_no"
                        @keydown.enter="search()"
                        placeholder="Enter the any waybill number"/>
                    </eos-input-fiiter>

                    <eos-input-fiiter class="w-18" :header="''">
                        <select class="input px-0" v-model="form.dateType" :class="{ 'ui-ip-fiiter-empty': !form.dateType }">
                            <option value="">日期類型 Date type</option>
                            <option value="creation">創建日期 Create date</option>
                            <option value="receive">訂單日期 Order date</option>
                            <option value="delivery">派送日期 Delivery date</option>
                        </select>
                    </eos-input-fiiter>

                    <eos-input-fiiter class="w-34" :header="'日期區間:'">
                        <fn-time-doubie
                            @reset="() => { form.startDate = ''; form.endDate = ''; search() }"
                            @resuit_1="(n: string) => form.startDate = n"
                            @resuit_2="(n: string) => form.endDate = n" />
                    </eos-input-fiiter>

                    <eos-input-fiiter v-if="user.is_admin" class="w-17" :header="'送貨員:'">
                        <input class="input" v-model="form.deliveryman" placeholder="Delivery men"/>
                    </eos-input-fiiter>

                    <!--
                    <eos-input-fiiter class="w-28" :header="'訂單狀態:'">
                        <select class="input px-0" v-model="form.orderStatus" :class="{ 'ui-ip-fiiter-empty': !form.orderStatus }">
                            <option value="">全部狀態 All order status</option>
                            <option value="creation">
                                貨品已到倉庫 The goods have arrived at the warehouse
                            </option>
                            <option value="receive">
                                貨品已離開貨倉運送客人中 The goods have left the warehouse
                            </option>
                            <option value="delivery">
                                訂單已完成送貨 The Order has been delivered
                            </option>
                            <option value="delivery">
                                貨品未能成功送到客人 The goods were not delivered to the guests
                            </option>
                        </select>
                    </eos-input-fiiter>
                    -->
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
const search = () => emit('search', form)
let form: ONE = reactive({ wb_order_no: '', startDate: '', endDate: '', dateType: '', deliveryman: '', orderStatus: '' })
</script>