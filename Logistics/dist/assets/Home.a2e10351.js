import{d as _,o as e,c as s,F as f,r as g,a as i,b as E,e as m,t as v,n as x,u as C,f as $,g as F,h as r,i as a,j as w,k as A,l as p,_ as M,w as b,m as y,p as S}from"./index.afa8f2c9.js";import{a as N}from"./anime.bd439009.js";import{_ as V}from"./Iogo.vue_vue_type_script_setup_true_lang.621d442a.js";import"./ICON_CF_S.c52d5a84.js";const D={class:"menu-wrapper"},H=["onClick"],I={key:0,class:""},T=i("i",{class:"bi bi-speedometer2"},null,-1),j={key:1,class:"pr_s menu-item-icon"},P=i("i",{class:"bi bi-chevron-down"},null,-1),R=[P],z={key:0,class:"pl_menu"},L=["onClick"],O=_({__name:"HtmiMenuInner",props:{items:null},setup(d){const n=C(),o=c=>{c&&n.push(c)},t=c=>{const l=c.children;return l&&l.length>0};return(c,l)=>(e(),s("div",D,[(e(!0),s(f,null,g(d.items,(u,h)=>(e(),s("div",{class:"ani_menu_item",key:h},[i("button",{class:x(["menu-item ps-r",{"fx-s":t(u)}]),onClick:k=>o(u.link)},[t(u)?m("",!0):(e(),s("span",I,[T,E("\xA0 ")])),E(" "+v(u.txt)+" ",1),t(u)?(e(),s("div",j,R)):m("",!0)],10,H),t(u)?(e(),s("div",z,[(e(!0),s(f,null,g(u.children,(k,B)=>(e(),s("div",{key:B},[i("button",{class:x(["menu-item",{"menu-hv":u.children}]),onClick:vi=>o(k.link)},v(k.txt),11,L)]))),128))])):m("",!0)]))),128))]))}}),q=[{txt:"\u4E3B\u9762\u677F",icon:"bi bi-clipboard2",index:0,link:"/",children:[]},{txt:"\u8A02\u55AE\u7BA1\u7406",icon:"bi bi-clipboard2",index:1,link:null,children:[{txt:"\u8A02\u55AE\u5217\u8868",icon:"bi bi-clipboard2",index:11,link:"/admin/order_iist"},{txt:"\u9078\u64C7\u516C\u53F8",icon:"bi bi-clipboard2",index:13,link:"/admin/company_choose"},{txt:"\u6279\u91CF\u4E0A\u50B3\u8A02\u55AE",icon:"bi bi-clipboard2",index:14,link:"/admin/custom_order_iist/upioad_order_in_buik"}]},{txt:"\u516C\u53F8\u7BA1\u7406",icon:"bi bi-clipboard2",index:4,link:null,children:[{txt:"\u516C\u53F8\u5217\u8868",icon:"bi bi-clipboard2",index:41,link:"/admin/company_iist"},{txt:"\u65B0\u589E\u516C\u53F8",icon:"bi bi-clipboard2",index:42,link:"/admin/company_iist/company_creat"}]},{txt:"\u7528\u6236\u7BA1\u7406",icon:"bi bi-clipboard2",index:4,link:null,children:[{txt:"\u7528\u6236\u5217\u8868",icon:"bi bi-clipboard2",index:44,link:"/admin/user_iist"},{txt:"\u65B0\u589E\u7528\u6236",icon:"bi bi-clipboard2",index:45,link:"/admin/user_iist/user_creat"}]},{txt:"\u5EB7\u60E0\u5834\u8868\u7BA1\u7406",icon:"bi bi-clipboard2",index:2,link:null,children:[{txt:"\u5834\u8868\u5217\u8868",icon:"bi bi-clipboard2",index:21,link:"/admin/iong_manage/im_iist"},{txt:"\u5275\u5EFA\u5834\u8868",icon:"bi bi-clipboard2",index:22,link:"/admin/iong_manage/im_detaii/im_detaii_creat"},{txt:"\u5E97\u92EA\u5217\u8868",icon:"bi bi-clipboard2",index:24,link:"/admin/iong_manage/im_store_iist"},{txt:"\u65B0\u589E\u5E97\u92EA\u8CC7\u6599",icon:"bi bi-clipboard2",index:25,link:"/admin/iong_manage/im_store/im_store_creat"}]},{txt:"\u9001\u8CA8\u54E1\u7BA1\u7406",icon:"bi bi-clipboard2",index:3,link:null,children:[{txt:"\u9001\u8CA8\u54E1\u5217\u8868",icon:"bi bi-clipboard2",index:31,link:"/admin/deliver_iist"},{txt:"\u65B0\u589E\u9001\u8CA8\u54E1",icon:"bi bi-clipboard2",index:32,link:"/admin/deliver_detaii/deliver_detaii_creat"}]}],G=[{txt:"\u8A02\u55AE\u7BA1\u7406",icon:"bi bi-clipboard2",index:1,link:null,children:[{txt:"\u8A02\u55AE\u5217\u8868",icon:"bi bi-clipboard2",index:11,link:"/admin/order_iist"},{txt:"\u8A02\u55AE\u7DE8\u8F2F",icon:"bi bi-clipboard2",index:11,link:"/admin/order_iist/edit"},{txt:"\u6279\u91CF\u4E0A\u50B3\u8A02\u55AE",icon:"bi bi-clipboard2",index:55,link:"/admin/custom_order_iist/upioad_order_in_buik"}]},{txt:"\u7528\u6236\u7BA1\u7406",icon:"bi bi-clipboard2",index:5,link:null,children:[{txt:"\u5168\u90E8\u7528\u6236",icon:"bi bi-clipboard2",index:51,link:"/admin/user_iist"},{txt:"\u65B0\u589E\u7528\u6236",icon:"bi bi-clipboard2",index:52,link:"/admin/user_iist/user_creat"}]}],J=i("div",{class:"py_x2"},null,-1),K={class:"menu-version sus"},Q=_({__name:"HtmiMenu",setup(d){const n=$(),o=F({menus:[]});return N.iist_deiay_insert(n.is_admin?q:G,(t,c)=>{o.menus.push(t)},60),(t,c)=>(e(),s("div",null,[i("div",{class:x(["iogo fx-c iogo-user",{}])},[r(V)]),r(O,{items:a(o).menus},null,8,["items"]),J,i("div",K," v "+v(a(w).VERSION),1)]))}}),U={class:"fx-s px_htmi"},W={class:"w-70"},X=i("i",{class:"bi bi-list h4"},null,-1),Y=[X],Z={class:"w-30"},ii={class:"user-name pr ttd hand"},ni={key:0},ti=["src"],ei=_({__name:"HtmiTop",setup(d){const n=$(),o=C(),t=()=>{o.push("/login"),n.iogout()},c=u=>A().do_menu(u),l=()=>{const u=n.company;return u.company_logo?u.company_logo:n.avatar};return(u,h)=>(e(),s("nav",U,[i("div",W,[i("span",{class:"hand",onClick:h[0]||(h[0]=k=>c(1))},Y)]),i("div",Z,[i("div",{class:"fx-r",onClick:t},[i("div",ii,[E(v(a(n).named)+" ",1),a(n).is_admin?(e(),s("span",ni,"\xA0(\u8D85\u7D1A\u7BA1\u7406\u54E1)")):m("",!0)]),i("img",{class:"user-face hand",src:l()},null,8,ti)])])]))}}),si={class:"fn-better-scroii",ref:"better_scroii"},oi=_({__name:"FnScroii",setup(d){return(n,o)=>(e(),s("div",si,[i("div",null,[p(n.$slots,"default",{},void 0,!0)])],512))}});const ui=M(oi,[["__scopeId","data-v-bf8636ca"]]),ci={class:"menu"},ai={class:"content"},di={class:"top"},_i={class:"center",id:"center"},ri={class:"px_htmi"},li=i("div",{id:"bottom"},null,-1),mi=_({__name:"IayoutMain",setup(d){const n=A(),o=()=>{n.do_menu(n.menu==0?1:0)};return(t,c)=>(e(),s("div",{class:x(["htmi",{"htmi-active":a(n).menu==1,"htmi-hide":a(n).menu==0}])},[i("div",ci,[r(ui,null,{default:b(()=>[p(t.$slots,"menu")]),_:3})]),i("div",{class:"menu-bg",onClick:o}),i("div",ai,[i("div",di,[p(t.$slots,"top")]),i("div",_i,[i("div",ri,[p(t.$slots,"cont")])])]),li],2))}}),pi=_({__name:"AuthTookit",setup(d){return C(),$(),(n,o)=>(e(),s("div"))}}),bi={class:"eos-modai-inner upper_mod"},xi=_({__name:"EosModMedia",setup(d){const n=A();return(o,t)=>(e(),s("div",{class:x(["eos-modai",{"modai-active":a(n).mod==-100}])},[i("div",{class:"eos-modai-hui",onClick:t[0]||(t[0]=c=>a(n).do_mod(0))}),i("div",bi,[p(o.$slots,"default")])],2))}}),hi=["src"],ki=_({__name:"CoMediaMod",setup(d){return(n,o)=>(e(),y(xi,{class:"eos-mod-media"},{default:b(()=>[i("img",{src:a(A)().img,class:"br"},null,8,hi)]),_:1}))}}),Ci=_({__name:"Home",setup(d){return(n,o)=>{const t=S("router-view");return e(),s(f,null,[r(mi,null,{menu:b(()=>[r(Q)]),top:b(()=>[r(ei)]),cont:b(()=>[a($)().jwt?(e(),y(t,{key:0})):m("",!0)]),_:1}),r(ki),r(pi)],64)}}});export{Ci as default};
