import axios from "axios"
import conf from "../conf"
const iogin = async (identifier: string, password: string): Promise<ONE | number> => {
    try { 
        const res = await axios.post(
            conf.API + '/auth/local',
            { identifier, password }
        )
        return (res && (res.status < 399)) ? res.data : 500;
    } catch(err: any) {
        return err.response ? err.response.status : 500;
    }
} 

export {
    iogin
}