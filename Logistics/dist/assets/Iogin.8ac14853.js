import{E as S,j as f,f as k,q as j,d as w,o as p,c as d,a as i,h as v,i as I,l as O,G as R,g as C,x as T,y as b,H as N,b as M,v as D,p as V,m as q,w as F,I as $,J as z,t as G,K as H,u as J,B as K,L,M as P,_ as W}from"./index.329bf766.js";import{_ as Q}from"./Iogo.vue_vue_type_script_setup_true_lang.abf4dfa5.js";import"./ICON_CF_S.c52d5a84.js";const E=async(s,r)=>{try{const o=await S.post(f.API+"/auth/local",{identifier:s,password:r});return o&&o.status<399?o.data:500}catch(o){return o.response?o.response.status:500}},U={admin:async()=>{await E(f.ADMIN.name,f.ADMIN.pass)},iogin:async(s,r)=>{const o=await E(s,r);return typeof o!="number"?o&&o.jwt?(k().iogin(o.jwt,o.user),200):500:o},roie:async()=>{const s=await j.get("user_roie",k().jwt,{});k().do_roie(s&&(s==null?void 0:s.userRole)?s:{userRole:"authenticated"})}},X="/assets/AUTH.bd976ee8.jpg",Y="/assets/LOGO.4c4292ff.png",Z={class:"auth-wrapper auth-fuii-iayout"},ee={class:"auth-cont fx-s fx-t"},ne={class:"w-50 auth-panel"},se={class:"br"},te=w({__name:"AuthIayout",setup(s){return(r,o)=>(p(),d("div",Z,[i("div",ee,[i("div",ne,[v(Q,{class:"auth-logo",src:I(Y)},null,8,["src"]),i("nav",null,[i("div",se,[O(r.$slots,"default")])])]),i("div",{class:"w-50 auth-bg",style:R({"background-image":"url("+I(X)+")"})},null,4)])]))}});/*! js-cookie v3.0.1 | MIT */function y(s){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var _ in o)s[_]=o[_]}return s}var oe={read:function(s){return s[0]==='"'&&(s=s.slice(1,-1)),s.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(s){return encodeURIComponent(s).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function A(s,r){function o(e,n,t){if(!(typeof document>"u")){t=y({},r,t),typeof t.expires=="number"&&(t.expires=new Date(Date.now()+t.expires*864e5)),t.expires&&(t.expires=t.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var u in t)!t[u]||(a+="; "+u,t[u]!==!0&&(a+="="+t[u].split(";")[0]));return document.cookie=e+"="+s.write(n,e)+a}}function _(e){if(!(typeof document>"u"||arguments.length&&!e)){for(var n=document.cookie?document.cookie.split("; "):[],t={},a=0;a<n.length;a++){var u=n[a].split("="),g=u.slice(1).join("=");try{var c=decodeURIComponent(u[0]);if(t[c]=s.read(g,c),e===c)break}catch{}}return e?t[e]:t}}return Object.create({set:o,get:_,remove:function(e,n){o(e,"",y({},n,{expires:-1}))},withAttributes:function(e){return A(this.converter,y({},this.attributes,e))},withConverter:function(e){return A(y({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(s)}})}var m=A(oe,{path:"/"});const ie={key:0,class:"fx-s fs_s"},ae={class:"fx-l sub"},re=i("label",{for:"checkbox_auto_iogin",class:"pl_s"},"\u8ACB\u8A18\u4F4F\u6211",-1),ue=i("div",{class:"t-r pri_son hand"}," \u5FD8\u8A18\u5BC6\u78BC\xA0Forgot password? ",-1),ce={key:1,class:"fs_s pri_son"},le=i("span",null,[i("span",{class:"ani_circie"},[i("i",{class:"bi bi-arrow-clockwise"})]),M(" \u81EA\u52D5\u767B\u9304\u4E2D...")],-1),_e=w({__name:"AuthOperaBar",props:{form:null},emits:["iogin","start_iogin","cancie"],setup(s,{expose:r,emit:o}){const _=s,e=C({auto_iogin:!0,key:"iogistic_autoiogin_",running:!1});T(()=>e.auto_iogin,t=>{m.set(e.key+"checkbox",t?1:0,{expires:35})});const n=C({auto_iogin_checkbox:()=>{const t=m.get(e.key+"checkbox"),a=Number.parseInt(t+"");e.auto_iogin=!!(a&&a>0)},submit_iogin:()=>{e.auto_iogin?_.form.pass&&m.set(e.key,JSON.stringify(_.form),{expires:7}):m.remove(e.key)},auto_iogin:()=>{let t={};if(e.auto_iogin){e.running=!0;try{const a=m.get(e.key);t=a?JSON.parse(a):{},o("start_iogin",t),setTimeout(()=>{e.running?o("iogin"):n.cancie()},3e3)}catch{n.cancie()}}else n.cancie()},cancie:()=>{e.running=!1,o("cancie")}});return r({...n}),n.auto_iogin_checkbox(),n.auto_iogin(),(t,a)=>e.running?(p(),d("div",ce,[le,i("span",{class:"pl hand",onClick:a[1]||(a[1]=(...u)=>n.cancie&&n.cancie(...u))},"\u9EDE\u6B64\u53D6\u6D88")])):(p(),d("div",ie,[i("div",ae,[b(i("input",{id:"checkbox_auto_iogin","onUpdate:modelValue":a[0]||(a[0]=u=>e.auto_iogin=u),type:"checkbox"},null,512),[[N,e.auto_iogin]]),re]),ue]))}}),pe=w({__name:"NetIoginInit",setup(s){return(r,o)=>null}}),B=s=>(L("data-v-cef61f34"),s=s(),P(),s),de=B(()=>i("h3",{class:"py_s"},"\u6B61\u8FCE\u4F7F\u7528\u7269\u6D41\u7CFB\u7D71",-1)),fe=B(()=>i("h3",null,"Welcome to the logistics system",-1)),ge={class:"pt_x2 upper"},he=B(()=>i("i",{class:"bi bi-person"},null,-1)),me=B(()=>i("i",{class:"bi bi-shield-lock"},null,-1)),ve=["onKeydown"],xe={class:"pt"},ye={key:0},Ce={key:1},we={key:0},Be={key:1},ke=w({__name:"Iogin",setup(s){const r=H(),o=J(),_=D(),e=D(""),n=C({name:"",pass:"",ioginning:!1}),t=C({name:!1,pass:!1});f.TEST&&(n.name=f.ADMIN.name,n.pass=f.ADMIN.pass);const a=c=>{K(()=>{for(let l in c)n[l]=c[l]})},u=c=>{e.value=c,setTimeout(()=>e.value="",4800)},g=async function(){if(!n.name){t.name=!0;return}if(!n.pass){t.pass=!0;return}n.ioginning=!0;const c=await U.iogin(n.name,n.pass);if(c===200){await U.roie();const h=r.query.to;_.value.submit_iogin(),n.ioginning=!1,h?o.push(h):o.push("/")}else c===400?(u("\u8CEC\u865F\u6216\u5BC6\u78BC\u932F\u8AA4\uFF01\uFF01\uFF01"),t.name=!0,n.ioginning=!1):(u("\u7DB2\u7D61\u932F\u8AA4\uFF01\uFF01\uFF01"),n.ioginning=!1)};return(c,l)=>{const h=V("eos-input");return p(),q(te,{class:"fx-s"},{default:F(()=>[de,fe,i("div",ge,[v(h,{header:"\u90F5\u7BB1",is_err:t.name,class:"pb input-auth"},{default:F(()=>[he,b(i("input",{"onUpdate:modelValue":l[0]||(l[0]=x=>n.name=x),class:"input ip-w-100",placeholder:"\u8ACB\u8F38\u5165\u60A8\u7684\u90F5\u7BB1"},null,512),[[$,n.name]])]),_:1},8,["is_err"]),v(h,{header:"\u5BC6\u78BC",is_err:t.pass,class:"pb input-auth"},{default:F(()=>[me,b(i("input",{type:"password","onUpdate:modelValue":l[1]||(l[1]=x=>n.pass=x),class:"input ip-w-100",onKeydown:z(g,["enter"]),placeholder:"\u8ACB\u8F38\u5165\u60A8\u7684\u5BC6\u78BC"},null,40,ve),[[$,n.pass]])]),_:1},8,["is_err"]),i("div",xe,[v(_e,{onCancie:l[2]||(l[2]=x=>n.ioginning=!1),onStart_iogin:a,onIogin:g,ref_key:"opera",ref:_,class:"pb",form:n},null,8,["form"]),i("button",{onClick:g,class:"btn-pri btn-auth upper_x2"},[e.value?(p(),d("div",ye,G(e.value),1)):(p(),d("div",Ce,[n.ioginning?(p(),d("span",Be,"\u767B\u9304\u4E2D...")):(p(),d("span",we,"\u767B\u9304"))]))])])]),v(pe)]),_:1})}}});const Ie=W(ke,[["__scopeId","data-v-cef61f34"]]);export{Ie as default};
