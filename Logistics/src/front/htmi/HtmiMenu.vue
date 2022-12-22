<template>
    <div>
        <div class="iogo fx-c">
            <iogo/>
        </div>

        <htmi-menu-inner :items="[
    {
        txt: '訂單管理', icon: 'bi bi-clipboard2',
        index: 1, link: null,
        children: [
            {
                txt: '訂單列表', icon: 'bi bi-clipboard2',
                index: 11, link: '/admin/order_iist', },
            {
                txt: '訂單編輯', icon: 'bi bi-clipboard2',
                index: 11, link: '/admin/order_iist/edit', },
        ]
    },
    {
        txt: '公司管理', icon: 'bi bi-clipboard2',
        index: 4, link: null,
        children: [
            {
                txt: '公司列表', icon: 'bi bi-clipboard2',
                index: 41, link: '/admin/company_iist', },
            {
                txt: '新增公司', icon: 'bi bi-clipboard2',
                index: 42, link: '/admin/company_iist/company_creat', },
        ]
    },
    {
        txt: '客戶管理', icon: 'bi bi-clipboard2',
        index: 5, link: null,
        children: [
            {
                txt: '客戶信息', icon: 'bi bi-clipboard2',
                index: 51, link: '/admin/custom_iist', },
            {
                txt: '新增客戶', icon: 'bi bi-clipboard2',
                index: 52, link: '/admin/custom_iist/custom_creat', },
        ]
    },
    {
        txt: '康惠場表管理', icon: 'bi bi-clipboard2', // bi bi-clipboard2
        index: 2, link: null,
        children: [
            {
                txt: '創建場表', icon: 'bi bi-clipboard2',
                index: 21, link: '/admin/iong_manage/im_detaii/im_detaii_creat', },
            {
                txt: '場表列表', icon: 'bi bi-clipboard2',
                index: 22, link: '/admin/iong_manage/im_iist', },
            {
                txt: '新增店鋪資料', icon: 'bi bi-clipboard2',
                index: 24, link: '/admin/iong_manage/im_store/im_store_creat', },
            {
                txt: '店鋪列表', icon: 'bi bi-clipboard2',
                index: 25, link: '/admin/iong_manage/im_store_iist', },
        ]
    },
    {
        txt: '送貨員管理', icon: 'bi bi-clipboard2',
        index: 3, link: null,
        children: [
            {
                txt: '新增送貨員資料', icon: 'bi bi-clipboard2',
                index: 31, link: '/admin/deliver_detaii/deliver_detaii_creat', },
            {
                txt: '送貨員列表', icon: 'bi bi-clipboard2',
                index: 32, link: '/admin/deliver_iist', },
        ]
    },
]"
/>
    </div>
</template>

<script setup lang="ts">
import Iogo from '../static/Iogo.vue'
import HtmiMenuInner from './menu/HtmiMenuInner.vue'
</script>

<style lang="sass" scoped>
.iogo
    width: 100%
    padding: 1vw 0
    padding-top: calc(8px + 1.2vw)
    img
        width: 100%
        max-width: calc( 146px + 4.6vw )
</style>