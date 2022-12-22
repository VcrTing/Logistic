<template>
    <nav class="">
        <label :class="_class" v-if="header">
            <span v-html="header"></span>
            &nbsp;
        </label>
        <div :class="{ 'input-err': is_err, 'pt': header }">
            <div v-if="!is_txt_mode" class="ip-attach ip-attach-l">
                <i class="h5 i" :class="icon"></i>
                <slot></slot>
            </div>
            <div v-else class="input input-txt-mode">
                <slot></slot>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
export default {
    props: {
        is_err: { type: Boolean, default: true },
        header: { type: String },
        icon: { type: String },
        _class: { type: String },
        is_txt_mode: { type: Boolean, default: false }
    },
}
</script>

<style lang="sass">
.input-txt-mode
    padding-left: 0px !important
    border-color: transparent !important
</style>