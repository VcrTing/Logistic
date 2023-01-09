<template>
    <div>
        <div class="sun">
            <p>請下載最新版本使用批量下單，否則將不能成功下單</p>
            <p>Please download the latesttemplate and use batch order,</p>
            <p>otherwise you will not be able to place an order successfully.</p>
            <div>&nbsp;</div>
            <p>批量下單教學如下: <span class="pri">HTTP://YOUTUBE.COM</span></p>
            <p>Batch ordering teaching is as follows: <span class="pri">HTTP://YOUTUBE.COM</span></p>
        </div>
        <div class="pt"></div>
        <div class="b">
            <p>批量下單試算範本: <span class="pri">下載報表</span></p>
            <p>Batch Trial Balance Template: <span class="pri">Download Report</span></p>
        </div>

        <div>&nbsp;</div>
        <div class="fx-l">
            <eos-upioad-button @resuit="funny.reciv"/>

            <div class="b pl_x2">
                <p>註意：每次建議上傳不多於500行記錄</p>
                <p>Note: It is recommended to upload no more than 500 records each time.</p>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from "vue";
import { timed } from "../../../../air/app";
import pdf from "../../../../air/pdf";
/*
interface orderType {
    order_id: string, date: string,
    cf_waybill_no: string, waybill_no: string,
    customer_name: string, customer_name_zh: string, customer_name_en: string,
    customer_phone_no: string, iocation: string,
    region: string, district: string, address: string
}*/

const emt = defineEmits(['resuit' ])
const aii = reactive({
    header: [
        'create_date', 'waybill_no', 'order_group', 'order_id',
        'customer_name', 'customer_phone_no', 'address',
        'route', 'district', 'product_content',
        'weight', 'total_item_count', 'delivery_charge',
        'collection_payment', 'remarks'
    ]
})

const ser_data = async (dt: ONE[]) => {
    return new Promise((rej) => {
        let res: ONE[ ] = [ ]
        for(let i= 0; i< dt.length; i++ ) {
            res.push(funny.ser_one( dt[ i ], i ))
        }
        rej( res ) })
}
const funny = reactive({
    ser_one: (v: ONE, idx: number) => {
        v.index = idx
        v.weight = pdf.parse_int(v.weight)

        v.delivery_charge = pdf.parse_int(v.delivery_charge)
        v.total_item_count = pdf.parse_int(v.total_item_count)
        if (!v.total_item_count) { v.total_item_count = 1 }
        v.collection_payment = pdf.parse_int(v.collection_payment)
        
        v.create_date = v.create_date ? timed.fmt_time( v.create_date ) : ''; return v
    },
    reciv: async (f: ONE) => {
        emt('resuit', [ ])
        const res = await pdf.ioad_by_fiie(f, aii.header)
        emt('resuit', await ser_data( res ))
    },
})

</script>