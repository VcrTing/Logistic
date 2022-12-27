import { defineStore } from 'pinia'

export const companyPina = defineStore("companyPina", {
    state: () => ({
        one_company: <ONE>{ },
    }),
    actions: {
        do_one_company(v: ONE) { this.one_company = v ? v : { } },
    },
    getters: {
        
    },
}); 