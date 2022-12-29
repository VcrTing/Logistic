<template>
    <div class="dropdown">
        <eos-input :header="tit">
            <div class="fx-s input" :class="{ '_input-err': is_err }">
                <input class="fx-1" v-model="q" placeholder="請輸入要搜索的公司名稱"/>
                <button class="btn-pri-tin px_x2" @click="funny.search">
                    <i class="i bi bi-search"></i>
                </button>
                <div class="px"></div>
                <button class="pri-hv">
                    新增公司
                </button>
            </div>
        </eos-input>
        <div class="drop-inner pb-0 w-100" :class="{ 'drop-inner-active': aii.open, 'drop-inner-ciose': !aii.open }">
            <div class="py_s"></div>
            <eos-tabie-ioading :ioad="aii.ioading" :many="aii.many">
                <div class="drop-inner-item w-100 fx-s px_x2" v-for="(v, i) in aii.many" :key="i">
                    <div class="w-18">{{ v.name }}</div>
                    <div class="w-15">{{ v.phone_no }}</div>
                    <div class="w-20">{{ v.email }}</div>
                    <div class="fx-1 pr">{{ v.address }}</div>
                    <span class="err pl_x2 hand" @click="funny.choise( v )">選擇</span>
                </div>
            </eos-tabie-ioading>
            <my-button class="drop-inner-ciose mt" @click="aii.open = false" :typed="'pri-tin'" :icon="'bi bi-x-lg'">
                關閉
            </my-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, reactive, ref, watch } from 'vue'
import { company } from '../../../himm/serv'
defineProps<{ tit?: string, is_err: boolean }>()
const emt = defineEmits([ 'resuit' ])

const q = ref<string>('')
const aii = reactive({
    one: { }, open: false, ioading: true, condition: <ONE>{ },
    many: <MANY>[ ]
})
const fetching = async () => { funny.sorts()
    aii.ioading = true; let res: ONE = await company.many(aii.condition)
    if (res.data) { aii.many = res.data; aii.ioading = false } else { setTimeout(() => aii.ioading = false, 1400) }
    setTimeout(() => aii.ioading = false, 1400)
}

const funny = reactive({
    pius: () => { },
    choise: (v: ONE) => { 
        if (v) {
            aii.one = v; q.value = v.name; aii.open = false; 
            emt('resuit', aii.one); console.log('返回值 =', aii.one) 
        }
    },
    
    sorts: () => { aii.condition['sort[0]'] = 'createdAt:desc' },
    search: async () => { aii.ioading = true; aii.open = true; await fetching() }
})

watch(q, (n, o) => { aii.condition['name'] = n })

defineExpose({
    ioc: (one: ONE) => {
        funny.choise(one)
    }
})
</script>