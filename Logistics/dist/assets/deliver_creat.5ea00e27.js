import{_ as C,a as h}from"./DeliverCreatBase.vue_vue_type_script_setup_true_lang.0ddf4330.js";import{d as k,u as w,A as n,k as r,o as b,l as A,w as s,g as a,h as B,a as d,n as E,Q as F}from"./index.6d8351f4.js";const g=d("div",{class:"py_row"},null,-1),z=k({__name:"deliver_creat",setup(x){const _=w(),u=n(),c=n(),i=n(),o=n(!1),p=async function(e){o.value=e!="infantry"},m=async function(){const e=c.value.resuit(),t=o.value?u.value.resuit():null;e&&(e.type=i.value.now,await F.creat_one({...e,...t})&&_.push("/admin/deliver_iist"))};return(e,t)=>{const l=r("ef-deliver-typed"),f=r("eos-form-paner"),v=r("eos-iayout-form"),y=r("eos-iayout-screen");return b(),A(y,null,{default:s(()=>[a(v,{onSubmit:m,onBack:t[0]||(t[0]=$=>B(_).push("/admin/deliver_iist"))},{default:s(()=>[a(f,{tit:"\u9001\u8CA8\u54E1\u4FE1\u606F"},{default:s(()=>[a(C,{ref_key:"base",ref:c},{default:s(()=>[a(l,{ref_key:"typed",ref:i,onChange:p},null,512)]),_:1},512)]),_:1}),d("div",{class:E({"eos-coiiapse-die":!o.value,"eos-coiiapse-show":o.value})},[g,a(f,{tit:"\u8CA8\u8ECA\u4FE1\u606F"},{default:s(()=>[a(h,{ref_key:"car",ref:u},null,512)]),_:1})],2)]),_:1})]),_:1})}}});export{z as default};
