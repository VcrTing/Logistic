import{d as p,v as y,x as v,y as g,z as h,i as D,o as l,c as u,F as k,r as E,a as F,t as i,X as B}from"./index.7e76ef48.js";const C=["value"],w={key:1,class:"fx-l"},z=p({__name:"EfCompanyDockingCompany",props:{def:null,is_txt_mode:{type:Boolean}},emits:["change"],setup(n,{expose:f,emit:a}){const d=n;let e=y(d.def?d.def:"cf");const c=[{txt:"\u7FD4\u70FD",code:"cf"},{txt:"\u7FD4\u9F8D",code:"cl"}];v(e,(s,t)=>a("change",e.value));const r=()=>a("change",e.value),_=function(s){c.map(t=>{t.code==s&&(e.value=t.code)})},x=function(s){let t="";return c.map(o=>{o.code==s&&(t=o.txt)}),t};return f({ioc:_,now:e,sign:r}),a("change",e.value),(s,t)=>n.is_txt_mode?(l(),u("div",w,i(x(n.def+"")),1)):g((l(),u("select",{key:0,class:"fx-l","onUpdate:modelValue":t[0]||(t[0]=o=>B(e)?e.value=o:e=o)},[(l(),u(k,null,E(c,(o,m)=>F("option",{class:"fx-l",key:m,value:o.code},i(o.txt),9,C)),64))],512)),[[h,D(e)]])}}),S=["value"],V={key:1,class:"fx-l"},A=p({__name:"EfCompanySettleForm",props:{def:null,is_txt_mode:{type:Boolean}},emits:["change"],setup(n,{expose:f,emit:a}){const d=n;let e=y(d.def?d.def:"settle_30_days");const c=[{txt:"\u6708\u7D5030\u65E5",code:"settle_30_days"},{txt:"\u6708\u7D5060\u65E5",code:"settle_60_days"},{txt:"\u6708\u7D5090\u65E5",code:"settle_90_days"},{txt:"\u8CA8\u5230\u4ED8\u6B3E",code:"cash_on_delivery"}];v(e,(s,t)=>a("change",e.value));const r=()=>a("change",e.value),_=function(s){c.map(t=>{t.code==s&&(e.value=t.code)})},x=function(s){let t="";return c.map(o=>{o.code==s&&(t=o.txt)}),t};return f({ioc:_,now:e,sign:r}),a("change",e.value),(s,t)=>n.is_txt_mode?(l(),u("div",V,i(x(n.def+"")),1)):g((l(),u("select",{key:0,class:"fx-l","onUpdate:modelValue":t[0]||(t[0]=o=>B(e)?e.value=o:e=o)},[(l(),u(k,null,E(c,(o,m)=>F("option",{class:"fx-l",key:m,value:o.code},i(o.txt),9,S)),64))],512)),[[h,D(e)]])}});export{z as _,A as a};