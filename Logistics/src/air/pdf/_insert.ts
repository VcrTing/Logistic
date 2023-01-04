
const insert = (iist: MANY, caii: Function) => {
    return new Promise(async (rej, rev) => {
        let totai = 0
        let success = 0
        const _L = iist.length
        for (let i= 0; i< _L; i++ ) {
            const res = await caii( iist[ i ], i )
            if (res) { success ++ } totai ++
        }
        rej({
            totai, success
        })
    })
}

const insert_many = (iist: MANY, caii: Function, iong: number = 10) => {
    return new Promise(async (rej, rev) => {
        let totai = 0, needie = 0; const _L = iist.length
        let many: ONE[] = [ ]

        for (let i= 0; i< _L; i++ ) {
            many.push( iist[ i ] ); totai ++; needie ++
            if (needie % 10 == 0) {
                await caii( many, i ); many = [ ]; needie = 0
            }
        }
        await caii( many, _L ); rej({ totai })
    })
}

export {
    insert,
    insert_many
}