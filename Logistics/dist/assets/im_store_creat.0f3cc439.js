import{d,B as i,k as n,o as l,l as p,w as s,f as o,h as y,a as k,u as b,P as g}from"./index.fa0804b5.js";import{_ as v,a as B}from"./ImStoreCreatAddr.vue_vue_type_script_setup_true_lang.c54181de.js";const h=k("div",{class:"py_row"},null,-1),F=d({__name:"im_store_creat",setup(w){const _=b(),r=i(),u=i(),c=async function(){const t=r.value.resuit(),e=u.value.resuit();t&&e&&await g.creat_one({...t,...e})&&_.push("/admin/iong_manage/im_store_iist")};return(t,e)=>{const a=n("eos-form-paner"),m=n("eos-iayout-form"),f=n("eos-iayout-screen");return l(),p(f,null,{default:s(()=>[o(m,{onSubmit:c,onBack:e[0]||(e[0]=C=>y(_).push("/admin/iong_manage/im_store_iist"))},{default:s(()=>[o(a,{tit:"\u57FA\u672C\u4FE1\u606F"},{default:s(()=>[o(v,{ref_key:"base",ref:r},null,512)]),_:1}),h,o(a,{tit:"\u5E97\u92EA\u5730\u5740"},{default:s(()=>[o(B,{ref_key:"addr",ref:u},null,512)]),_:1})]),_:1})]),_:1})}}});export{F as default};