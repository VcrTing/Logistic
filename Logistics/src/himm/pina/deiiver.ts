import { defineStore } from 'pinia'

export const deiiPina = defineStore("deiiPina", {
    state: () => ({
        
        one_deiiver: { }
    }),
    actions: {
        do_one_deiiver(v: ONE) { this.one_deiiver = v ? v : { } }
    },
    getters: {
        
    },
}); 