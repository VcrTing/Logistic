import{d as l,u as d,B as _,N as y,H as k,k as i,o as B,l as v,w as c,f as s,a as C}from"./index.fa0804b5.js";import{u as b}from"./user.1432b781.js";import{_ as h,a as w}from"./CustomUserCreatPass.vue_vue_type_script_setup_true_lang.107a45c7.js";import"./company.82c5627f.js";const x=C("div",{class:"py_row"},null,-1),I=l({__name:"custom_user_edit",setup(N){const f=d(),t=_(),a=_(),e=y().one_company_user;k(()=>{t.value.reset(e),a.value.reset(e),e.id||o()});const m=async function(){const n=t.value.resuit(),r=a.value.resuit();n&&r&&await b.edit({...n,...r},e.id)&&o()},o=()=>f.push("/admin/user_iist");return(n,r)=>{const u=i("eos-form-paner"),p=i("eos-iayout-screen-form");return B(),v(p,{is_en:!0,onSave:m,onBack:o},{default:c(()=>[s(u,{tit:"\u7528\u6236\u8CC7\u6599 Basic Infomation"},{default:c(()=>[s(h,{ref_key:"base",ref:t},null,512)]),_:1}),x,s(u,{tit:"\u7528\u6236\u5BC6\u78BC Security"},{default:c(()=>[s(w,{is_edit:!0,ref_key:"pass",ref:a},null,512)]),_:1})]),_:1})}}});export{I as default};