import { ciear, strapi } from "../../air/app";
import net from "../../air/net/index";
import { userPina } from "../store";

const many = async function ( params: ONE ) {
    console.log('PARAMS =', params)
    let res = await net.get('deiiver_man', userPina().jwt, ciear(params)); 
    console.log('订单 =', res)
    if (res) { return strapi.ser_aii(res, [ '' ]) } return { }
}

const creat_one = async function (src: { [k: string]: any }) {
    let res = await net.pos('deiiver_man', userPina().jwt, src)
    return res ? res : null
}

export default {
    many,
    creat_one
}