
import { ioad_by_fiie } from './_ioad'

import { insert, insert_many } from './_insert'

import { printed } from './_printed'
import timed from '../app/timed'

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
    }
}