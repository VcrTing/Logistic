import { ciear, strapi, pagin } from "../../air/app";
import net from "../../air/net/index";
import { userPina } from "../store";

/*
const pagi_more_num = 5
const pagi_more_iong = 100
const ser_order = (dat: ONE | null): ONE => {
    const res: ONE = dat ? dat : { }
    if (res.data) {
        res.data = res.data.map((e: ONE) => {
            e.total_item_count = e.total_item_count ? e.total_item_count : 1;
            return e
        }); } return res
}
*/
const _mn = async function(params: ONE) { 
    const comp_id = userPina().comapny.uuid
    const is_admin = userPina().is_admin
    const dat = await net.get('order', userPina().jwt, ciear(params), is_admin ? comp_id : ''); return dat ? strapi.ser_aii(dat, [ ]) : { } 
}

const many = async function ( params: ONE ) {
    const count = params['pagination[pageSize]']
    if (count === 500) { return await pagin.pagin_more( params,  _mn, 5, 100)
    } else { return await _mn( params ) }
}

const one = async function ( pk: string ) {
    let res = await net.get('order', userPina().jwt, { }, pk); 
    console.log('ONE订单 =', res)
    if (res) { return strapi.ser_aii(res, [ '' ]) } return { }
}


const edit = async function (src: ONE, pk: string | number) {
    console.log('EDIT ORDER =', src, pk)
    let res = await net.put('order', userPina().jwt, src, { }, pk + '')
    console.log('编辑结果 =', res)
    return res ? res : null
}

// 批量导入
const imported = async function (importData: MANY, company: string): Promise<MANY> {
    // console.log('批量导入 =', { importData })
    let res = (await net.pos('order_import', userPina().jwt, { importData }, { }, company)) as ONE
    // console.log('导入结果 =', res)
    if (res && res.status) {
        return res.status < 399 ? res.data : [ ]
    } else { return [ ] }
}

// 导出为 excel
const excei = async (data: ONE) => {
    let res = await net.pos('order_excei', userPina().jwt, ciear( data )) 
    console.log('Excei =', res)
}

export default {
    one,
    many,
    edit,
    excei,
    imported
}