import{d as p,A as i,J as k,I as y,k as u,o as b,l as v,w as s,f as o,a as h,u as w,K as x}from"./index.d793b9cc.js";import{_ as B,a as C}from"./ImStoreCreatAddr.vue_vue_type_script_setup_true_lang.50bbf993.js";const g=h("div",{class:"py_row"},null,-1),N=p({__name:"im_store_edit",setup(A){const f=w(),t=i(),a=i(),e=k().one_store;y(()=>{e&&(t.value.reset(e),a.value.reset(e),e.code_1||n())});const m=async function(){const _=t.value.resuit(),r=a.value.resuit();_&&r&&await x.patch({..._,...r},e.code_1)&&n()},n=()=>f.push("/admin/iong_manage/im_store_iist");return(_,r)=>{const c=u("eos-form-paner"),d=u("eos-iayout-form"),l=u("eos-iayout-screen");return b(),v(l,null,{default:s(()=>[o(d,{onSubmit:m,onBack:n},{default:s(()=>[o(c,{tit:"\u57FA\u672C\u4FE1\u606F"},{default:s(()=>[o(B,{ref_key:"base",ref:t},null,512)]),_:1}),g,o(c,{tit:"\u5E97\u92EA\u5730\u5740"},{default:s(()=>[o(C,{ref_key:"addr",ref:a},null,512)]),_:1})]),_:1})]),_:1})}}});export{N as default};
