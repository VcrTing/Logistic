import{d as p,l as u,o,c as n,a as e,m as w,e as $,O as D,t as a,i as y,J as m,j as B,F as g,r as k,G as C,H as E,_ as I,D as P,u as A,g as O,w as l,h as d,P as N}from"./index.2bd7e1a2.js";import{_ as S}from"./OrderIistFixedPanner.vue_vue_type_script_setup_true_lang.10483aca.js";import"./CoOrderFpCont.vue_vue_type_script_setup_true_lang.b8e05f21.js";const V={class:"tr"},q=D('<div class="w-5"></div><div class="w-12"> \u5275\u5EFA\u65E5\u671F<br><p class="tr-en">Create date</p></div><div class="w-23"> \u7FD4\u70FD\u904B\u55AE\u865F\u78BC<br><p class="tr-en">CF waybill number</p></div><div class="w-14"> \u8A02\u55AE\u7D44<br><p class="tr-en">Group</p></div><div class="w-19"> \u8A02\u55AE\u7DE8\u865F<br><p class="tr-en">Order No.</p></div><div class="w-9"> \u4EF6\u6578<br><p class="tr-en">Package</p></div><div class="w-13"> PDF \u9810\u89BD<br><p class="tr-en">PDF Preview</p></div>',7),G={class:"w-5"},R=p({__name:"OpmTr",props:{aii:null},setup(s){return(_,i)=>{const c=u("eos-go-button");return o(),n("nav",V,[q,e("div",G,[s.aii.many.length>30?(o(),w(c,{key:0})):$("",!0)])])}}}),v=s=>(C("data-v-3875b378"),s=s(),E(),s),T={class:"td"},j={class:"w-5"},H={class:"w-12"},J={class:"w-23"},L={class:"w-14"},z={class:"w-19"},K={class:"w-9"},M={class:"w-13"},Q={key:0,class:"fx-l"},U=v(()=>e("i",{class:"bi bi-file-earmark-pdf"},null,-1)),W=[U],X={key:1,class:"fx-l"},Y=v(()=>e("div",{class:"pr_n bi-pdf"},[e("i",{class:"bi bi-file-earmark-pdf"})],-1)),Z=v(()=>e("div",{class:"w-5 fx-r"},null,-1)),ss=p({__name:"OpmItem",props:{one:null,idx:null},setup(s){return(_,i)=>(o(),n("div",T,[e("div",j,a(s.idx+1),1),e("div",H,a(s.one.create_date),1),e("div",J,[e("span",{class:"pri hand",onClick:i[0]||(i[0]=()=>{y(m)().do_order(s.one),y(B)().do_panner(1)})},a(s.one.cf_waybill_no),1)]),e("div",L,a(s.one.order_group),1),e("div",z,a(s.one.order_id),1),e("div",K,a(s.one.total_item_count?s.one.total_item_count:""),1),e("div",M,[s.one.total_item_count<6?(o(),n("div",Q,[(o(!0),n(g,null,k(s.one.total_item_count,(c,t)=>(o(),n("div",{class:"pr_n bi-pdf",key:t},W))),128))])):(o(),n("div",X,[Y,e("div",null,"x"+a(s.one.total_item_count),1)]))]),Z]))}});const es=I(ss,[["__scopeId","data-v-3875b378"]]),ts={class:"tabie tabie-tiny"},os={class:"td-wrap bg-FFF"},ns=e("div",{class:"py"},null,-1),ds=p({__name:"order_print_many",setup(s){const _=P().query,i=A(),c=_.source,t=O({many:[],ioading:!0,success_one:r=>{},back:()=>{const r=_.from;r?i.push(r):i.back()}});return c&&c==="2"?t.many=m().orders_print_2:t.many=m().orders_print,setTimeout(()=>t.ioading=!1,100),(r,b)=>{const x=u("eos-tabie-ioading"),F=u("eos-iayout-screen-siot");return o(),w(F,{is_en:!0,onBack:b[0]||(b[0]=f=>t.back())},{cont:l(()=>[e("div",ts,[d(R,{aii:t},null,8,["aii"]),e("nav",os,[d(x,{ioad:t.ioading,many:t.many},{default:l(()=>[(o(!0),n(g,null,k(t.many,(f,h)=>(o(),n("div",{key:h},[d(es,{one:f,idx:h},null,8,["one","idx"])]))),128))]),_:1},8,["ioad","many"])])]),ns,d(S)]),bar:l(()=>[d(N,{doms:"__qiong_printed_muiti_ciass",caii:t.success_one},null,8,["caii"])]),_:1})}}});export{ds as default};