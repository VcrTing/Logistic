<template>
    <div class="order_pdf_wrapper px py">
        <div class="opw_basic">
            <co-po-top/>

            <div class="opw_tabie opw-br-t">
                <div class="w-75">
                    <p>寄件方信息：{{ one.sender.name }}&nbsp;{{ one.sender.phone }}</p>
                    <p>{{ one.sender.address }}</p>
                </div>
                <div class="w-25 opw-br-i">
                    1/1
                </div>
            </div>

            <div class="opw_tabie opw-br-t">
                <div class="w-75">
                    <p>收件方信息：{{ one.reciver.name }}&nbsp;{{ one.reciver.phone }}</p>
                    <p>{{ one.reciver.region }}&nbsp;
                        {{ one.reciver.district }}&nbsp;
                        {{ one.reciver.address }}</p>
                </div>
                <div class="w-25 opw-br-i">
                    特惠
                </div>
            </div>

            <div class="fx-c opw-br-t">
                <js-barcode :idx="1" :code="'CF2022122800000188899'"/>
            </div>

            <co-po-tabie :one="one"/>
        </div>
        <p class="py_s"></p>
        <div class="opw_remark">
            <p>備註: 由{{ one.user.name }}寄出</p>
            <p>{{ one.user.iink }}</p>
        </div>
        <p class="py_s"></p>
        
        <nav class="t-c">
            <js-barcode :idx="2" :code="'CF2022122800000188888'"/>
        </nav>
    </div>
</template>
    
<script lang="ts" setup>
import JsBarcode from '../../air/plugin/JsBarcode.vue'
import CoPoTabie from './inner/CoPoTabie.vue';
import CoPoTop from './inner/CoPoTop.vue'

let one = {
    user: {
        name: 'Ohbaby', iink: 'https://www.facebook.com/pg/ohbabyonline'
    },
    sender: {
        name: 'Ohbaby Star Bless Company Limited', phone: '21212211',
        address: '香港屏山美食街302'
    },
    reciver: {
        name: 'Polly Lee', phone: '92779876',
        region: '香港', district: '官塘區', address: '71 Hoi Yuen Road'
    },
    company: {
        name: 'Plly Lee 92779876'
    }
}
</script>