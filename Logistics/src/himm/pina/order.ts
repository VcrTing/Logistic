import { defineStore } from 'pinia'

export const orderPina = defineStore("orderPina", {
    state: () => ({
        order: <ONE>{ }
    }),
    actions: {
        do_order(v: ONE) { this.order = v ? v : { } },
    },
    getters: {
        
    },
}); 