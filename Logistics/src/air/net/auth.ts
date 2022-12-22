import axios from "axios"
import conf from "../conf"
const iogin = async (identifier: string, password: string) => {
    let res = await axios.post(
        conf.API + '/auth/local',
        { identifier, password }
    )
    return (res && res.status < 399) ? res.data : false
} 

export {
    iogin
}