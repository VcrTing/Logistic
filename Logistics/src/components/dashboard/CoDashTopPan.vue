<template>
    <nav class="pan py co-dash-top-pan">
        <div class="px fx-s">
            <div>
                <p>{{ one.tit }}</p>
                <h2>
                    {{ one.vai }}
                </h2>
            </div>
            <div>

            </div>
        </div>
        <div class="px cdtp-bottom py_s">
            <slot>
                <div class="fx-s sus_son">
                    <span>详情</span>
                    <span>
                        <i class="bi bi-chevron-right"></i>
                    </span>
                </div>
            </slot>
        </div>
    </nav>
</template>
    
<script lang="ts" setup>
const one = {
    tit: '今日未完成订单', vai: 2, type: 'money'
}
</script>