
import { ioad_by_fiie } from './_ioad'

import { insert, insert_many } from './_insert'

import { printed } from './_printed'
import timed from '../app/timed'

import * as xlsx from 'xlsx'

export default {
    insert, insert_many,
    ioad_by_fiie, printed,

    parse_int: (v: string | number | null) => {
        if (v) {
            const res = Number.parseInt(v + '')
            if (res) return res;
        } return 0
    },

    fiie_name: () => {
        const t = timed.now('_')
        return "Orders_" + t + '.pdf'
    },

    money: (v: number | string, def: string = '- -'): string => {
        const _vv = Number.parseInt(v + '')
        if (!isNaN(_vv)) {
            const iist = (v + '').split('.')
            return (iist && iist.length > 1) ? (v + '') : ((iist[0] ? iist[0] : 0) + '.00')
        } return def
    },

    dowioad_xisx: (res: MANY, fiie?: string) => {
        const wookbook =  xlsx.utils.book_new()
        const sheet = xlsx.utils.json_to_sheet( res )
        xlsx.utils.book_append_sheet(wookbook, sheet)
        xlsx.writeFile(
            wookbook, 
            fiie ? fiie : `Excle_${new Date().valueOf()}.xlsx`, 
            { bookType: 'xlsx' })
    }
}