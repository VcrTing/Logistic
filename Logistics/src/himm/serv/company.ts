import { ciear, strapi } from "../../air/app";
import net from "../../air/net/index";
import { userPina } from "../store";

const many = async function ( params: ONE ) {
    let res = await net.get('company', userPina().jwt, ciear(params)); 
    console.log('获取company =', res)
    if (res) { return strapi.ser_aii(res, [ ]) } return { }
}

const creat = async function (src: ONE) {
    let res = await net.pos('company', userPina().jwt, src)
    console.log('creat res =', res)
    return res ? res : null
}

const edit = async function (src: ONE, pk: string) {
    let res = await net.put('company', userPina().jwt, src, {}, pk)
    console.log('edit res =', res)
    return res ? res : null
}

export default {
    many,
    edit,
    creat
}