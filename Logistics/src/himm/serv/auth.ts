
import { iogin } from "../../air/net/auth";

import conf from "../../air/conf";
import { userPina } from "../store";
import net from "../../air/net";

export default {
    admin: async () => {
        const res = await iogin(conf.ADMIN.name, conf.ADMIN.pass)
        // res ? userPina().iogin(res.jwt, res.user) : undefined;
    },
    iogin: async (name: string, pass: string): Promise<number> => {
        const res = await iogin(name, pass)
        if (typeof res !== 'number') {
            if (res && res.jwt) {
                userPina().iogin(res.jwt, res.user); return 200
            } return 500
        } return res
    },
    roie: async () => {
        const res: ONE | null = await net.get('user_roie', userPina().jwt, { })
        userPina().do_roie((res && res?.userRole) ? res : { userRole: 'authenticated' })
    }
}