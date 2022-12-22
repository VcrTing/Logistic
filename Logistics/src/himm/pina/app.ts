import { defineStore } from 'pinia'

export const appPina = defineStore("appPina", {
    state: () => ({
        // 1 = HTML MENU
        menu: 0,

        // 1 = 订单 VIEW PAN
        panner: 0
    }),
    actions: {
        do_menu(m: number) { this.menu = m ? m : 0 }
    },
    getters: {
        
    },
}); 