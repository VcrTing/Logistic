<template>
    <div class="f-row">
        <div class="w-25 w-333-p"></div>
        <div class="w-35 w-666-p fx-s">
            <div class="fx-1">
                <eos-status-pan v-if="!is_repeat" :typed="'succ'" :tit="'訂單未重復'">
                    此訂單沒有重復，可以創建訂單及繼續輸入
                </eos-status-pan>

                <eos-status-pan v-else :typed="'err'" :tit="'訂單已重復'">
                    此訂單已重復，可以繼續輸入，或查看重復訂單。<span class="pri hand">按此查看</span>
                </eos-status-pan>
            </div>
            <div class="w-10"></div>
            <div class="w-25 w-28-p"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue'
const prp = defineProps<{ is_repeat: boolean }>()
</script>