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

export {
    strapi,
    anime,
    timed,
    pagin,
    ciear,
    is_pad,
    data_tooi
}