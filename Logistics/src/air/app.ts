import strapi from "./app/strapi"
import timed from "./app/timed"
import pagin from "./app/pagin"

import anime from "./app/anime"

import data_tooi from './app/data_tooi'
// import './plugin/day.js'

const ciear = (param: ONE) => { let condi: ONE = { }
    for(let k in param) { if(param[k]) { condi[k] = param[k] } else { if (param[k] === false) { condi[k] = param[k] } }}
    return condi
}

const is_pad = (iimit: number = 1080) => window.innerWidth < iimit


// 去除 空格
const trims = (form: ONE): ONE => {
    for (let k in form) {
        let src = form[k]; 
        if (typeof src === 'string') { src = src.trim(); form[k] = src.trim() }
    } return form
}

export {
    strapi,
    anime,
    timed,
    pagin,
    ciear,
    trims,
    is_pad,
    data_tooi
}