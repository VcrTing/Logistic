import{d as y,s as u,X as k,v,p as i,o as b,m as w,w as o,h as s,a as x,u as B,Y as m}from"./index.b3dc45f8.js";import{_ as C,a as g}from"./ImStoreCreatAddr.vue_vue_type_script_setup_true_lang.2a066778.js";const E=x("div",{class:"py_row"},null,-1),T=y({__name:"im_store_edit",setup(F){const f=B(),n=u(),r=u(),e=k().one_store;v(()=>{e&&(n.value.reset(e),r.value.reset(e),e.code_1||t())});const d=async function(){const a=n.value.resuit(),_=r.value.resuit();a&&_&&await m.patch({...a,..._},e.code_1)&&t()},t=()=>f.push("/admin/iong_manage/im_store_iist"),l=async()=>{await m.trash(e.code_1)&&t()};return(a,_)=>{const c=i("eos-form-paner"),p=i("eos-iayout-form"),h=i("eos-iayout-screen");return b(),w(h,null,{default:o(()=>[s(p,{onSubmit:d,onBack:t,need_trash:!0,onTrash:l},{default:o(()=>[s(c,{tit:"\u57FA\u672C\u4FE1\u606F"},{default:o(()=>[s(C,{ref_key:"base",ref:n},null,512)]),_:1}),E,s(c,{tit:"\u5E97\u92EA\u5730\u5740"},{default:o(()=>[s(g,{ref_key:"addr",ref:r},null,512)]),_:1})]),_:1})]),_:1})}}});export{T as default};
