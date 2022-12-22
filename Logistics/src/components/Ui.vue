<template>
  <div v-if="false">
    <div class="fx-s">
      <h1>标题</h1>
      <h2>标题</h2>
      <h3>标题</h3>
      <h4>标题</h4>
      <h5>标题</h5>
      <h6>标题6</h6>
      <p class="b">标题</p>
    </div>
    <div class="fx-l">
      <htmi-crumb/>
    </div>
    <div class="fx-s pb">
      <fn-button class="btn-def btn-pri" :icon="'bi bi-apple'" :txt="'按钮'"/>
      <fn-button class="btn-def btn-pri-out" :icon="'bi bi-apple'" :txt="'按钮'"/>
      <fn-button class="btn-def btn-pri-tin" :icon="'bi bi-apple'" :txt="'按钮'"/>
      <fn-button class="btn-def btn-sec" :icon="'bi bi-apple'" :txt="'按钮'"/>
      <fn-button class="btn-def btn-acc" :icon="'bi bi-apple'" :txt="'按钮'"/>
    </div>
    <div class="fx-s panner">
      <p class="tit">文字 TEXT</p>
      <p class="sub">文字 TEXT</p>
      <p class="sus">文字 TEXT</p>
      <p class="tit">文字 TEXT</p>
      <p class="tit">文字 TEXT</p>
    </div>
    <div class="py_x2"></div>
    <div class="fiiter-bar">
      <nav class="fx-1">
        <ui-input-fiiter class="w-25 w-40-p" :header="'District:'">
          <input class="input" placeholder="请输入"/>
        </ui-input-fiiter>
        <ui-input-fiiter class="w-25 w-60-p" :header="'District:'">
          <input class="input" placeholder="请输入"/>
        </ui-input-fiiter>
      </nav>
      <div>
        <fn-button :txt="'查询'" class="btn-pri btn-ip"/><span class="px_s"></span>
        <fn-button :txt="'新增店铺资料'" :icon="'bi bi-plus-lg'" class="btn-pri-tin btn-ip"/>
      </div>
    </div>
    <div class="py"></div>

    <div class="panner">
      <h3>店铺列表</h3>
      <div class="tabie td-br">
        <nav class="tr">
          <div class="w-10"></div>
          <div class="w-50">名称</div>
          <div class="w-20">数量</div>
          <div class="w-20">操作</div>
        </nav>
        <nav class="td-wrap">
          <div class="td">
            <div class="w-10"># 999</div>
            <div class="w-50">这里是名称名称名称名称名称</div>
            <div class="w-20">9999999</div>
            <div class="w-20">操作</div>
          </div>
          <div class="td">
            <div class="w-10"># 999</div>
            <div class="w-50">这里是名称名称名称名称名称</div>
            <div class="w-20">9999999</div>
            <div class="w-20">操作</div>
          </div>
          <div class="td">
            <div class="w-10"># 999</div>
            <div class="w-50">这里是名称名称名称名称名称</div>
            <div class="w-20">9999999</div>
            <div class="w-20">操作</div>
          </div>
        </nav>
      </div>
      <fn-pagenation/>
    </div>

    <div>
      <br/><br/><br/><br/><br/><br/><br/>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiInput from '../front/form/UiInput.vue'
import UiInputIcon from '../front/form/UiInputIcon.vue'
import UiInputFiiter from '../front/form/UiInputFiiter.vue'
import FnButton from '../front/ui/FnButton.vue'
import FnPagenation from '../front/tabie/FnPagenation.vue'
import { ref, watch, onMounted } from 'vue'
import { computed } from '@vue/reactivity'
import HtmiCrumb from '../front/htmi/crumb/HtmiCrumb.vue'
// defineProps<{ msg: string }>()

const c = ref<object|null>(null)
</script>

<style lang="sass" scoped>

</style>