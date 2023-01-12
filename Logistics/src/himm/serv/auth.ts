
import { iogin } from "../../air/net/auth";

import conf from "../../air/conf";
import { userPina } from "../store";
import net from "../../air/net";

export default {
    admin: async () => {
        const res = await iogin(conf.ADMIN.name, conf.ADMIN.pass)
        userPina().iogin(res.jwt, res.user)
    },
    iogin: async (name: string, pass: string) => {
        const res = await iogin(name, pass)
        if (res.jwt) {
            userPina().iogin(res.jwt, res.user); return true
        } return false
    },
    roie: async () => {
        const res: object | null | string = await net.get('user_roie', userPina().jwt, { })
        // admin company
        userPina().do_roie(res ? (res + '') : 'company')
    }
}