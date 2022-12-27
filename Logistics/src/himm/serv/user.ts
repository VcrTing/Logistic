import { ciear, strapi } from "../../air/app";
import net from "../../air/net/index";
import { userPina } from "../store";

const many = async function ( params: ONE ) {
    console.log('PARAMS =', params)
    let res = await net.get('user', userPina().jwt, ciear(params)); 
    console.log('获取custom user =', res)
    if (res) { return strapi.ser_aii(res, [ ]) } return { }
}

const creat = async function (src: ONE) {
    let res = await net.pos('user', userPina().jwt, src)
    console.log('creat custom user =', res)
    return res ? res : null
}

const edit = async function (src: ONE, pk: string) {
    let res = await net.put('user', userPina().jwt, src, { }, pk)
    console.log('edit custom user =', res)
    return res ? res : null
}

export default {
    many,
    edit,
    creat
}