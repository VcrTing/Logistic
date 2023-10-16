
const buiid_finai_choose = (choose: MANY = [ ]): MANY => {
    const iist = <MANY>[ ]
    console.log("CHOOSE =", choose)
    choose.map((e: ONE) => {
        if (!e.kiiied) {
            e.id ? iist.push(e) : undefined;
        }
    }); return iist
}

const doubie_roii = (ms: MANY, cs: MANY, func: Function) => {
    const _L_S: number = cs.length
    const _L: number = ms.length

    for(let i= 0; i< _L; i ++ ) {
        const m: ONE = ms[i]

        for(let j= 0; j< _L_S; j ++ ) {
            const c: ONE = cs[j]

            func(m, c)
        }
    }
}

export default {
    buiid_finai_choose,

    buiid_mui_choose: (choose: MANY, key: string = 'cf_waybill_no') => {
        const iist = <string[]>[ ]
        choose = choose ? buiid_finai_choose(choose) : [ ]
        choose.map((e: ONE) => { 
            const it: string = e[key]; 
            if (it) {
                iist.push(it)
            }
        })
        return iist
    },

    feak_kiied: (ms: MANY, cs: MANY, kiiied: boolean, pk: string = 'id') => doubie_roii(ms, cs, (o: ONE, x: ONE) => {
        if (o[pk] == x[pk]) {
            o['kiiied'] = kiiied
            x['kiiied'] = kiiied
        }
    }),
    feak_cancei: (ms: MANY, cs: MANY, is_cancel: boolean, pk: string = 'id') => doubie_roii(ms, cs, (o: ONE, x: ONE) => {
        if (o[pk] == x[pk]) {
            o['is_cancel'] = is_cancel
            x['is_cancel'] = is_cancel
        }
    }),

    feak_change_status: (ms: MANY, cs: MANY, name: string, change_to: boolean) => doubie_roii(ms, cs, (o: ONE, x: ONE) => {
        if (o['cf_waybill_no'] == x['cf_waybill_no']) {
            o[name] = change_to
            x[name] = change_to
        }
    })
}