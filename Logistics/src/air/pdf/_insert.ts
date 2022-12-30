
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

export {
    insert
}