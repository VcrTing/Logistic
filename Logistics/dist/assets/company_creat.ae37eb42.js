import{d as i,u as f,A as p,l as t,o as l,m as d,w as a,h as r,i as y}from"./index.c2200ae8.js";import{c as b}from"./company.4fe8df4c.js";import{_ as k}from"./CompanyCreatBase.vue_vue_type_script_setup_true_lang.c25a8359.js";const h=i({__name:"company_creat",setup(v){const s=f(),n=p(),c=async function(){const e=n.value.resuit();e&&await b.creat({...e})&&_()},_=()=>s.push("/admin/company_iist");return(e,o)=>{const m=t("eos-form-paner"),u=t("eos-iayout-screen-form");return l(),d(u,{is_en:!0,onSave:c,onBack:o[0]||(o[0]=w=>y(s).back())},{default:a(()=>[r(m,null,{default:a(()=>[r(k,{ref_key:"base",ref:n},null,512)]),_:1})]),_:1})}}});export{h as default};