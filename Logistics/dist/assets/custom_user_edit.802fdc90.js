import{d as y,A as i,u as C,S as v,E as k,l as f,o as b,m as B,w as t,h as s,a as l}from"./index.2bd7e1a2.js";import{u as h}from"./user.aaabdbe1.js";import{_ as w,a as x,b as S}from"./CustomUserCreatCompany.vue_vue_type_script_setup_true_lang.593c9507.js";import"./company.efb158da.js";const $=l("div",{class:"py_row"},null,-1),N=l("div",{class:"py_row"},null,-1),P=y({__name:"custom_user_edit",setup(V){const o=i(),n=i(),r=i(),p=C(),a=v().one_company_user;k(()=>{r.value.reset(a),o.value.reset(a),n.value.reset(a),a.id||u()});const d=async function(){const c=o.value.resuit(),_=n.value.resuit(),e=r.value.resuit();c&&_&&e&&await h.edit({...c,..._,...e},a.id)&&u()},u=()=>p.back();return(c,_)=>{const e=f("eos-form-paner"),m=f("eos-iayout-screen-form");return b(),B(m,{is_en:!0,onSave:d,onBack:u},{default:t(()=>[s(e,{tit:"\u7528\u6236\u8CC7\u6599 Basic Infomation"},{default:t(()=>[s(w,{ref_key:"base",ref:o},null,512)]),_:1}),$,s(e,{tit:"\u6240\u5C6C\u516C\u53F8 Company"},{default:t(()=>[s(x,{ref_key:"company",ref:r},null,512)]),_:1}),N,s(e,{tit:"\u7528\u6236\u5BC6\u78BC Security"},{default:t(()=>[s(S,{is_edit:!0,ref_key:"pass",ref:n},null,512)]),_:1})]),_:1})}}});export{P as default};
