import{d as l,u as d,A as i,P as y,B as v,p as u,o as h,m as k,w as c,h as o,a as B}from"./index.ab135edd.js";import{c as C}from"./company.fb2de955.js";import{_ as g,a as b}from"./CompanyCreatCharge.vue_vue_type_script_setup_true_lang.fdf5b22f.js";import"./EfCompanySettleForm.vue_vue_type_script_setup_true_lang.e01b0827.js";import"./EfCompanyOccupationSelect.vue_vue_type_script_setup_true_lang.d7dc4597.js";const w=B("div",{class:"py_row"},null,-1),E=l({__name:"company_edit",setup(x){const m=d(),a=i(),s=i(),t=y().one_company;v(()=>{a.value.reset(t),s.value.reset(t)});const p=async function(){const n=a.value.resuit(),e=s.value.resuit();n&&e&&await C.edit({...n,...e},t.id)&&_(),console.log(e)},_=()=>m.back();return(n,e)=>{const r=u("eos-form-paner"),f=u("eos-iayout-screen-form");return h(),k(f,{is_en:!0,onSave:p,onBack:_},{default:c(()=>[o(r,null,{default:c(()=>[o(g,{ref_key:"base",ref:a},null,512)]),_:1}),w,o(r,{tit:"\u8CA0\u8CAC\u4EBA Person in charge"},{default:c(()=>[o(b,{ref_key:"charge",ref:s},null,512)]),_:1})]),_:1})}}});export{E as default};
