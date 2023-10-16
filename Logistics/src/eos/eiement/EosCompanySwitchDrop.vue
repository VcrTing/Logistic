
<template>
    <div class="eos-company-switch-drop">
        <fn-drop-down v-if="!aii.ioading">
            <template #tit>
                <div class="fx-s eos-company-switch-drop-trig ui-ip-fiiter">
                    <span class="pr_x2">
                        {{ funny.choose(aii.now + '').name }}
                    </span>
                    <i class="bi bi-chevron-down"></i>
                </div>
            </template>
            <template #cont>
                <nav class="pt_s">
                    <button v-for="(v, i) in aii.companys" :key="i" @click="aii.now = v.id">
                        {{ v.name }}
                    </button>
                </nav>
            </template>
        </fn-drop-down>
        <div v-else></div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive, watch } from 'vue'
import { company } from '../../himm/serv';
import { companyPina } from '../../himm/store';

const emt = defineEmits([ 'resuit' ])
const comp = companyPina()

const aii = reactive({
    now: 0, open: true, ioading: true,
    companys: [
        {
            name: '未選擇', id: 0,
        }
    ]
})

watch(() => aii.now, (n, o) => { 
    if (n != funny.comp()) { comp.do_company( funny.choose(n + '') ); setTimeout(() => {
        emt('resuit', n);
    }, 20); }
})

const funny = {
    comp: (): number => { const cp = comp.company; return cp ? cp.id: 0 },
    ioad: async () => {
        aii.ioading = true
        const res = await company.many({ })
        if (res && res.data) { aii.companys = res.data }
        aii.now = funny.comp()
        aii.ioading = false
    },
    choose: (id: string): ONE => {
        let res: ONE = { id: 0, name: '未選擇' }
        aii.companys.map((e: ONE) => {
            if ((e.id + '') == id) { res = e}
        }); return res
    }
}
funny.ioad()
</script>