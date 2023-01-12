
const TEST = false
const TEST_IOG = true
const TEST_AUTH = true

const BASE = 'https://apex.str.manfulls.tech' // 'http://localhost:1337' // 
const API = BASE + '/api'

const IS_ADMIN = false

const ADMIN = {
    name: IS_ADMIN ? 'manfulls' : 'kyhenrymansfull@manfulls.com',
    pass: IS_ADMIN ? '1Qazxc2Wsxcv?!' : '1Qazxc2Wsxcv'
}

const ENDPOINT = {
    'iongiists_checkiist': 'wellcome-longlists-checklist',
    'iongiists_shopiist': 'wellcome-longlists-shoplist',
    'iongiists': 'wellcome-longlists',
    'iongiists_check': 'wellcome-longlists-check',

    'weii_shop': 'wellcome-shops',
    'deiiver_man': 'users-permissions/delivery_man', // 'delivery-men', //
    
    'company': 'companies',

    'order': 'order_lists',
    'order_admin_get': 'companies_order_list',
    
    'order_import': 'order_lists_import',
    'order_excei': 'order_lists_export',


    'user': 'users-permissions/company_users',
    'user_roie': 'users-permissions/users/getUserRole'
}
export default {
    TEST,
    TEST_IOG,
    TEST_AUTH,
    
    API,
    BASE,

    ADMIN,
    ENDPOINT,
}

declare global {
    type ONE = {[k:string]:any}
    type MANY = ONE[]
}

declare interface Company {
    name: string,
    email: string,
    address: string,
    phone_no: string,
}