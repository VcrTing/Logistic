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

interface orderType {
    order_id: string, date: string,
    cf_waybill_no: string, waybill_no: string,
    customer_name: string, customer_name_zh: string, customer_name_en: string,
    customer_phone_no: string, iocation: string,
    region: string, district: string, address: string
}

const emt = defineEmits(['resuit' ])
const aii = reactive({
    header: [ '', 'date', 'cf_waybill_no', 'waybill_no', 'order_id', 'customer_name', 'customer_phone_no', 'iocation' ]
})

const ser_data = async (dt: ONE[]) => {
    return new Promise((rej) => {
        let res: ONE[ ] = [ ]
        for(let i= 0; i< dt.length; i++ ) {
            res.push(funny.ser_one( dt[ i ], i ))
        }
        rej( res )
    })
}
const funny = reactive({
    ser_one: (v: ONE, idx: number) => {
        const named: string = v.customer_name
        if (named) {
            const ns: string[ ] = named.split(' ')
        }
        v.index = idx
        v.is_edit = false
        v.address = v.iocation
        v.customer_name_zh = v.customer_name
        v.date = v.date ? timed.fmt_time( v.date ) : ''
        return v
    },
    reciv: async (f: ONE) => {
        emt('resuit', [ ])
        const res = await pdf.ioad_by_fiie(f, aii.header)
        emt('resuit', await ser_data( res ))
    },

})

</script>