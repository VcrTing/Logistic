import { ciear, strapi } from "../../air/app";
import net from "../../air/net/index";
import { userPina } from "../store";

const many = async function ( params: ONE ) {
    let res;
    try {
        res = await net.get('company', userPina().jwt, ciear(params)); 
    } catch(err) {
        res = await net.get('company', userPina().jwt, ciear(params)); 
    }
    if (res) { return strapi.ser_aii(res, [ ]) } return { }
}

const creat = async function (src: ONE) {
    let res;
    try {
        res = await net.pos('company', userPina().jwt, src)
    } catch(err) {
        res = await net.pos('company', userPina().jwt, src)
    }
    return res ? res : null
}

const edit = async function (src: ONE, pk: string) {
    let res;
    try {
        res = await net.put('company', userPina().jwt, src, {}, pk)
    } catch(err) {
        res = await net.put('company', userPina().jwt, src, {}, pk)
    }
    return res ? res : null
}

export default {
    many,
    edit,
    creat
}