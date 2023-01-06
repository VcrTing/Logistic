import { defineStore } from 'pinia'

export const orderPina = defineStore("orderPina", {
    state: () => ({
        order: <ONE>{ },
        orders: <MANY>[ ]
    }),
    actions: {
        do_order(v: ONE) { this.order = v ? v : { } },
        do_orders(v: MANY) { this.orders = v ? v : [ ] },
    },
    getters: {
        
    }, 
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'dan__',
                storage: sessionStorage, 
                paths: [ 'orders' ]
            }
        ]
    }
}); 