import{d as h,v as u,Y as k,B as v,p as i,o as b,m as B,w as n,h as o,a as w,u as x,Z as m}from"./index.6591c459.js";import{_ as C,a as g}from"./ImStoreCreatAddr.vue_vue_type_script_setup_true_lang.a8946f4f.js";const E=w("div",{class:"py_row"},null,-1),T=h({__name:"im_store_edit",setup(F){const f=x(),r=u(),_=u(),e=k().one_store;v(()=>{e&&(r.value.reset(e),_.value.reset(e),e.code_1||s())});const d=async function(){const a=r.value.resuit(),t=_.value.resuit();a&&t&&await m.patch({...a,...t},e.code_1)&&s()},s=()=>f.push("/admin/iong_manage/im_store_iist"),l=async()=>{await m.trash(e.code_1)&&s()};return(a,t)=>{const c=i("eos-form-paner"),p=i("eos-iayout-form"),y=i("eos-iayout-screen");return b(),B(y,{onBack:t[0]||(t[0]=$=>s())},{default:n(()=>[o(p,{onSubmit:d,onBack:s,need_trash:!0,onTrash:l},{default:n(()=>[o(c,{tit:"\u57FA\u672C\u4FE1\u606F"},{default:n(()=>[o(C,{ref_key:"base",ref:r},null,512)]),_:1}),E,o(c,{tit:"\u5E97\u92EA\u5730\u5740"},{default:n(()=>[o(g,{ref_key:"addr",ref:_},null,512)]),_:1})]),_:1})]),_:1})}}});export{T as default};
