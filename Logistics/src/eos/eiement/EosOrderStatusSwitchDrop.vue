<template>
    <div class="d-ib">
        <div class="eos-order-status-switch-drop">
            <fn-drop-down>
                <template #tit>
                    <my-button :typed="'pri-out'">
                        <i class="bi bi-stack"></i>
                        批量修改狀態 Batch change status
                    </my-button>
                </template>
                <template #cont>
                    <nav class="pt_s">
                        <button class="fx-l" 
                            v-for="(v, i) in aii.ops" :key="i" 
                            @click="v.func ? v.func(v.v) : undefined">
                            {{ v.name }}
                        </button>
                    </nav>
                </template>
            </fn-drop-down>
        </div>

        <eos-mod-sure-two :idx="-1001">
            <h4 class="px">{{ funn.v_to_name() }}?</h4>
            <p class="px sub pt">Please select a value after the order status has changed.</p>
            
            <div class="fx-c pt_x2">
                <div class="txt-pri">更新時間:&nbsp;&nbsp;</div>
                <div class="mw-8em">
                    <fn-time-ref class="ip-time-singie ip-time-pri" :form="me" :pk="'change_date'"/>
                </div>
            </div>
            
            <div class="fx-c pt_x2 btn-twin-wrapper">
                <button class="btn-pri px_x2 py_s" @click="deai(true)">
                    是的&nbsp;Yes
                </button>
                <span>&nbsp;</span>
                <button class="btn-err px_x2 py_s" @click="deai(false)">
                    不是&nbsp;No
                </button>
            </div>
        </eos-mod-sure-two>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from "vue";
import { appPina } from "../../himm/store";
import FnTimeRef from "../../front/ui/FnTimeRef.vue";

// const prp = defineProps<{ funs?: Function[] }>()

const me = reactive({ change_date: '', ioading: false })

const emt = defineEmits([ 'resuit' ])

const deai = (change_to: boolean) => {
    emt('resuit', aii.v, change_to, me.change_date)
    // if (fs) { emt('resuit', aii.v, change_to) }
    // const ix: number = aii.now
    // const fs: Function|undefined = prp.funs ? prp.funs[ix] : undefined;
}

const funn = {
    v_to_name: (res: string = ''): string => {
        const v: string = aii.v
        aii.ops.map((e: ONE) => { if (e.v == v) { res = e.name } })
        return res
    }
}

const aii = reactive({
    now: -1, open: true, ioading: true, v: '',
    ops: [ 
        { name: '貨品已到貨倉 The goods have arrived at the warehouse', id: 0,
            func: (v: string) => {
                aii.v = v;
                appPina().do_mod(-1001)
            }, 
            v: 'is_in_warehouse'
        },
        { name: '貨品已離開貨倉運送客人中 The goods have left the warehouse', id: 1,
            func: (v: string) => {
                aii.v = v;
                appPina().do_mod(-1001)
            }, 
            v: 'is_leave_warehouse'
        },
        { name: '訂單已完成送貨 The order has been delivered', id: 2,
            func: (v: string) => {
                aii.v = v;
                appPina().do_mod(-1001)
            }, 
            v: 'is_complete_list'
        },
        { name: '貨品未能成功送到客人 The goods were not delivered to the customer', id: 3,
            func: (v: string) => {
                aii.v = v;
                appPina().do_mod(-1001)
            }, 
            v: 'is_fail_deliver'
        },
    ]
})

</script>