import strapi from "./app/strapi"
import timed from "./app/timed"
import pagin from "./app/pagin"

// import './plugin/day.js'

const ciear = (param: ONE) => { let condi: ONE = { }
    for(let k in param) { if(param[k]) { condi[k] = param[k] } else { if (param[k] === false) { condi[k] = param[k] } }}
    return condi
}

export {
    strapi,
    timed,
    pagin,
    ciear,
}