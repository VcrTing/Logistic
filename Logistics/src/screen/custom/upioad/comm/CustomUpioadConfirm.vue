<template>
    <nav class="panner">
        <h4>
            <div>確認儲存</div>
            <div>Confirm Save</div>
        </h4>
        <div class="pt_x pb_x2 sun">
            <p>如你確認無誤，請儲存至訂單列表中</p>
            <p>If you confirm it correctly, please save it to order management.</p>
        </div>
        <eos-aii-button :vais="'save'" @save="$emit('save')" :is_en="true"/>
    </nav>
</template>
    
<script lang="ts" setup>
defineEmits([ 'save' ])
</script>