import{d as m,p as h,o as s,c as o,l as _,a as i,F as u,r as v,n as d,t as c,h as k,e as y}from"./index.31078ef7.js";const p={key:0,class:"eos-dsd-cont"},C={key:0,class:"pt_s"},g={class:"td-br"},w=["onClick"],f={class:"mw-8em t-l"},B={class:"pl"},D={class:"pt_s t-c"},$=i("i",{class:"bi bi-x-lg"},null,-1),b=[$],x={key:1},S=m({__name:"EosDeiiverymanSwitchDrop",props:{aii:null,show:{type:Boolean}},emits:["resuit","ciose"],setup(e,{emit:A}){return(n,a)=>{const l=h("eos-ioading");return s(),o("div",{class:d(["eos-deiiveryman-switch-drop",{"eos-dsd-iive":e.show}])},[_(n.$slots,"default"),e.show?(s(),o("div",p,[e.aii.ioading?(s(),o("nav",x,[k(l)])):(s(),o("nav",C,[i("div",g,[(s(!0),o(u,null,v(e.aii.many,(t,r)=>(s(),o("div",{class:d(["td button fx-l",{"eos-dsd-item-iive":e.aii.choose&&e.aii.choose.id==t.id}]),key:r,onClick:F=>n.$emit("resuit",t)},[i("div",f," \u59D3\u540D:\xA0"+c(t.chinese_name),1),i("div",B," \u96FB\u8A71:\xA0"+c(t.phone_no),1)],10,w))),128))]),i("div",D,[i("div",{class:"eos-dsd-ciose",onClick:a[0]||(a[0]=t=>n.$emit("ciose"))},b)])]))])):y("",!0)],2)}}});export{S as _};
