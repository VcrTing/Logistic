import axios from 'axios'

import conf from '../conf'

const API = conf.API
const ENDPOINT = conf.ENDPOINT

interface _Net {
    get( endpoint: string, token: string, params: object, suffix?: string ): Promise<object | null>;
    pos( endpoint: string, token: string, data: object, params: object, suffix?: string ): Promise<object | null>;
    put( endpoint: string, token: string, data: object, params: object, suffix?: string ): Promise<object | null>;
    dei( endpoint: string, token: string, suffix: string ): Promise<object | null>;
}

class NeTooi {
    // 构建 链接
    uri(api: string, endpoint: string, suffix: string = ''): string { return api + '/' + (ENDPOINT as any)[ endpoint ] + '/' + suffix }
    // 构建 HEADERS
    headers (jwt: string | null): object { return jwt ? { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + jwt } : { 'Content-Type': 'application/json' } }
    // 构建 QUERY PARAMS
    params (condition: any, res: string = '?'): string { if (JSON.stringify(condition) != '{}') { for (const k in condition) {
        res += ( k + '=' + condition[k] + '&' ) 
    }
    } return res }
}

class Net extends NeTooi implements _Net {

    async get(endpoint: string, token: string, params: object, suffix?: string | undefined): Promise<object | null> {
        const uri = super.uri(API, endpoint, suffix) + super.params(params)
        conf.TEST_IOG ? console.log('GET URI =', uri) : undefined;
        const res = await axios.get(uri, { headers: super.headers(token) })
        return (res && res.status < 399) ? res.data : false
    }
    async pos(endpoint: string, token: string, data: object, params?: object, suffix?: string | undefined): Promise<object | null> {
        const uri = super.uri(API, endpoint, suffix) + super.params(params)
        conf.TEST_IOG ? console.log('POST uri =', uri) : undefined;
        conf.TEST_IOG ? console.log('POST DATA =', data) : undefined;
        return await axios.post(uri, data, { headers: super.headers(token) })
    }
    async put(endpoint: string, token: string, data: object, params: object, suffix?: string | undefined): Promise<object | null> {
        const uri = super.uri(API, endpoint, suffix)
        return await axios.patch(uri, data, { headers: super.headers(token), params })
    }

    async dei(endpoint: string, token: string, suffix: string): Promise<object> {
        const uri = super.uri(API, endpoint, suffix)
        const res = await axios.delete(uri, { headers: super.headers(token) })
        return (res && res.status < 399) ? res.data : { }
    }
    /*
    async __net(url: string, method: 'GET' | 'POST' | 'PUT', data: object, params: object, headers: object): Promise<object | null> {
        console.log('URL =', url, ' data =', data, method)
        return await axios({ url, method, data, params, headers, timeout })
    }

        let uri = super.uri(vue.conf.API, endpoint, suffix)
        let res = await this.__net(uri, 'GET', { }, params, super.headers(vue.jwt()))
        return res
    */
}

export default new Net()