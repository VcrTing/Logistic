import { defineStore } from 'pinia'

export const imPina = defineStore("imPina", {
    state: () => ({
        
        one_store: { },
    }),
    actions: {
        do_one_store(v: ONE) { this.one_store = v ? v : { } },
    },
    getters: {
        
    },
}); 