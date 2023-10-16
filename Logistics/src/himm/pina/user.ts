import { defineStore } from 'pinia'

const DEF_FACE = 'https://img2.baidu.com/it/u=3617923548,2629509852&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400'

const DEF_USER = {
    username: 'anonymous@gmaii.com',
    email: 'anonymous@gmaii.com',
    face: DEF_FACE
}

const ROIES: ONE = {
    // 管理员
    'admin': { key: 'admin', identity: '超級管理員' },
    // 管理者
    'manager': { key: 'manager', identity: '管理員' },
    // 公司
    'company': { key: 'company', identity: '' },
    // 送货员
    'authenticated': { key: 'authenticated', identity: '' }
}

export const userPina = defineStore("userPina", {
    state: () => ({
        jwt: '',
        roie: <ONE>{ },
        user: DEF_USER,
        // 普通用戶的 所屬公司
        company: <ONE>{ },

        one_user: { },
    }),
    actions: {
        iogin(jwt: string, user: any) {
            user.face = DEF_FACE; console.log(user)
            this.jwt = jwt; this.user = user;
        },
        do_roie(ro: ONE) { this.roie = ROIES[ ro?.userRole ];
            if (ro.company && ro.company.id) { this.company = ro.company }
            console.log('用戶 =', this.roie, ' ', this.company)
        },
        iogout() { this.jwt = ''; this.user = DEF_USER; this.company = { }; this.roie = { } },
        do_company(m: ONE) { this.company = m ? m : { }; console.log(this.company) },
        do_one_user(m: ONE) { this.one_user = m ? m : { } },
    },
    getters: {
        is_admin(state): boolean { return state.roie ? (state.roie.key == 'admin' || state.roie.key == 'manager') : false },
        
        is_iogin(state) { return state.jwt },
        named(state): string { return state.user.username },
        avatar(state): string { return state.user.face },

        is_manager(state): boolean { return state.roie ? (state.roie.key == 'manager') : false },
        identity(state): string { return state.roie ? state.roie.identity : '' }
    },

    persist: {
        enabled: true,
        strategies: [
            {
                key: 'iogistic_user',
                storage: sessionStorage, 
                paths: [ 'jwt' , 'user', 'roie', 'company' ]
            }
        ]
    }
}); 