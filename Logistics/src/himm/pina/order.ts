import { defineStore } from 'pinia'
import { order } from '../serv';

export const orderPina = defineStore("orderPina", {
    state: () => ({
        order: <ONE>{ },
        orders: <MANY>[ ],
        orders_print: <MANY>[ ],

        orders_print_2: <MANY>[ ]
    }),
    actions: {
        do_order(v: ONE) { this.order = v ? v : { } },
        do_orders(v: MANY) { this.orders = v ? v : [ ] },
        do_orders_print(v: MANY) { this.orders_print = v ? v : [ ] },
        do_orders_print_2(v: MANY) { this.orders_print_2 = v ? v : [ ] },

        // 已读 order
        async read(id: number | string, is_new: boolean | null) { if (is_new) await order.read(id); }
    },
    getters: {
        
    }, 
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'iogistic_order',
                storage: sessionStorage, 
                paths: [ 'orders_print', 'orders_print_2' ]
            }
        ]
    }
}); 