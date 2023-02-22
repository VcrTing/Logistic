<template>
    
</template>
    
<script lang="ts" setup>

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

defineExpose(funny)
</script>