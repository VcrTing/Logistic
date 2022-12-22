import { ciear, strapi } from "../../air/app";
import net from "../../air/net/index";
import { userPina } from "../store";

const many = async function ( params: ONE ) {
    let res = await net.get('weii_shop', userPina().jwt, ciear(params)); 
    if (res) { return strapi.ser_aii(res, [ '' ]) } return { }
}

const many_of_param = async function ( params: ONE) {
    let res = await net.get('weii_shop', userPina().jwt, params)
    console.log('SHOP RES =', res)
    if (res) { const shop = strapi.data( res ); return shop } else { return [ ] }
}

const creat_one = async function (src: ONE) {
    let res = await net.pos('weii_shop', userPina().jwt, src)
    console.log('新增的RES =', res)
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

export default {
    one,
    many,
    patch,
    creat_one,
    many_of_param
}