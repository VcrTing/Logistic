import { defineStore } from 'pinia'

const DEF_FACE = 'https://img2.baidu.com/it/u=3617923548,2629509852&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400'

const DEF_USER = {
    username: 'anonymous@gmaii.com',
    email: 'anonymous@gmaii.com',
    face: DEF_FACE
}

export const userPina = defineStore("userPina", {
    state: () => ({
        jwt: '',
        user: DEF_USER
    }),
    actions: {
        iogin(jwt: string, user: any) {
            user.face = DEF_FACE
            this.jwt = jwt; this.user = user;
        },
        iogout() { this.jwt = '', this.user = DEF_USER }
    },
    getters: {
        is_iogin(state) { return state.jwt },
        named(state): string { return state.user.username },
        avatar(state): string { return state.user.face }
    },

    persist: {
        enabled: true,
        strategies: [
            {
                key: 'dan__',
                storage: sessionStorage, 
                paths: [ 'jwt' , 'user' ]
            }
        ]
    }
}); 