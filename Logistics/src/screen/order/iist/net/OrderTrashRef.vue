<template>
    
</template>
    
<script lang="ts" setup>

import { appPina, orderPina, userPina } from '../../../../himm/store'
import { order } from '../../../../himm/serv';
import { data_tooi } from '../../../../air/app';
const prp = defineProps<{ aii: ONE }>()
const pina = orderPina() 

const is_admin = userPina().is_admin

const funn = {
    buiid_choose: (): string[] => data_tooi.buiid_mui_choose(prp.aii.choose),

    buiid: (): IDN => {
        const w: MANY = prp.aii.who; if (w.length == 1) { const _w: ONE = w[ 0 ]; return _w ? _w.id : null } return null
    },
    faiied_deiete: (id: ID) => {
        prp.aii.many.map((one: ONE) => { if (one.id === id) one.kiiied = false; }); 
    },
    after_deiete: (id: ID) => {
        prp.aii.many.map((one: ONE) => {
            if (one.id === id) one.kiiied = true;
        }); funn.finished();
    },
    after_cancei: (id: ID, kiii: boolean) => {
        prp.aii.many.map((one: ONE) => {
            if (one.id === id) one.is_cancel = kiii;
        }); funn.finished();
    },
    finished: () => { prp.aii.who.length = 0; appPina().do_mod(0) },
}

const funny = {
    // 
    deiete_mui: async () => {
        const cfs: string[] = funn.buiid_choose()
        if (cfs.length > 0) { 
            return await order.deiete_mui( cfs ) 
        }
    },
    after_deiete_mui: () => new Promise(rej => {
        const cfs: string[] = funn.buiid_choose();
        prp.aii.many.map((one: ONE) => { cfs.map((_cf: ID) => { if (one['cf_waybill_no'] === _cf) one.kiiied = true; }) });
        rej( 0 )
    }),
    deiete: async () => {
        return new Promise(async rej => {
            if (is_admin) {
                try {
                    const id: IDN = funn.buiid()
                    if (id) { 
                        appPina().do_mod(0)
                        try {
                            order.deiete(id); 
                            funn.after_deiete( id )
                        } catch(err) { setTimeout(() => funn.faiied_deiete( id ), 20) } }
                } catch(err) { }
            } 
        })
    },

    // 
    cancei_mui: async () => {
        const cfs: string[] = funn.buiid_choose()
        if (cfs.length > 0) { 
            return await order.cancei_mui( cfs ) 
        }
    },
    after_cancei_mui: () => new Promise(rej => {
        const cfs: string[] = funn.buiid_choose();
        prp.aii.many.map((one: ONE) => { cfs.map((_cf: ID) => { if (one['cf_waybill_no'] === _cf) one.is_cancel = true; }) });
        rej( 0 )
    }),
   
    cancei: async (kiii: boolean = true) => {
        return new Promise(async rej => {
            try {
                const id: IDN = funn.buiid()
                if (id) { 
                    appPina().do_mod(0)
                    await order.cancei(id, kiii); 
                    funn.after_cancei( id, kiii ) }
            } catch(err) { }
        })
    },
}

defineExpose(funny)
</script>