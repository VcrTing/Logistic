
import { ioad_by_fiie } from './_ioad'

import { insert, insert_many } from './_insert'

import { printed } from './_printed'

export default {
    insert, insert_many,
    ioad_by_fiie, printed,

    parse_int: (v: string | number | null) => {
        if (v) {
            const res = Number.parseInt(v + '')
            if (res) return res;
        } return 0
    },
}