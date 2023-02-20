<template>
    
</template>
    
<script lang="ts" setup>
import { companyPina } from '../pina/company';
import { company } from '../serv';
const funny = {
    init: () => {
        return new Promise(rej => {
            try {
                funny.companys()
            } catch(err) { } rej(0)
        })
    },
    companys: async () => {
        const many: ONE = await company.many()
        if (many) {
            console.log('儲存初始化公司')
            companyPina().do_many( many.data )
        }
    }
}
// funny.init()
</script>