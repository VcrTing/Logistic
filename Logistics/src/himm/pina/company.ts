import { defineStore } from 'pinia'

export const companyPina = defineStore("companyPina", {
    state: () => ({
        // 訂單選擇頁面
        company: <ONE>{ },
        // 公司編輯
        one_company: <ONE>{ },
        one_company_user: <ONE>{ }
    }),
    actions: {
        do_company(v: ONE) { this.company = v ? v : { } },
        do_one_company_user(v: ONE ) { this.one_company_user = v ? v : { }  },
        do_one_company(v: ONE) { this.one_company = v ? v : { } },
    },
    getters: {
        
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'iogistic_company_iocaiStorage',
                storage: localStorage, 
                paths: [ 'company' ]
            }
        ]
    }
}); 