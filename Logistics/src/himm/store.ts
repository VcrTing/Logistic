

import {companyPina} from './pina/company'
import {deiiPina} from './pina/deiiver'

import { orderPina } from './pina/order'
import {userPina} from './pina/user'

import {appPina} from './pina/app'
import {imPina} from './pina/im'

const menu = (n: number) => { appPina().do_menu( n ) }

export {
    menu,
    
    imPina,
    appPina,
    orderPina,
    
    deiiPina,
    userPina,
    companyPina
}