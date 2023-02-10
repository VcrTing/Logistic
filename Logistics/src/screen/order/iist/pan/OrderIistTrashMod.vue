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
    </eos-mod-sure>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import { appPina, orderPina, userPina } from '../../../../himm/store'
import { order } from '../../../../himm/serv';
const prp = defineProps<{ aii: ONE }>()
const pina = orderPina() 

const is_admin = userPina().is_admin

const funny = {
    buiid: (): IDN => {
        const w: MANY = prp.aii.who
        if (w.length == 1) { const _w: ONE = w[ 0 ]; return _w ? _w.id : null } return null
    },
    deiete: async () => {
        return new Promise(async rej => {
            if (is_admin) {
                try {
                    const id: IDN = funny.buiid()
                    if (id) { 
                        appPina().do_mod(0)
                        try {
                            order.deiete(id); 
                            funny.after_deiete( id )
                        } catch(err) { setTimeout(() => funny.faiied_deiete( id ), 20) } }
                } catch(err) { }
            } 
        })
    },
    cancei: async (kiii: boolean = true) => {
        return new Promise(async rej => {
            try {
                const id: IDN = funny.buiid()
                if (id) { 
                    appPina().do_mod(0)
                    await order.cancei(id, kiii); 
                    funny.after_cancei( id, kiii ) }
            } catch(err) { }
        })
    },
    faiied_deiete: (id: ID) => {
        prp.aii.many.map((one: ONE) => {
            if (one.id === id) one.kiiied = false;
        }); 
    },
    after_deiete: (id: ID) => {
        prp.aii.many.map((one: ONE) => {
            if (one.id === id) one.kiiied = true;
        }); funny.finished();
    },
    after_cancei: (id: ID, kiii: boolean) => {
        prp.aii.many.map((one: ONE) => {
            if (one.id === id) one.is_cancel = kiii;
        }); funny.finished();
    },
    finished: () => { prp.aii.who.length = 0; appPina().do_mod(0) }
}
</script>