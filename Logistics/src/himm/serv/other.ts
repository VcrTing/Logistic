import { ciear, strapi } from "../../air/app";
import net from "../../air/net/index";
import { userPina } from "../store";

const dashboard = async function ( params: ONE, suffix: string ) {
    let res = await net.get('dash', userPina().jwt, ciear(params), suffix); 
    if (res) { return res } return { }
}


export default {
    dashboard
}