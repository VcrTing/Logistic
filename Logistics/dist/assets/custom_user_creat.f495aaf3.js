import{d,u as y,A as n,l as m,o as C,m as v,w as t,h as e,a as f}from"./index.c2200ae8.js";import{u as B}from"./user.48215653.js";import{_ as h,a as k,b}from"./CustomUserCreatCompany.vue_vue_type_script_setup_true_lang.c3ffe124.js";import"./company.4fe8df4c.js";const w=f("div",{class:"py_row"},null,-1),x=f("div",{class:"py_row"},null,-1),A=d({__name:"custom_user_creat",setup($){const l=y(),r=n(),u=n(),c=n(),p=async function(){const o=r.value.resuit(),a=u.value.resuit(),s=c.value.resuit();console.log("res =",o,a,s),o&&a&&s&&await B.creat({...o,...a,...s})&&_()},_=()=>l.push("/admin/user_iist");return(o,a)=>{const s=m("eos-form-paner"),i=m("eos-iayout-screen-form");return C(),v(i,{is_en:!0,onSave:p,onBack:_},{default:t(()=>[e(s,{tit:"\u7528\u6236\u8CC7\u6599 Basic Infomation"},{default:t(()=>[e(h,{ref_key:"base",ref:r},null,512)]),_:1}),w,e(s,{tit:"\u6240\u5C6C\u516C\u53F8 Company"},{default:t(()=>[e(k,{ref_key:"company",ref:c},null,512)]),_:1}),x,e(s,{tit:"\u7528\u6236\u5BC6\u78BC Security"},{default:t(()=>[e(b,{ref_key:"pass",ref:u},null,512)]),_:1})]),_:1})}}});export{A as default};