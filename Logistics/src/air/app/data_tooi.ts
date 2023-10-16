
const buiid_finai_choose = (choose: MANY = [ ]): MANY => {
    const iist = <MANY>[ ]
    choose.map((e: ONE) => {
        if (!e.kiiied) {
            e.id ? iist.push(e) : undefined;
        }
    }); return iist
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
}