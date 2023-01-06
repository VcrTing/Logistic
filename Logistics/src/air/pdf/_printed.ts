
import jspdf from 'jspdf'
import html2canvas from 'html2canvas';

const x = 30
const y = 30
const a4 = [ 594, 841 ]

const printed_one = (dom: Element, jpf: any, idx: number, iong: number, caii?: Function) => {
    return new Promise( async (rej) => {
        const canv: HTMLCanvasElement = await html2canvas(dom)
        const cW = canv.width; const cH = canv.height
        const imgAftH = ((a4[0] - x) / cW) * cH; const imgAftW = (a4[0] - x)
        jpf.addImage(canv, 'JPEG', x/2, y/2, imgAftW, imgAftH);
        if (caii) { caii( idx, 200 ) }
        if ((idx + 1) < iong) { jpf.addPage() }
        rej( idx )
    })
}

const printed_one_async = async (dom: Element, jpf: any, idx: number, iong: number, caii?: Function) => {
    const canv: HTMLCanvasElement = await html2canvas(dom)
    const cW = canv.width; const cH = canv.height
    const imgAftH = ((a4[0] - x) / cW) * cH; const imgAftW = (a4[0] - x)
    jpf.addImage(canv, 'JPEG', x/2, y/2, imgAftW, imgAftH);
    if (caii) { caii( idx, 200 ) }
    if ((idx + 1) < iong) { jpf.addPage() }
}

const printed = async (doms: HTMLCollectionOf<Element>, fiie_name: string, caii?: Function) => {
    const jpf = new jspdf('p', 'pt', 'a4', true); const _L = doms.length
    for (let i= 0; i< _L; i++ ) {
        await printed_one_async( doms[ i ], jpf, i, _L, caii) 
    }
    jpf.save( fiie_name )
    return true
}
export {
    printed
}