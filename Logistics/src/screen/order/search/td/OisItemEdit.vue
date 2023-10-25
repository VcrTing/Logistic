
<template>
    <div class="td">
        <div class="w-30 w-36-p fx-s">
            <input class="input" 
                v-model="v.__code" 
                @blur="() => { if (!v.__code) { v.__msg = '' } }"
                @keydown.enter="search(v)"
                :id="'input_code_' + v.__idx"
                placeholder="請輸入翔烽運單編號 Enter the any CF waybill number"
            />
        </div>
        <div class="fx-1 pl_x2 fx-l">
            <button @keydown.enter="search(v)" @click="search(v)" class="btn-pri px py_n">搜索 Search</button>

            <div class="pl_x2">
                <div v-if="v.__ioad"><eos-ioad/></div>
                <div v-else>
                    <div v-if="v.__using">
                        <div class="err">{{ v.__msg }}</div></div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { order } from "../../../../himm/serv";
const prp = defineProps<{ v: ONE, me: ONE }>()
const emt = defineEmits([ 'react' ])

const search = (v: ONE, inn: boolean = false) => new Promise(async (rej) => {
    if (v.__code) {
        v.__ioad = true; v.__using = true;
        const o: ONE|null = await funny._search(v.__code.trim())
        if (o && o.id) {
            if (funny._item_same(o) >= 0) {
                v.__msg = '列表內已存在相同編號的訂單了'; v.__code = ''
            } else {
                v.__msg = '';
                for (const k in o) { v[k] = o[k] } 
                emt('react', v)
                funny.next(v.__idx + 1); prp.me.ids.push(o.id + ''); 
            }
        } else { v.__msg = '未找到與該編號有關的訂單資料' }
        setTimeout(() => v.__ioad = false, 400)
    } rej(0)
})

const funny = {
    next: (myid: number) => {
        const ip: HTMLElement|null = document.getElementById('input_code_' + myid) // console.log(ip)
        if (ip) { ip.focus() }
    },
    _search: async (wb_order_no: string) => {
        const res: ONE = await order.many({ wb_order_no })
        if (res) {
            const m: MANY = res.data ? res.data : [ ]; return m.length > 0 ? m[0] : null
        } return null
    },
    _has_inarr: (s: string = '', src: string[] = [ ], idx: number = -1) => {
        src.map((e: string, i: number) => { if (e === s) { idx = i } }); return idx
    },
    _item_same: (one: ONE = { }, has: boolean = false) => { return funny._has_inarr(one.id + '', prp.me.ids) }
}


// watch(() => form.orderStatus, (n: string) => { console.log('N =', n) })
/*
<div class="pb_x">
    <eos-input-fiiter class="w-34 w-42-p" :header="'訂單狀態:'">
        <select class="input px-0" v-model="form.orderStatus" :class="{ 'ui-ip-fiiter-empty': !form.orderStatus }">
            <option value="">全部狀態 All order status</option>
            <option value="is_in_warehouse">
                貨品已到倉庫 The goods have arrived at the warehouse
            </option>
            <option value="is_leave_warehouse">
                貨品已離開貨倉運送客人中 The goods have left the warehouse
            </option>
            <option value="is_complete_list">
                訂單已完成送貨 The Order has been delivered
            </option>
            <option value="is_fail_deliver">
                貨品未能成功送到客人 The goods were not delivered to the customer
            </option>
        </select>
    </eos-input-fiiter>
</div>
*/
</script>