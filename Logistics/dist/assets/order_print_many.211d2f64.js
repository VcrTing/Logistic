import{_ as f,o,c as n,M as k,d as b,a as e,t as i,F as h,r as w,D as g,E as $,B as F,u as I,s as O,G as B,k as p,l as P,w as r,f as c,P as S}from"./index.a61c45bb.js";const C={},D={class:"tr"},N=k('<div class="w-5"></div><div class="w-14"> \u8A02\u55AE\u65E5\u671F<br><p class="tr-en">Order date</p></div><div class="w-23"> \u7FD4\u70FD\u904B\u55AE\u865F\u78BC<br><p class="tr-en">CF waybill number</p></div><div class="w-12"> \u8A02\u55AE\u7D44<br><p class="tr-en">Group</p></div><div class="w-19"> \u8A02\u55AE\u7DE8\u865F<br><p class="tr-en">Order No.</p></div><div class="w-9"> \u4EF6\u6578<br><p class="tr-en">Package</p></div><div class="w-13"> PDF \u9810\u89BD<br><p class="tr-en">PDF Preview</p></div><div class="w-5"></div>',8),q=[N];function V(s,d){return o(),n("nav",D,q)}const E=f(C,[["render",V]]),l=s=>(g("data-v-5c7f0b99"),s=s(),$(),s),G={class:"td"},R={class:"w-5"},T={class:"w-14"},L={class:"w-23"},M={class:"pri"},j={class:"w-12"},z={class:"w-19"},A={class:"w-9"},H={class:"w-13"},J={key:0,class:"fx-l"},K=l(()=>e("i",{class:"bi bi-file-earmark-pdf"},null,-1)),Q=[K],U={key:1,class:"fx-l"},W=l(()=>e("div",{class:"pr_n bi-pdf"},[e("i",{class:"bi bi-file-earmark-pdf"})],-1)),X=l(()=>e("div",{class:"w-5 fx-r"},null,-1)),Y=b({__name:"OpmItem",props:{one:null,idx:null},setup(s){return(d,_)=>(o(),n("div",G,[e("div",R,i(s.idx+1),1),e("div",T,i(s.one.create_date),1),e("div",L,[e("span",M,i(s.one.cf_waybill_no),1)]),e("div",j,i(s.one.order_group),1),e("div",z,i(s.one.order_id),1),e("div",A,i(s.one.total_item_count?s.one.total_item_count:""),1),e("div",H,[s.one.total_item_count<6?(o(),n("div",J,[(o(!0),n(h,null,w(s.one.total_item_count,(a,t)=>(o(),n("div",{class:"pr_n bi-pdf",key:t},Q))),128))])):(o(),n("div",U,[W,e("div",null,"x"+i(s.one.total_item_count),1)]))]),X]))}});const Z=f(Y,[["__scopeId","data-v-5c7f0b99"]]),ss={class:"tabie tabie-tiny"},es={class:"td-wrap bg-FFF"},ts=e("div",{class:"py"},null,-1),as=b({__name:"order_print_many",setup(s){const d=F().query,_=I(),a=O({many:B().orders.map(t=>(t.is_expan=!1,t)),ioading:!0,success_one:t=>{},back:()=>{const t=d.from;t?_.push(t):_.back()}});return console.log("aii Orders =",a.many),setTimeout(()=>a.ioading=!1,100),(t,u)=>{const y=p("eos-tabie-ioading"),x=p("eos-iayout-screen-siot");return o(),P(x,{is_en:!0,onBack:u[0]||(u[0]=v=>a.back())},{cont:r(()=>[e("div",ss,[c(E),e("nav",es,[c(y,{ioad:a.ioading,many:a.many},{default:r(()=>[(o(!0),n(h,null,w(a.many,(v,m)=>(o(),n("div",{key:m},[c(Z,{one:v,idx:m},null,8,["one","idx"])]))),128))]),_:1},8,["ioad","many"])])]),ts]),bar:r(()=>[c(S,{doms:"__qiong_printed_muiti_ciass",caii:a.success_one},null,8,["caii"])]),_:1})}}});export{as as default};
