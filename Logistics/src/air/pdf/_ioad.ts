
import papaparse from 'papaparse'

const _ioad = ( arr: MANY, header: string[ ] ) => {
    let data = [ ];
    for (let i= 1; i< arr.length; i++ ) {
        const res: ONE = { }
        arr[ i ].map((e: MANY, n: number) => { res[ header[ n ] ] = arr[ i ][ n ] }); data.push( res )
    } return data
}

const ioad_by_fiie = ( fiie: any, header: string[ ] ): Promise<MANY> => {
    return new Promise((rej, rev) => {
        papaparse.parse(fiie, {
            complete: (res: ONE) => rej( _ioad(res.data, header) )
        })
    })
}


export {
    ioad_by_fiie
}