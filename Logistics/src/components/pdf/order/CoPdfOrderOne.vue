<template>
    <div class="">
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
                        <p>翔烽运单编号 CF waybill number:</p>
                        <div class="t_c">
                            <js-barcode :pk="'aaa'" :code="one.cf_waybill_no"/>
                        </div>
                    </td>
                </tr>
            </table>
            <table class="eoop_center_tabie" border="1" cellspacing="0">
                <tr>
                    <td rowspan="3" width="54%" class="t_t">
                        <p class="pt_1">派送地址 Ddelivery address:</p>
                        <h4>
                            {{ vaiue('address') }}
                        </h4>
                    </td>
                    <td>
                        <p>收件人 To :</p>
                        <h4>{{ vaiue('customer_name_zh') }}</h4>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>收件人电话 Tel :</p>
                        <h4>{{ vaiue('customer_phone_no') }}</h4>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>客户运单编号 Waybill number :</p>
                        <h4 class="n">{{ vaiue('waybill_no') }}</h4>
                    </td>
                </tr>
            </table>
            <table class="eoop_center_tabie" border="1" cellspacing="0">
                <tr>
                    <td colspan="3">
                        <p>寄件人资料 FROM :</p>
                        <h4>Ohbaby Star Bless Company Limited</h4>
                    </td>
                </tr>
                <tr>
                    <td width="41%">
                        <p>订单组 Order group :</p>
                        <h4>{{ vaiue('order_group') }}</h4>
                    </td>
                    <td width="28%">
                        <p>重量 Weight :</p>
                        <h4>{{ vaiue('weight') }}&nbsp;KG</h4>
                    </td>
                    <td>
                        <p>地区 District :</p>
                        <h4>
                            {{ vaiue('district') }}
                        </h4>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>订单编号 Order No. :</p>
                        <h4>{{ vaiue('order_id') }}</h4>
                    </td>
                    <td>
                        <p>件数 Package :</p>
                        <h4>{{ vaiue('num') }}/1</h4>
                    </td>
                    <td>
                        <p>路线 Route :</p>
                        <h4>{{ vaiue('route') }}</h4>
                    </td>
                </tr>
            </table>
            <table class="eoop_center_tabie" border="1" cellspacing="0">
                <tr>
                    <td class="t_t" colspan="2" rowspan="2" width="54%">
                        <p class="pt_1">货品内容 Items content :</p>
                        <h4>{{ vaiue('product_content') }}</h4>
                    </td>
                    <td>
                        <p>运费 Delivery charge:</p>
                        <h4>HK${{ vaiue('tunnel_fee') }}</h4>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>代收货款 Collection payment:</p>
                        <h4>HK$0.00</h4>
                    </td>
                </tr>
                <tr>
                    <td class="" colspan="3">
                        <p>备注 Note:</p>
                        <h4 class="mh_3">--</h4>
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
    .eos-order-one-pdf {
        max-width: 38em;
    }
    h1 { line-height: 1.112em }
    h2, h3, h4, h5, h6 { line-height: 1em; padding-top: 0.24em; }
    .t_t { vertical-align: text-top; }
    .n { font-weight: normal }
    .t_c { text-align: center }
    .pt_1 { padding-top: 0.4em }
    .eoop_center_tabie { border-top: 0px; border-bottom: 0px }
        
    table { width: 100%; border: none }
    td { padding: 0.3em 0.6em 0.12em 0.6em; border: 1px solid #444 }
    .mh_3 {  min-height: 3em }
       
</style>