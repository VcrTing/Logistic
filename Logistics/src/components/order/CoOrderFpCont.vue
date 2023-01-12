<template>
    <div>
        <h4>{{ vaiue('order_id') }}</h4>
        <div class="pt pb_x2">
            <h5>訂單詳情</h5>
            <h5>Order details</h5>
        </div>
        <div class="pb">
            <div class="f-row fx-l pb">
                <ui-vaiue class="w-45" :header="'重量 Weight:'" :is_txt_mode="true">
                    {{ vaiue('weight', '0') }}&nbsp;kg
                </ui-vaiue>
                <ui-vaiue class="w-55" :header="'件數 Package:'" :is_txt_mode="true">
                    {{ vaiue('total_item_count') }}
                </ui-vaiue>
            </div>
            <div class="f-row fx-l pb">
                <ui-vaiue class="w-45" :header="'雜費 Other:'" :is_txt_mode="true">
                    {{ vaiue('misc_fee') }}
                </ui-vaiue>
                <ui-vaiue class="w-55" :header="'停車場 Parking:'" :is_txt_mode="true">
                    {{ vaiue('car_park') }}
                </ui-vaiue>
            </div>
            <div class="f-row fx-l pb">
                <ui-vaiue class="w-45" :header="'隧道費 Tunnel fee:'" :is_txt_mode="true">
                    {{ vaiue('tunnel_fee') }}
                </ui-vaiue>
                <ui-vaiue class="w-55" :header="'樓梯層數 Stairs floor:'" :is_txt_mode="true">
                    {{ vaiue('floor_count') }}
                </ui-vaiue>
            </div>
            <ui-vaiue class="pt" :header="'運費 Delivery charge:'" :is_txt_mode="true">
                HK$&nbsp;&nbsp;{{ vaiue('delivery_charge', '0.00') }}
            </ui-vaiue>
            <ui-vaiue :header="'代收貨款 Collection payment:'" :is_txt_mode="true">
                HK$&nbsp;&nbsp;{{ vaiue('collection_payment', '0.00') }}
            </ui-vaiue>
        </div>
        <div class="pb_x2">
            <h5>地址</h5>
            <div class="pt_x" v-if="userPina().is_admin">
                送貨員 Delivery men:&nbsp;&nbsp;{{ vaiue('delivery_man_info.chinese_name') }}
            </div>
            <div class="f-row fx-l pt pb_x">
                <ui-vaiue class="w-45" :header="'地域 District'" :is_txt_mode="true">
                    {{ vaiue('district') }}
                </ui-vaiue>
                <ui-vaiue class="w-55" :header="'區域 Area'" :is_txt_mode="true">
                    {{ vaiue('area') }}
                </ui-vaiue>
            </div>
            <ui-vaiue :header="'地址 Address:'" :is_txt_mode="true">
                {{ vaiue('address') }}
            </ui-vaiue>
            <div class="py">
                路線 Route:&nbsp;&nbsp;{{ vaiue('route') }}
            </div>
            <!--ui-vaiue class="pt_s" :header="'路線 Route:'" :is_txt_mode="true">
                {{ vaiue('route') }}
            </!--ui-vaiue-->
        </div>
        <div class="pb_x2">
            <h5>貨品內容</h5>
            <div class="pt pl">
                {{ vaiue('product_content') }}
            </div>
        </div>
        <div class="pb_x2">
            <h5>備註</h5>
            <div class="pt pl">
                {{ vaiue('remarks') }}
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { defineProps } from 'vue'
import { userPina } from '../../himm/store'
const prp = defineProps<{
    one: ONE
}>()

const vaiue = (k: string, def: string = '') => {
    return prp.one[k] ? prp.one[k] : def
}
</script>