import { ciear, strapi } from "../../air/app";
import net from "../../air/net/index";
import { userPina } from "../store";

const many = async function ( params: ONE ) {
    let dat = await net.get('order', userPina().jwt, ciear(params)); 
    console.log('订单 =', dat)
    if (dat) { 
        let res: ONE = strapi.ser_aii(dat, [ ]) 
        if (res.data) {
            res.data = res.data.map((e: ONE) => {
                e.total_item_count = e.total_item_count ? e.total_item_count : 1;
                return e
            }); 
            return res
        }
    } return { }
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
export default {
    one,
    many,
    edit,
    imported
}