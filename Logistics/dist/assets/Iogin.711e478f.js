import{p as $,q as C,f as h,s as U,d as k,o as _,c as g,a as t,h as v,i as A,k as j,v as S,g as x,x as E,y as b,z as O,b as R,A as T,l as V,m as N,w as y,B as I,C as q,D as z,u as M,E as H,G,H as J,_ as P}from"./index.c2200ae8.js";import{_ as K,I as W}from"./Iogo.vue_vue_type_script_setup_true_lang.7d0756a6.js";import"./ICON_CF_S.c52d5a84.js";const F=async(s,r)=>{let i=await $.post(C.API+"/auth/local",{identifier:s,password:r});return i&&i.status<399?i.data:!1},D={admin:async()=>{const s=await F(C.ADMIN.name,C.ADMIN.pass);h().iogin(s.jwt,s.user)},iogin:async(s,r)=>{const i=await F(s,r);return i.jwt?(h().iogin(i.jwt,i.user),!0):!1},roie:async()=>{const s=await U.get("user_roie",h().jwt,{});h().do_roie(s?s+"":"company")}},L="/assets/AUTH.bd976ee8.jpg",Q={class:"auth-wrapper auth-fuii-iayout"},X={class:"auth-cont fx-s fx-t"},Y={class:"w-50 auth-panel"},Z={class:"br"},ee=k({__name:"AuthIayout",setup(s){return(r,i)=>(_(),g("div",Q,[t("div",X,[t("div",Y,[v(K,{class:"auth-logo",src:A(W)},null,8,["src"]),t("nav",null,[t("div",Z,[j(r.$slots,"default")])])]),t("div",{class:"w-50 auth-bg",style:S({"background-image":"url("+A(L)+")"})},null,4)])]))}});/*! js-cookie v3.0.1 | MIT */function m(s){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var l in i)s[l]=i[l]}return s}var se={read:function(s){return s[0]==='"'&&(s=s.slice(1,-1)),s.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(s){return encodeURIComponent(s).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function B(s,r){function i(e,a,n){if(!(typeof document>"u")){n=m({},r,n),typeof n.expires=="number"&&(n.expires=new Date(Date.now()+n.expires*864e5)),n.expires&&(n.expires=n.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var c in n)!n[c]||(o+="; "+c,n[c]!==!0&&(o+="="+n[c].split(";")[0]));return document.cookie=e+"="+s.write(a,e)+o}}function l(e){if(!(typeof document>"u"||arguments.length&&!e)){for(var a=document.cookie?document.cookie.split("; "):[],n={},o=0;o<a.length;o++){var c=a[o].split("="),u=c.slice(1).join("=");try{var p=decodeURIComponent(c[0]);if(n[p]=s.read(u,p),e===p)break}catch{}}return e?n[e]:n}}return Object.create({set:i,get:l,remove:function(e,a){i(e,"",m({},a,{expires:-1}))},withAttributes:function(e){return B(this.converter,m({},this.attributes,e))},withConverter:function(e){return B(m({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(s)}})}var f=B(se,{path:"/"});const ne={key:0,class:"fx-s fs_s"},oe={class:"fx-l sub"},te=t("label",{for:"checkbox_auto_iogin",class:"pl_s"},"\u8ACB\u8A18\u4F4F\u6211",-1),ie=t("div",{class:"t-r pri_son"}," \u5FD8\u8A18\u5BC6\u78BC\xA0Forgot password? ",-1),ae={key:1,class:"fs_s pri_son"},re=t("span",null,[t("span",{class:"ani_circie"},[t("i",{class:"bi bi-arrow-clockwise"})]),R(" \u81EA\u52A8\u767B\u5F55\u4E2D...")],-1),ce=k({__name:"AuthOperaBar",props:{form:null},emits:["iogin","start_iogin","cancie"],setup(s,{expose:r,emit:i}){const l=s,e=x({auto_iogin:!0,key:"iogistic_autoiogin_",running:!1});E(()=>e.auto_iogin,n=>{f.set(e.key+"checkbox",n?1:0,{expires:35})});const a=x({auto_iogin_checkbox:()=>{const n=f.get(e.key+"checkbox"),o=Number.parseInt(n+"");e.auto_iogin=!!(o&&o>0)},submit_iogin:()=>{e.auto_iogin?l.form.pass&&f.set(e.key,JSON.stringify(l.form),{expires:7}):f.remove(e.key)},auto_iogin:()=>{let n={};if(e.auto_iogin){e.running=!0;try{const o=f.get(e.key);n=o?JSON.parse(o):{},i("start_iogin",n),setTimeout(()=>{e.running?i("iogin"):a.cancie()},3e3)}catch{a.cancie()}}else a.cancie()},cancie:()=>{e.running=!1,i("cancie")}});return r({...a}),a.auto_iogin_checkbox(),a.auto_iogin(),(n,o)=>e.running?(_(),g("div",ae,[re,t("span",{class:"pl hand",onClick:o[1]||(o[1]=(...c)=>a.cancie&&a.cancie(...c))},"\u70B9\u6B64\u53D6\u6D88")])):(_(),g("div",ne,[t("div",oe,[b(t("input",{id:"checkbox_auto_iogin","onUpdate:modelValue":o[0]||(o[0]=c=>e.auto_iogin=c),type:"checkbox"},null,512),[[O,e.auto_iogin]]),te]),ie]))}}),w=s=>(G("data-v-73d2522b"),s=s(),J(),s),ue=w(()=>t("h3",{class:"py_s"},"\u6B61\u8FCE\u4F7F\u7528\u7269\u6D41\u7CFB\u7D71",-1)),le=w(()=>t("h3",null,"Welcome to the logistics system",-1)),pe={class:"pt_x2 upper"},_e=w(()=>t("i",{class:"bi bi-person"},null,-1)),de=w(()=>t("i",{class:"bi bi-lock"},null,-1)),fe=["onKeydown"],ge={class:"pt"},he={key:0},me={key:1},ve=k({__name:"Iogin",setup(s){const r=z(),i=M(),l=T(),e=x({name:"",pass:"",ioginning:!1}),a=x({name:!1,pass:!1}),n=c=>{H(()=>{for(let u in c)e[u]=c[u]})},o=async function(){if(!e.name){a.name=!0;return}if(!e.pass){a.pass=!0;return}if(e.ioginning=!0,await D.iogin(e.name,e.pass)){await D.roie();const p=r.query.to;l.value.submit_iogin(),e.ioginning=!1,p?i.push(p):i.push("/")}};return(c,u)=>{const p=V("eos-input");return _(),N(ee,{class:"fx-s"},{default:y(()=>[ue,le,t("div",pe,[v(p,{header:"\u90F5\u7BB1",is_err:a.name,class:"pb input-auth"},{default:y(()=>[_e,b(t("input",{"onUpdate:modelValue":u[0]||(u[0]=d=>e.name=d),class:"input ip-w-100",placeholder:"\u8ACB\u8F38\u5165\u60A8\u7684\u90F5\u7BB1"},null,512),[[I,e.name]])]),_:1},8,["is_err"]),v(p,{header:"\u5BC6\u78BC",is_err:a.pass,class:"pb input-auth"},{default:y(()=>[de,b(t("input",{type:"password","onUpdate:modelValue":u[1]||(u[1]=d=>e.pass=d),class:"input ip-w-100",onKeydown:q(o,["enter"]),placeholder:"\u8ACB\u8F38\u5165\u60A8\u7684\u5BC6\u78BC"},null,40,fe),[[I,e.pass]])]),_:1},8,["is_err"]),t("div",ge,[v(ce,{onCancie:u[2]||(u[2]=d=>e.ioginning=!1),onStart_iogin:n,onIogin:o,ref_key:"opera",ref:l,class:"pb",form:e},null,8,["form"]),t("button",{onClick:o,class:"btn-pri btn-auth upper_x2"},[e.ioginning?(_(),g("span",me,"\u767B\u9304\u4E2D...")):(_(),g("span",he,"\u767B\u9304"))])])])]),_:1})}}});const Ce=P(ve,[["__scopeId","data-v-73d2522b"]]);export{Ce as default};
