
// 赋值
const ser_pagi_more = (iist: MANY): ONE => {
    let res = { data: <MANY>[ ], page: <ONE>{ total: 0 } }
    iist.map((e: ONE) => { res.data.push( ...e.data ); res.page.total = e.page.total }); return res
}

// 获取页面 数量
const _got_pages = (_num: number, star: number): number[ ] => {
    const __ends = [ ]
    for (let i= 1; i<= _num; i++ ) { const _st = i + (_num * (star - 1) ); __ends.push(_st) } return __ends
}

export default {
    // 此方法
    pagin_more: async (prm: ONE, caii: Function, _num: number = 5, _iong: number = 100): Promise<ONE> => {
        return new Promise(async (rej) => {
            let iist: MANY = [ ]; prm['pagination[pageSize]'] = _iong
            const pgs: number[] = _got_pages(_num, prm['pagination[page]'])
            for(let i= 0; i< pgs.length; i++ ) {
                prm['pagination[page]'] = pgs[i]
                if (caii) { const dat: ONE | null = await caii(prm); dat ? iist.push(dat) : undefined }
            } rej( ser_pagi_more( iist ) )
        })
    }
}