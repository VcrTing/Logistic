<template>
    <div class="fx-s fx-b">
        <div class="fx-1">
            <div>
                <eos-pdf-button @click="funny.p_aii()"/>
                <span class="px_s"></span>
                
                <!-- 功能區 1 -->
                <my-button v-if="is_admin" :typed="'pri-out'" @click="funny.mui_deiivery_pius()">
                    <i class="bi bi-person-plus"></i>
                    &nbsp;批量添加送貨員 Upload Deliveryman in bulk
                </my-button>
                
                <my-button v-else :typed="'pri-out'" @click="rtr.push('/admin/custom_order_iist/upioad_order_in_buik')">
                    <i class="bi bi-plus-lg"></i>
                    批量上傳訂單 Upload orders in bulk
                </my-button>

                <!-- 功能區 2 -->
                <!--
                <my-button>
                    <i class="bi bi-stack"></i> 批量修改狀態 Batch change status
                </my-button>
                -->
                <span class="px_s"></span>
                <eos-order-status-switch-drop @resuit="funny.mui_order_status"/>
            </div>

            <!--
            <cp-tabie-pdf-bar class="w-100" @p_aii="funny.p_aii()" @excei="funny.export_excei()"/>
            <div v-if="user.is_admin" class="fx-l fx-wp">
            </div> 
            -->

            <div class="pt" v-if="is_admin">
                <eos-mui-trash-button v-if="!user.is_manager" @trash="funny.mui_trash" @cancei="() => { }"/>
                <span class="px_s"></span>
                <eos-mui-trash-button :is_cancei="true" @cancei="funny.mui_cancei" @trash="() => { }"/>
                <span class="px_s"></span>
            </div>
        </div>
        <div>
            <my-button @click="funny.export_excei()">
                <i class="bi bi-file-earmark-spreadsheet"></i>
                &nbsp;導出 Excel Export Excel
            </my-button>
        </div>
    </div>
    <div class="py_t"></div>
</template>
    
<script lang="ts" setup>
import { reactive } from '@vue/reactivity'
import { useRouter } from 'vue-router';
// import pdf from '../../../../air/pdf';
import { order } from '../../../../himm/serv';
import { appPina, companyPina, orderPina, userPina } from '../../../../himm/store';
// import CpTabiePdfBar from '../../../../components/pdf/CpTabiePdfBar.vue'
import EosOrderStatusSwitchDrop from '../../../../eos/eiement/EosOrderStatusSwitchDrop.vue';

import EosPdfButton from '../../../../eos/eiement/EosPdfButton.vue';
import EosMuiTrashButton from '../../../../eos/eiement/EosMuiTrashButton.vue';
import { data_tooi } from '../../../../air/app';
import conf from '../../../../air/conf';

const app = appPina()
const user = userPina()
const rtr = useRouter()

const is_admin = user.is_admin
const prp = defineProps<{ aii: ONE }>()

const emt = defineEmits([ 'refresh' ])

const funny = reactive({
    uuid: () => {
        const company = is_admin ? companyPina().company : userPina().company
        return company ? company.uuid : null
    },
    p_aii: () => new Promise((rej) => { 
        if (funny._has_choose()) {
            orderPina().do_orders_print( data_tooi.buiid_finai_choose(prp.aii.choose) ); 
            // rtr.push('/admin/order_iist/print_muiti')
            const nn = rtr.resolve({ path: '/admin/order_iist/print_muiti' })
            setTimeout(() => window.open(nn.href, '_blank'), 400)
        } rej(0) }),
    export_excei: async () => new Promise (rej => {
        const res: string[] = data_tooi.buiid_mui_choose( prp.aii.choose )
        const comp_id = funny.uuid();
        (comp_id && res.length > 0) ? order.excei(res, comp_id + '') : undefined;

        rej(0)
    }),

    _has_choose: () => { const res = data_tooi.buiid_finai_choose(prp.aii.choose); return (res && res.length > 0) },

    mui_trash: () => {
        if (funny._has_choose()) { app.do_mod(-201) }
    },
    mui_cancei: () => {
        if (funny._has_choose()) { app.do_mod(-202) }
    },

    mui_deiivery_pius: () => {
        if (funny._has_choose()) { app.do_mod(102) }
    },

    mui_order_status: (name: string, change_to: boolean) => new Promise(async (rej) => {
        const res: string[] = data_tooi.buiid_mui_choose( prp.aii.choose )
        conf.TEST ? console.log(res, change_to, name) : undefined;
        if (res.length > 0) {
            const web: boolean = await order.status_mui(res, change_to, name)
            appPina().do_mod(0)
            emt('refresh'); 

            // 虛擬改變 狀態
            data_tooi.feak_change_status(
                prp.aii.many, 
                data_tooi.buiid_finai_choose(prp.aii.choose),
                name,
                change_to)
        }
        rej(0)
    })
})

/*
    export_front: () => {
        const src: MANY = prp.aii ? prp.aii.choose : [ ];
        const res = src.map((e: ONE) => {
            for (let k in e) { e[k] = e[k] ? e[k] : '' }
            e.company = e.company ? e.company.name : ''; return e
        });
        (res && res.length > 0) ? pdf.dowioad_xisx(res) : undefined
    },
*/
</script>