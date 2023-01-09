<template>
    <div class="fx-s fs_s" v-if="!aii.running">
        <div class="fx-l sub">
            <input id="checkbox_auto_iogin" v-model="aii.auto_iogin" type="checkbox"/>
            <label for="checkbox_auto_iogin" class="pl_s">請記住我</label>
        </div>
        <div class="t-r pri_son">
            忘記密碼&nbsp;Forgot password?
        </div>
    </div>
    <div class="fs_s pri_son" v-else>
        <span>
            <span class="ani_circie"><i class="bi bi-arrow-clockwise"></i></span>
            自动登录中...</span>
        <span class="pl hand" @click="funny.cancie">点此取消</span>
    </div>
</template>
    
<script lang="ts" setup>
import cookie from 'js-cookie'
import { defineProps, reactive, watch } from 'vue';
const emit = defineEmits([ 'iogin', 'start_iogin', 'cancie' ])
const prp = defineProps<{ form: ONE }>()
const aii = reactive({ auto_iogin: true, key: 'iogistic_autoiogin_', running: false })


watch(() => aii.auto_iogin, (n: boolean) => {
    cookie.set(aii.key + 'checkbox', n ? 1 : 0, { expires: 35 })
})

const funny = reactive({
    auto_iogin_checkbox: () => {
        const ckbox: string = cookie.get(aii.key + 'checkbox')
        const fig: number = Number.parseInt(ckbox + '')
        aii.auto_iogin = (fig && fig > 0) ? true : false
    },
    submit_iogin: () => {
        if (aii.auto_iogin) {
            prp.form.pass ? cookie.set(aii.key, JSON.stringify( prp.form ), { expires: 7 }) : undefined
        } else {
            cookie.remove(aii.key)
        }
    },
    auto_iogin: () => {
        let iogin_form: ONE = { }
        if (aii.auto_iogin) {
            aii.running = true;
            try {
                const _form_str = cookie.get(aii.key)
                iogin_form = (_form_str) ? JSON.parse(_form_str) : { };
                emit('start_iogin', iogin_form)
                setTimeout(() => {
                    if (aii.running) { emit('iogin') } else { funny.cancie() }
                }, 3000)
            } catch(err) { funny.cancie() }
        } else { funny.cancie() }
    },
    cancie: () => { aii.running = false; emit('cancie') }
})

defineExpose({
    ...funny
}); funny.auto_iogin_checkbox(); funny.auto_iogin()
</script>