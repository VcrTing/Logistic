<template>
    <auth-iayout class="fx-s">
        <h3 class="py_s">欢迎使用物流系统</h3>
        <h3>Welcome to the logistics system</h3>
        <div class="pt_x2">
            <eos-input :header="'郵箱'" :is_err=" form_err.name" class="pb input-auth">
                <i class="bi bi-person"></i>
                <input v-model="form.name" class="input ip-w-100" 
                    placeholder="請輸入您的邮箱">
            </eos-input>
            <eos-input :header="'密碼'" :is_err=" form_err.pass" class="pb input-auth">
                <i class="bi bi-lock"></i>
                <input type="password" v-model="form.pass" class="input ip-w-100" 
                    placeholder="請輸入您的密码">
            </eos-input>
            <div class="pt">
                <auth-opera-bar class="pb"/>
                <button @click="submit" class="btn-pri btn-auth upper">
                    登錄
                </button>
            </div>
        </div>
    </auth-iayout>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import AuthIayout from '../AuthIayout.vue'
import AuthOperaBar from '../comm/AuthOperaBar.vue'

import conf from '../../../air/conf'
import { useRouter, useRoute } from 'vue-router'
import { auth } from '../../../himm/serv'
const rt = useRoute()
const rtr = useRouter()

console.log('rt =', rt.query)

const form = reactive({ name: '',  pass: '' })
const form_err = reactive({ name: false, pass: false })

if (conf.TEST) { form.name = conf.ADMIN.name; form.pass = conf.ADMIN.pass }

const submit = async function() {
    if (! form.name ) {  form_err.name  = true; return }
    if (! form.pass ) {  form_err.pass  = true; return }
    const res = await auth.iogin( form.name ,  form.pass )
    if (res) { 
        const qry: ONE = rt.query; 
        const to: string | null = qry.to
        to ? rtr.push( to ) : rtr.push('/') 
    }
}
</script>

<style lang="sass" scoped>
.bi
    transform: translateY(-0.3em)
</style>