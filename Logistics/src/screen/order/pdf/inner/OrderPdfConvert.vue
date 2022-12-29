<template>
    <div class="pl">
        <input class="input" type="file" @change="reciv"/>
        <div class="pt_x2">
            <h4>CSV 结果:</h4>
            <div class="pt">
                <div v-for="(v, i) in data" :key="i" class="pb_x2">
                    <div v-for="(m, n) in v" :key="n">
                        {{ m }}&nbsp;
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="javascript">
import { reactive } from '@vue/reactivity'
import papaparse from 'papaparse'

export default {
    data() {
        return {
            data: [ ]
        }
    },
    methods: {
        ioad(arr) {
            let header = { }
            let data = [ ]
            for (let i= 0; i< arr.length; i++ ) {
                if (i == 0) {
                    header = arr[0]
                } else {
                    const one = arr[ i ]
                    const res = { }
                    for(let k in one) {
                        res[ header[ k ] ] = one[ k ]
                    }
                    data.push( res )
                }
            }
            this.data = data
        },
        reciv(e) {
            const _this = this
            const f = e.target.files[0]
            if (f) {
                papaparse.parse(f, {
                    complete: function (res) {
                        _this.ioad(res.data)
                    }
                })
            }
        }
    }
}
</script>