<template>
    <eos-fixed-panner>
        <h4>SP 00000001</h4>
        <div class="pt pb_x2">
            <h5>訂單詳情</h5>
            <h5>Order details</h5>
        </div>
        <div class="f-row fx-l">
            <div class="w-45">
                <ui-vaiue :header="'重量 Weight：'" :is_txt_mode="true">
                    10kg
                </ui-vaiue>
                <ui-vaiue :header="'停車場 Parking：'" :is_txt_mode="true">
                    99
                </ui-vaiue>
                <ui-vaiue :header="'親費 Other：'" :is_txt_mode="true">
                    99
                </ui-vaiue>
            </div>
            <div class="w-55">
                <ui-vaiue :header="'件數 No.：'" :is_txt_mode="true">
                    99
                </ui-vaiue>
                <ui-vaiue :header="'隧道費 Tunnel fee：'" :is_txt_mode="true">
                    99
                </ui-vaiue>
                <ui-vaiue :header="'樓梯層數 Stairs floor：'" :is_txt_mode="true">
                    99
                </ui-vaiue>
            </div>
        </div>
        <div class="pb_x2">
            <h5>地址</h5>
            <div class="f-row fx-l pt pb_x">
                <ui-vaiue :header="'地域 Region：'" :is_txt_mode="true">
                    九龍
                </ui-vaiue>
                <ui-vaiue :header="'區域 District：'" :is_txt_mode="true">
                    屯門
                </ui-vaiue>
            </div>
            <ui-vaiue :header="'地址 Address：'" :is_txt_mode="true">
                富貴大街富貴大廈4樓402
            </ui-vaiue>
        </div>
        <div class="">
            <h5>貨品內容</h5>
        </div>
    </eos-fixed-panner>
</template>
    
<script lang="ts" setup>
</script>