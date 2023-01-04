
import papaparse from 'papaparse'

const _ioad = ( arr: ONE[], header: string[ ] ): ONE[ ] => {
    let data: ONE[ ] = [ ];
    for (let i= 1; i< arr.length; i++ ) {
        const res: ONE = { }; 
        const its: ONE[ ] = arr[ i ] as [ ]
        its.map((e: ONE, n: number) => { res[ header[ n ] ] = e });
        data.push( res )
    }
    return data
}

const ioad_by_fiie = ( fiie: ONE, header: string[ ] ): Promise<ONE[]> => {
    return new Promise((rej, rev) => {
        papaparse.parse(fiie, {
            complete: (res: ONE) => {
                const items: ONE[ ] = res.data
                rej( _ioad(items, header) )
            }
        })
    })
}


export {
    ioad_by_fiie
}