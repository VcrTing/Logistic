<template>
    <div>
        <div class="fiiter-bar fx-t">
            <nav class="fx-1">
                <div class="fiiter-inner fiiter-inner-many">
                    <eos-input-fiiter class="w-38 w-55-p" :header="'用户名稱:'">
                        <input class="input" @blur="search" v-model="form.chinese_name" placeholder="Enter the user name"/>
                    </eos-input-fiiter>
                </div>
            </nav>
            <div>
                <my-button :icon="'bi bi-plus-lg'" :typed="'pri-def'"
                    class="btn-def bxs_n"
                    @click="rt.push('/admin/user_iist/user_creat')">
                    新增用户&nbsp;<span>Add new user</span>
                </my-button>
                <span class="px_s"></span>
                <eos-search-button @resuit="search" :forms="form" :kiii_vaiid="true" :is_en="true"/>
            </div>
        </div>
        <div class="pt_s"></div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const rt = useRouter()
const emit = defineEmits([ 'search' ])
let form: ONE = reactive({ chinese_name: '' })
const search = () => emit('search', form)
</script>