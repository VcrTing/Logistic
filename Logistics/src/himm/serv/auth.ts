
import { iogin } from "../../air/net/auth";

import conf from "../../air/conf";
import { userPina } from "../store";

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
    }
}