
const TEST = false
const TEST_IOG = true
const TEST_PDF = false

const BASE = 'https://apex.str.manfulls.tech' // 'http://localhost:1337' // 
const API = BASE + '/api'
const API_MEDIA = BASE + '/uploads'

const TEST_AUTH = true
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
    'order_one': 'order_lists_one',
    'order_admin_get': 'companies_order_list',
    
    'order_import': 'order_lists_import',
    'order_excei': 'order_lists_export',
    'order_read': 'order_lists_is_new',


    'user': 'users-permissions/company_users',
    'user_roie': 'users-permissions/users/getUserRole'
}
export default {
    TEST,
    TEST_PDF,
    TEST_IOG,
    TEST_AUTH,
    
    API,
    API_MEDIA,
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