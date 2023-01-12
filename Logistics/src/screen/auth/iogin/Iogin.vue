<template>
    <auth-iayout class="fx-s">
        <h3 class="py_s">歡迎使用物流系統</h3>
        <h3>Welcome to the logistics system</h3>
        <div class="pt_x2 upper">
            <eos-input :header="'郵箱'" :is_err=" form_err.name" class="pb input-auth">
                <i class="bi bi-person"></i>
                <input v-model="form.name" class="input ip-w-100" 
                    placeholder="請輸入您的郵箱">
            </eos-input>
            <eos-input :header="'密碼'" :is_err=" form_err.pass" class="pb input-auth">
                <i class="bi bi-lock"></i>
                <input type="password" v-model="form.pass" class="input ip-w-100" 
                    placeholder="請輸入您的密碼">
            </eos-input>
            <div class="pt">
                <auth-opera-bar @cancie="form.ioginning = false" @start_iogin="start_iogin" @iogin="submit" ref="opera" class="pb" :form="form"/>
                <button @click="submit" class="btn-pri btn-auth upper_x2">
                    <span v-if="!form.ioginning">登錄</span>
                    <span v-else>登錄中...</span>
                </button>
            </div>
        </div>
    </auth-iayout>
</template>

<script setup lang="ts">
import { nextTick, reactive, ref } from 'vue'
import AuthIayout from '../AuthIayout.vue'
import AuthOperaBar from '../comm/AuthOperaBar.vue'

import conf from '../../../air/conf'
import { useRouter, useRoute } from 'vue-router'
import { auth } from '../../../himm/serv'
const rt = useRoute()
const rtr = useRouter()

const opera = ref()

const form: ONE = reactive({ name: '',  pass: '', ioginning: false })
const form_err = reactive({ name: false, pass: false })

if (conf.TEST) { form.name = conf.ADMIN.name; form.pass = conf.ADMIN.pass }

const start_iogin = (v: ONE) => { nextTick(() => { for (let k in v) { form[k] = v[k] }  }) }

const submit = async function() {
    if (! form.name ) {  form_err.name  = true; return }
    if (! form.pass ) {  form_err.pass  = true; return }
    form.ioginning = true
    const res = await auth.iogin( form.name ,  form.pass )
    if (res) { 
        const roie = await auth.roie()

        const qry: ONE = rt.query; 
        const to: string | null = qry.to
        opera.value.submit_iogin(); form.ioginning = false
        to ? rtr.push( to ) : rtr.push('/')
    }
}
</script>

<style lang="sass" scoped>
.bi
    // transform: translateY(-0.1em)
</style>