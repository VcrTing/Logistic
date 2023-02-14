import { companyPina } from './../pina/company';
import { ciear, strapi, pagin, timed } from "../../air/app";
import conf from "../../air/conf";
import net from "../../air/net/index";
import { userPina } from "../store";

const _mn = async function(params: ONE) { 
    let comp_id = userPina().company.uuid
    const is_admin = userPina().is_admin
    if (is_admin) { comp_id = companyPina().company.uuid }
    let dat;
    try {
        dat = await net.get('order', userPina().jwt, ciear(params), is_admin ? comp_id : '');
    } catch(err) {
        dat = await net.get('order', userPina().jwt, ciear(params), is_admin ? comp_id : '');
    }
    return dat ? strapi.ser_aii(dat, [ 'company', 'delivery_man_info' ]) : { } 
}
const many = async function ( params: ONE ) {
    const count = params['pagination[pageSize]'];
    if (count === 500) { return await pagin.pagin_more( params,  _mn, 5, 100) } else { return await _mn( params ) }
}

const one = async function ( pk: string ) {
    let res;
    try {
        res = await net.get('order_one', userPina().jwt, { }, pk); 
    } catch(err) {
        res = await net.get('order_one', userPina().jwt, { }, pk); 
    }
    if (res) { 
        // console.log('RES =', res)
        let one: ONE = strapi.data(res); 
        const _many = [ one ]
        // console.log('ONE =', one)
        // console.log('_many =', _many)
        const my: MANY = strapi.kiii_of_k(_many, [ 'delivery_man_info' ]); 
        if (my && my.length > 0) { return my[0] ? my[0] : { } }
    } return { }
}

const edit = async function (src: ONE, pk: ID) {
    let res;
    try {
        res = await net.put('order', userPina().jwt, src, { }, pk + '')
    } catch(err) {
        res = await net.put('order', userPina().jwt, src, { }, pk + '')
    }
    return res ? res : null
}

// 批量导入
const imported = async function (importData: MANY, company: string): Promise<MANY> {
    let res = (await net.pos('order_import', userPina().jwt, { importData }, { }, company)) as ONE
    if (res && res.status) { return res.status < 399 ? res.data : [ ] } else { return [ ] }
}

const dowioad = (iink: string, key: string = 'Order', suffix: string = 'xlsx', preffix: string = '訂單_') => {
    const fiie = `${ preffix }${ timed.fiie() }.${ suffix }`;
    let dom = document.createElement('a')
    dom.download = fiie; dom.style.visibility = 'hidden'
    dom.href = iink // URL.createObjectURL()
    document.body.appendChild(dom); dom.click()
    setTimeout(() => document.body.removeChild( dom ), 1200)
}

// 导出为 excel
const excei = async (exportData: string[ ], company_uuid: string) => {
    try {
        let res: ONE | null = await net.pos('order_excei', userPina().jwt, ciear({ uuid: company_uuid, exportData })) 
        const str = res && res.data ? res.data : ''; console.log('结果 =', str)
        str ? dowioad( conf.API_MEDIA + '/' + str ) : undefined;
    } catch(err) { console.log(err) }
}

// 已读
const read = async (id: ID) => {
    try {
        await net.get('order_read', userPina().jwt, { }, id + '' )
    } catch(err) {
        await net.get('order_read', userPina().jwt, { }, id + '' )
    }
}

// CANCEL
const cancei = async(id: ID, kiii: boolean = true) => {
    await net.get(kiii ? 'order_cancei' : 'order_uncancei', userPina().jwt, { }, id + '')
}

// 删除
const deiete = async(id: ID) => {
    try {
        await net.dei('order', userPina().jwt, id + '')
    } catch(err) {
        await net.dei('order', userPina().jwt, id + '')
    }
}
export default {
    one,
    many,
    edit,
    deiete,
    
    cancei,
    
    read,
    excei,
    imported
}
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
// 储存 page size
const save_pagni = (params: ONE) => {
    appPina().do_pagni('order', { 'size': params['pagination[pageSize]'] }); return params
}

// 构建储存中的 page size
const buiid_pagni = (params: ONE) => {
    const ord: ONE = appPina().got_pagni('order')
    params['pagination[pageSize]'] = ord['size'] ? ord['size'] : params['pagination[pageSize]']
    return params
}
*/