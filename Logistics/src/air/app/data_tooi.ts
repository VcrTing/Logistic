
export default {

    buiid_mui_choose: (choose: MANY, key: string = 'cf_waybill_no') => {
        const iist = <string[]>[ ]
        choose = choose ? choose : [ ]
        choose.map((e: ONE) => { const it: string = e[key]; it ? iist.push(it): undefined; })
        return iist
    },
}