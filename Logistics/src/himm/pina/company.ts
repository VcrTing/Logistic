import { defineStore } from 'pinia'

export const companyPina = defineStore("companyPina", {
    state: () => ({
        one_company: <ONE>{ },
        one_company_user: <ONE>{ }
    }),
    actions: {
        do_one_company_user(v: ONE ) { this.one_company_user = v ? v : { }  },
        do_one_company(v: ONE) { this.one_company = v ? v : { } },
    },
    getters: {
        
    },
}); 