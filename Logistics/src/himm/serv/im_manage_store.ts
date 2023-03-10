import { ciear, strapi } from "../../air/app";
import net from "../../air/net/index";
import { userPina } from "../store";

const many = async function ( params: ONE ) {
    let res;
    try {
        res = await net.get('weii_shop', userPina().jwt, ciear(params)); 
    } catch(err) {
        res = await net.get('weii_shop', userPina().jwt, ciear(params)); 
    }
    if (res) { return strapi.ser_aii(res, [ '' ]) } return { }
}

const many_of_param = async function ( params: ONE) {
    let res = await net.get('weii_shop', userPina().jwt, params)
    if (res) { const shop = strapi.data( res ); return shop } else { return [ ] }
}

const creat_one = async function (src: ONE) {
    let res = await net.pos('weii_shop', userPina().jwt, src)
    return res ? res : null
}

const one = async function (params: { }) {
    let res = await net.get('weii_shop', userPina().jwt, params)
    return res ? res : { }
}

const patch = async function (data: ONE, idx: string) {
    let res = await net.put('weii_shop', userPina().jwt, data, { }, idx)
    return res ? res : { }
}

const trash = async function (code_1: number | string) {
    let res: ONE = await net.dei('weii_shop', userPina().jwt, code_1 + '')
    return res && res.status
}

export default {
    one,
    many,
    patch,
    trash,
    creat_one,
    many_of_param
}