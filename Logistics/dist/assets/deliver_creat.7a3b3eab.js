import{_ as C,a as h}from"./DeliverCreatBase.vue_vue_type_script_setup_true_lang.987613a7.js";import{d as k,u as w,s as n,m as r,o as b,p as B,w as a,h as s,i as E,a as d,n as F,S as x}from"./index.b9179508.js";const A=d("div",{class:"py_row"},null,-1),V=k({__name:"deliver_creat",setup($){const _=w(),i=n(),u=n(),c=n(),o=n(!1),p=async function(e){o.value=e!="infantry"},m=async function(){const e=u.value.resuit(),t=o.value?i.value.resuit():null;e&&(e.type=c.value.now,await x.creat_one({...e,...t})&&_.push("/admin/deliver_iist"))};return(e,t)=>{const l=r("ef-deliver-typed"),f=r("eos-form-paner"),v=r("eos-iayout-form"),y=r("eos-iayout-screen");return b(),B(y,null,{default:a(()=>[s(v,{onSubmit:m,onBack:t[0]||(t[0]=g=>E(_).push("/admin/deliver_iist"))},{default:a(()=>[s(f,{tit:"\u9001\u8CA8\u54E1\u4FE1\u606F"},{default:a(()=>[s(C,{ref_key:"base",ref:u},{default:a(()=>[s(l,{ref_key:"typed",ref:c,onChange:p},null,512)]),_:1},512)]),_:1}),d("div",{class:F({"eos-coiiapse-die":!o.value,"eos-coiiapse-show":o.value})},[A,s(f,{tit:"\u8CA8\u8ECA\u4FE1\u606F"},{default:a(()=>[s(h,{ref_key:"car",ref:i},null,512)]),_:1})],2)]),_:1})]),_:1})}}});export{V as default};
