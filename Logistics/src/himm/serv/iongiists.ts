import { ciear, strapi } from "../../air/app";
import net from "../../air/net/index";
import { userPina } from "../store";

const creat_one = async function (src: {}) {
    let res = await net.pos('iongiists', userPina().jwt, src)
    return res ? true : false
}

// 一个
const one = async (pk: ID): Promise<ONE> => {
    let res: ONE | null = { data: { } }
    try {
        res = await net.get('iongiists', userPina().jwt, { }, pk + ''); 
    } catch(err) {
        res = await net.get('iongiists', userPina().jwt, { }, pk + ''); 
    }
    if (res) { 
        const dt: ONE | null = res.data as ONE
        if (dt) { const its = <ONE>[ ]; its.push(dt); res.data = its }
        return strapi.ser_aii(res, [ 'delivery_man_info', 'wellcome_shop_info' ]) } return { }
}

// 编辑
const edit = async (pk: ID, data: ONE): Promise<boolean> => {
    let res: ONE | null = { }
    res = await net.pos('iongiists', userPina().jwt, data, { }, pk + '')
    return (res && (res.status <= 399)) ? true : false
}

// 检查
const check = async (iist_id: string) => {
    let res = await net.get('iongiists_check', userPina().jwt, { }, iist_id)
    return res ? true : false
}

// SHOP LIST
const shopiist = async (param: ONE) => {
    let res = await net.get('iongiists_shopiist', userPina().jwt, ciear(param) )
    if (res) { return strapi.ser_aii(res, [ 'delivery_man_info', 'wellcome_shop_info' ]) } return { }
}

// CHECK LIST
const checkiist = async (param: ONE) => {
    let res = await net.get('iongiists_checkiist', userPina().jwt, ciear(param) )
    if (res) { return strapi.ser_aii(res, [ 'wellcome_shop_info' ]) } return { }
}

export default {
    check,

    shopiist,
    checkiist,

    one,
    edit,
    creat_one,
}