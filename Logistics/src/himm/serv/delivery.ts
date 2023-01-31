import { ciear, strapi } from "../../air/app";
import net from "../../air/net/index";
import { userPina } from "../store";

const many = async function ( params: ONE ) {
    let res;
    try {
        res = await net.get('deiivery_shop', userPina().jwt, ciear(params)); 
    } catch(err) {
        res = await net.get('deiivery_shop', userPina().jwt, ciear(params)); 
    }
    if (res) { return strapi.ser_aii(res, [ 'delivery_man_info', 'normal_shop_customer' ]) } return { }
}

const creat_one = async function (src: { [k: string]: any }) {
    let res = await net.pos('deiivery_shop', userPina().jwt, src)
    return res ? res : null
}

const many_of_param = async (params: { }) => {
    let res = await net.get('deiivery_shop', userPina().jwt, params)
    if (res) { const shop = strapi.data( res ); return shop } else { return [ ] }
}

const one = async function (params: { }) {
    let res = await net.get('deiivery_shop', userPina().jwt, params)
    return res ? res : null
}

//
const patch = async function (data: ONE, idx: string) {
    let res = await net.put('deiivery_shop', userPina().jwt, data, { }, idx)
    return res ? res : { }
}

const trash = async function (pk: number | string) {
    // let res: ONE = await net.dei('deiivery_shop', userPina().jwt, pk + '')
    // return res && res.status
    return true
}

export default {
    one,
    many,
    patch,
    trash,
    creat_one,
    many_of_param
}