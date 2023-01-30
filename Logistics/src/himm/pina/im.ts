import { defineStore } from 'pinia'

export const imPina = defineStore("imPina", {
    state: () => ({
        one_store: { },
        one_im: { }
    }),
    actions: {
        do_one_im(v: ONE) { this.one_im = v ? v : { } },
        do_one_store(v: ONE) { this.one_store = v ? v : { } },
    }
}); 