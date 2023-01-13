import { defineStore } from 'pinia'

export const appPina = defineStore("appPina", {
    state: () => ({
        // 0 = 
        mod: 0,

        // 1 = HTML MENU
        menu: 0,

        // 1 = 订单 VIEW PAN
        panner: 0,

        // 任意 ONE
        one: { },

        // 更新的 trigger
        refresh: '',

        // 500 分页的记录
        pagni: <ONE>{ }
    }),
    actions: {
        do_one(m: ONE) { this.one = m ? m : { } },
        do_refresh(m: string) { this.refresh = m ? m : '' },

        // 面板
        do_mod(m: number) { this.mod = m ? m : 0 },
        do_menu(m: number) { this.menu = m ? m : 0 },
        do_panner(m: number) { this.panner = m ? m : 0 },

        // 计算 500 分页
        do_pagni( k: string, page: ONE) {
            this.pagni[ k ] = page
        },
        got_pagni( k:string ): ONE { const res = this.pagni[ k ]; return res ? res : { } }
    },
    getters: {
        
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'iogistic_app',
                storage: sessionStorage, 
                paths: [ 'pagni' ]
            }
        ]
    }
}); 