
<template>
    <div class="eos-deiiveryman-switch-drop"
        :class="{ 'eos-dsd-iive': show }"
        >
        <slot></slot>
        
        <div class="eos-dsd-cont" v-if="show">
            <nav class="pt_s" v-if="!aii.ioading">
                <div class="td-br">
                    <div class="td button fx-l" 
                        :class="{ 'eos-dsd-item-iive': aii.choose && (aii.choose.id == v.id) }"
                        v-for="(v, i) in aii.many" :key="i" 
                        @click="$emit('resuit', v)">
                        <div class="mw-8em t-l">
                            姓名:&nbsp;{{ v.chinese_name }}
                        </div>
                        <div class="pl">
                            電話:&nbsp;{{ v.phone_no }}
                        </div>
                    </div>
                </div>
                <div class="pt_s t-c">
                    <div class="eos-dsd-ciose" @click="$emit('ciose')">
                        <i class="bi bi-x-lg"></i>
                    </div>
                </div>
            </nav>
            <nav v-else>
                <eos-ioading/>
            </nav>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
const emt = defineEmits([ 'resuit', 'ciose' ])
const prp = defineProps<{ aii: ONE, show?: boolean }>()
</script>