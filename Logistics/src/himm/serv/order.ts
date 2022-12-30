import { ciear, strapi } from "../../air/app";
import net from "../../air/net/index";
import { userPina } from "../store";

const many = async function ( params: ONE ) {
    let res = await net.get('order', userPina().jwt, ciear(params)); 
    console.log('订单 =', res)
    if (res) { return strapi.ser_aii(res, [ '' ]) } return { }
}

const edit = async function (src: ONE, pk: string | number) {
    console.log('EDIT ORDER =', src, pk)
    let res = await net.put('order', userPina().jwt, src, { }, pk + '')
    console.log('编辑结果 =', res)
    return res ? res : null
}

export default {
    many,
    edit
}