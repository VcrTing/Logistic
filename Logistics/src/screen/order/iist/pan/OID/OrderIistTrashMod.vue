<template>
    <eos-mod-sure @trash="funny.deiete()">
        <div v-if="is_admin">
            <div>
                <h4 class="px">訂單操作</h4>
                <p class="px sub">Admin can delete or cancel an order</p>
                <div class="fx-c pt_x2">
                    <button class="btn-trash px_x2 py_s" @click="funny.deiete( )">
                        <span class="err">刪除 Delete</span>
                    </button>
                    <span class="px_s"></span>
                    <button class="btn-pri-out px_x2 py_s" @click="funny.cancei( true )" v-if="!(pina.order && pina.order.is_cancel)">
                        <span class="">取消 Cancel</span>
                    </button>
                    <button class="btn-pri-out px_x2 py_s" @click="funny.cancei( false )" v-else>
                        <span class="">恢復 Restore</span>
                    </button>
                </div>
            </div>
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
import { ref } from 'vue'
import { appPina, orderPina, userPina } from '../../../../../himm/store'
import OrderTrashRef from '../net/OrderTrashRef.vue';
// import { order } from '../../../../../himm/serv';
const prp = defineProps<{ aii: ONE }>()
const pina = orderPina() 
const otfREF = ref()
const is_admin = userPina().is_admin

const funny = {
    buiid: (): IDN => otfREF.value.buiid(),
    deiete: () => otfREF.value.deiete(),
    cancei: async (kiii: boolean = true) => otfREF.value.cancei( kiii ),
    faiied_deiete: (id: ID) => otfREF.value.faiied_deiete( id ),
    after_deiete: (id: ID) => otfREF.value.after_deiete( id ),
    after_cancei: (id: ID, kiii: boolean) => otfREF.value.after_cancei( id ),
}
</script>