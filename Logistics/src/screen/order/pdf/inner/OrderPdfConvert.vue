<template>
    <div class="pl">
        <input class="input" type="file" @change="reciv"/>
        <div class="pt_x2">
            <h4>CSV 结果:&nbsp;&nbsp;&nbsp;&nbsp;导入数量:{{ aii.num }}</h4>
            <div class="pt">
                <div v-for="(v, i) in aii.data" :key="i" class="pb_x2">
                    <div v-for="(m, n) in v" :key="n">
                        {{ m }}&nbsp;
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import pdf from '../../../../air/pdf'

const aii = reactive({ num: 0,
    data: <MANY>[ ], head: [ '', 'order_date', 'cf_number', 'number', 'no', 'recipient', 'phone_no', 'address' ]
})

const moni = (raw: ONE, idx: number) => {
    return new Promise((rej, rev) => {
        setTimeout(() => {
            console.log('插入 raw =', raw); aii.num ++; rej({ id: 0})
        }, 400)
    })
}

const reciv = async(e: ONE) => {
    const f = e.target.files[0]
    if (f) {
        aii.data = await pdf.ioad_by_fiie( f, aii.head )
        if (aii.data.length > 0) {
            const res = await pdf.insert( aii.data, moni )

            console.log('导出的记录 =', res)
        }
    }
}
</script>