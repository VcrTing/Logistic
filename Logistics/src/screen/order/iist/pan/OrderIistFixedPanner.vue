<template>
    <eos-fixed-panner>
        <h4>{{ one.order_id }}</h4>
        <div class="pt pb_x2">
            <h5>訂單詳情</h5>
            <h5>Order details</h5>
        </div>
        <div class="f-row fx-l">
            <div class="w-45">
                <ui-vaiue :header="'重量 Weight：'" :is_txt_mode="true">
                    {{ one.weight }}&nbsp;kg
                </ui-vaiue>
                <ui-vaiue :header="'停車場 Parking：'" :is_txt_mode="true">
                    {{ one.car_park }}
                </ui-vaiue>
                <ui-vaiue :header="'雜費 Other：'" :is_txt_mode="true">
                    {{ one.misc_fee }}
                </ui-vaiue>
            </div>
            <div class="w-55">
                <ui-vaiue :header="'件數 No.：'" :is_txt_mode="true">
                    {{ one.total_item_count }}
                </ui-vaiue>
                <ui-vaiue :header="'隧道費 Tunnel fee：'" :is_txt_mode="true">
                    {{ one.tunnel_fee }}
                </ui-vaiue>
                <ui-vaiue :header="'樓梯層數 Stairs floor：'" :is_txt_mode="true">
                    {{ one.floor_count }}
                </ui-vaiue>
            </div>
        </div>
        <div class="pb_x2">
            <h5>地址</h5>
            <div class="f-row fx-l pt pb_x">
                <ui-vaiue :header="'地域 District'" :is_txt_mode="true">
                    {{ one.district }}
                </ui-vaiue>
                <ui-vaiue :header="'區域 Area'" :is_txt_mode="true">
                    {{ one.area }}
                </ui-vaiue>
            </div>
            <ui-vaiue :header="'地址 Address：'" :is_txt_mode="true">
                {{ one.address }}
            </ui-vaiue>
        </div>
        <div class="">
            <h5>貨品內容</h5>
            <div class="pt">
                {{ one.product_content }}
            </div>
        </div>
    </eos-fixed-panner>
</template>
    
<script lang="ts" setup>
import { orderPina } from '../../../../himm/store';

const one = orderPina().order

</script>