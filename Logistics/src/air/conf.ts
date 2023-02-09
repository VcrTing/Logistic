
const TEST = false
const TEST_IOG = true
const TEST_PDF = false

const VERSION = '1.12'

const BASE = 'https://apex.str.manfulls.tech' // 'http://localhost:1337' // 
const API = BASE + '/api'
const API_MEDIA = BASE + '/uploads'

const TEST_AUTH = true
const IS_ADMIN = false

const ADMIN = {
    name: IS_ADMIN ? 'manfulls' : 'kyhenrymansfull@manfulls.com',
    pass: IS_ADMIN ? '1Qazxc2Wsxcv?!' : '1Qazxc2Wsxcv'
}

const ADMIN_PATH: string[] = [
    '/admin/dashboard',
    '/admin/company_choose', '/admin/company_iist', 
    '/admin/deliver_iist',
    '/admin/iong_manage/im_iist',
    '/admin/iong_manage/im_store_iist'
]
const USER_INDEX = '/admin/order_iist'

// abcdef@abcdef.com
// 1Qazxc2Wsxcv?!

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

    'order_cancei': 'cancel_order',
    'order_uncancei': 'uncancel_order',


    'user': 'users-permissions/company_users',
    // 'user_roie': 'users-permissions/users/getUserRole'
    'user_roie': 'users-permissions/users/getUserInfo',

    // 运货单
    'deiivery_shop': 'normal-shop-delivery-lists',
    'deiivery_iongiist': 'wellcome-longlists-shoplist'
}

export default {
    TEST,
    TEST_PDF,
    TEST_IOG,
    TEST_AUTH,
    
    API,
    API_MEDIA,
    BASE,

    ADMIN_PATH,
    USER_INDEX,

    ADMIN,
    ENDPOINT,

    VERSION
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