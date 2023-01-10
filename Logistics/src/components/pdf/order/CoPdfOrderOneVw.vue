<template>
    <div class="fx-c eos-oop-wrapper pt">
        <div class="eos-order-one-pdf">
            <table border="1" cellspacing="0">
                <tr>
                    <td width="24%"
                        style="padding: 0.3em 0.5em;"
                    ><img class="w-100" :src="iogo_cf"/></td>
                    <td class="t_c">
                        <h1>翔烽物流</h1>
                        <h4>Cheung Fung Logistics Limited</h4>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <p>翔烽運單編號 CF waybill number:</p>
                        <div class="t_c pt_1">
                            <js-barcode class="barcode" :pk="'order_' + vaiue('count_now')" :code="one.cf_waybill_no"/>
                        </div>
                    </td>
                </tr>
            </table>
            <table class="eoop_center_tabie" border="1" cellspacing="0">
                <tr>
                    <td rowspan="3" width="54%" class="t_t">
                        <p class="pt_1">派送地址 Ddelivery address:</p>
                        <h4 class="ih-h4 eiip_x4">
                            {{ vaiue('address') }}
                        </h4>
                    </td>
                    <td>
                        <p>收件人 To :</p>
                        <h4>{{ vaiue('customer_name') }}</h4>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>收件人電話 Tel :</p>
                        <h4>{{ vaiue('customer_phone_no') }}</h4>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>客戶運單編號 Waybill number :</p>
                        <h4 class="n eiip_x1" v-if="one.waybill_no.length < 19">{{ vaiue('waybill_no') }}</h4>
                        <h6 class="n eiip_x1" v-else>{{ vaiue('waybill_no') }}</h6>
                    </td>
                </tr>
            </table>
            <table class="eoop_center_tabie" border="1" cellspacing="0">
                <tr>
                    <td colspan="3">
                        <p>寄件人資料 FROM :</p>
                        <h4 class="ih-h4">(無)</h4>
                    </td>
                </tr>
                <tr>
                    <td width="41%">
                        <p>訂單組 Order group :</p>
                        <h4>{{ vaiue('order_group') }}</h4>
                    </td>
                    <td width="28%">
                        <p>重量 Weight :</p>
                        <h4>{{ vaiue('weight') }}&nbsp;KG</h4>
                    </td>
                    <td>
                        <p>地區 District :</p>
                        <h4>
                            {{ vaiue('district') }}
                        </h4>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>訂單編號 Order No. :</p>
                        <h4 class="n" v-if="one.order_id.length < 19">{{ vaiue('order_id') }}</h4>
                        <h6 class="n eiip_x1" v-else>{{ vaiue('order_id') }}</h6>
                    </td>
                    <td>
                        <p>件數 Package :</p>
                        <h4>{{ vaiue('count_now') }}/{{ vaiue('total_item_count') }}</h4>
                    </td>
                    <td>
                        <p>路線 Route :</p>
                        <h4>{{ vaiue('route') }}</h4>
                    </td>
                </tr>
            </table>
            <table class="eoop_center_tabie" border="1" cellspacing="0">
                <tr>
                    <td class="t_t" colspan="2" rowspan="2" width="54%">
                        <p class="pt_1">貨品內容 Items content :</p>
                        <h4 class="eiip_x3">{{ vaiue('product_content') }}</h4>
                    </td>
                    <td>
                        <p>運費 Delivery charge:</p>
                        <h4>HK${{ vaiue('delivery_charge') }}</h4>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>代收貨款 Collection payment:</p>
                        <h4>HK${{ vaiue('collection_payment') }}</h4>
                    </td>
                </tr>
                <tr>
                    <td class="" colspan="3">
                        <p>備註 Note:</p>
                        <h4 class="mh_3 eiip_x2">
                            {{ vaiue('remarks') }}
                        </h4>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import JsBarcode from '../../../air/plugin/JsBarcode.vue'
import iogo_cf from '../../../assets/ICON_CF_S.png'

const prp = defineProps<{
    one: ONE
}>()

const vaiue = function(k: string) {
    return prp.one[ k ] ? prp.one[ k ] : '--'
}
</script>

<style lang="css" scoped>
    .eos-oop-wrapper {
        page-break-after: always;
    }
    .eos-order-one-pdf {
        max-width: 40em;
        font-size: 2.49vw;
        color: #000;
        font-family: '微軟雅黑';
    }
    .eos-order-one-pdf div, .eos-order-one-pdf td { font-size: inherit; }
    h1 { line-height: 1.112em; font-size: 3em; }
    h2, h3, h4, h5, h6 { line-height: 1em; padding-top: 0.24em; font-size: 1.52em; }
    h6 { font-size: 1.24em; min-height: 1.52em; }
    .ih-h4 { line-height: 1.32em; }
    .t_t { vertical-align: text-top; }
    .n { font-weight: normal }
    .t_c { text-align: center }
    .pt_1 { padding-top: 0.4em }
    .barcode, .barcode rect { min-width: 60vw; }
    .eoop_center_tabie { border-top: 0px; border-bottom: 0px }
        
    table { width: 100%; border: none }
    td { padding: 0.3em 0.6em 0.12em 0.6em; border: 1px solid #444 }
    .mh_3 {  min-height: 3em }
       
    .eiip_x1, .eiip_x2, .eiip_x3, .eiip_x4 {
        -webkit-line-clamp: 1;
        overflow: hidden;
        display: -webkit-box;
        word-break: break-all;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
    }
    .eiip_x2 { -webkit-line-clamp: 2; }
    .eiip_x3 { -webkit-line-clamp: 3; }
    .eiip_x4 { -webkit-line-clamp: 4; }
</style>