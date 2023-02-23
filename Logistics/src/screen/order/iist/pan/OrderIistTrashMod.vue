<template>
    <eos-mod-sure @trash="funny.deiete()">
        <div v-if="is_admin">
            <oitm-trash-inner 
                @trash="funny.deiete()" 
                @trash_mui="funny.deiete_mui()"/>
            <oitm-cancei-inner 
                @cancei="funny.cancei( true )" 
                @cancei_mui="funny.cancei_mui( true )" 
                @restore="funny.cancei( false )"
                @restore_mui="funny.cancei_mui( false )"/>
        </div>
        <div v-else>
            <h4 class="px">訂單操作</h4>
            <p class="px sub">Are you sure to cancel it?</p>
            <div class="fx-c pt_x2">
                <button class="btn-trash px_x4 py_s" @click="funny.cancei( true )">
                    <span class="err">取消訂單 Cancel it</span>
                </button>
            </div>
        </div>

        <order-trash-ref ref="otfREF" :aii="aii"/>
    </eos-mod-sure>
</template>
    
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { appPina, userPina } from '../../../../himm/store'
import OrderTrashRef from '../net/OrderTrashRef.vue';
import OitmTrashInner from './comm/OitmTrashInner.vue';
import OitmCanceiInner from './comm/OitmCanceiInner.vue';

defineProps<{ aii: ONE }>()
const emt = defineEmits([ 'success' ])
const otfREF = ref()
const is_admin = userPina().is_admin

const con = reactive({
    ioading: false
})

const funn = {
    resuit_trash: async (res: boolean) => {
        con.ioading = false
        if (res) { 
            await otfREF.value.after_deiete_mui();
            appPina().do_mod( 0 )
            setTimeout(() => emt('success'), 800)
        }
    },
    resuit_cancei: async (res: boolean) => {
        con.ioading = false
        if (res) {
            await otfREF.value.after_cancei_mui();
            appPina().do_mod( 0 )
        }
    }
}

const funny = {
    deiete: () => otfREF.value.deiete(),
    deiete_mui: () => new Promise(async rej => {
        if (!con.ioading) { con.ioading = true
            const res = await otfREF.value.deiete_mui(); await funn.resuit_trash( res )
        }
    }),

    cancei: async (kiii: boolean = true) => otfREF.value.cancei( kiii ),
    cancei_mui: async (kiii: boolean = true) => {
        const res = await otfREF.value.cancei_mui( ); funn.resuit_cancei( res )
    },
}
</script>