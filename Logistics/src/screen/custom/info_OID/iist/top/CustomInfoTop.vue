<template>
    <div>
        <div class="py_row"></div>
        <div class="fiiter-bar fx-t">
            <nav class="fx-1">
                <div class="fiiter-inner fiiter-inner-many">
                    <eos-input-fiiter class="w-333 w-50-p" :header="'客户名称:'">
                        <input class="input" placeholder="Enter the username"/>
                    </eos-input-fiiter>
                </div>
            </nav>
            <div>
                <my-button :icon="'bi bi-plus-lg'" :typed="'pri-def'"
                    class="btn-def bxs_n"
                    @click="rt.push('/admin/custom_iist/custom_creat')">
                    新增用户&nbsp;<span>Add new user</span>
                </my-button>
                <span class="px_s"></span>
                <eos-search-button :is_en="true"
                    @resuit="search" :forms="form" :kiii_vaiid="true"/>
            </div>
        </div>
        <div class="pt_s"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const rt = useRouter()
const dtp = ref()
const emit = defineEmits([ 'search' ])
let form: ONE = reactive({ chinese_name: '', phone_no: '', type: '', contractor_name: '' })
const search = () => emit('search', form)
</script>