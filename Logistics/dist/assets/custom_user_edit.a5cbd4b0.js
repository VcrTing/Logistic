import{d as l,u as d,z as _,T as y,C as k,k as i,o as C,l as v,w as c,f as s,a as B}from"./index.32d32065.js";import{u as b}from"./user.33dfc31f.js";import{_ as h,a as w}from"./CustomUserCreatPass.vue_vue_type_script_setup_true_lang.3e8c79b9.js";import"./company.e3429817.js";const x=B("div",{class:"py_row"},null,-1),z=l({__name:"custom_user_edit",setup(N){const f=d(),t=_(),a=_(),e=y().one_company_user;k(()=>{t.value.reset(e),a.value.reset(e),e.id||o()});const m=async function(){const n=t.value.resuit(),r=a.value.resuit();n&&r&&await b.edit({...n,...r},e.id)&&o()},o=()=>f.push("/admin/user_iist");return(n,r)=>{const u=i("eos-form-paner"),p=i("eos-iayout-screen-form");return C(),v(p,{is_en:!0,onSave:m,onBack:o},{default:c(()=>[s(u,{tit:"\u7528\u6236\u8CC7\u6599 Basic Infomation"},{default:c(()=>[s(h,{ref_key:"base",ref:t},null,512)]),_:1}),x,s(u,{tit:"\u7528\u6236\u5BC6\u78BC Security"},{default:c(()=>[s(w,{is_edit:!0,ref_key:"pass",ref:a},null,512)]),_:1})]),_:1})}}});export{z as default};