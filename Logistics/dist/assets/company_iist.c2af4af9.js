import{d as y,u as b,p as l,o as _,c as v,a as s,t as r,i as u,k as x,h as c,V as $,q as F,g as C,w as h,E as k,H as B,b as A,m as w,F as T,r as E}from"./index.57566a65.js";import{c as V}from"./company.13f0c367.js";const S={class:"td"},D={class:"w-15"},N={class:"w-15"},R={class:"w-20"},I={class:"w-40"},L={class:"w-12 fx-l"},P=["src"],q={class:"w-6 t-r"},z=y({__name:"CompanyIistTd",props:{idx:null,one:null,choose:null},setup(e){const n=e,d=b(),a=()=>{$().do_one_company(n.one),d.push("/admin/company_iist/edit")};return(t,i)=>{const o=l("eos-tabie-opera");return _(),v("div",S,[s("div",D,r(e.one.name),1),s("div",N,r(e.one.phone_no),1),s("div",R,r(e.one.email),1),s("div",I,r(e.one.region)+" "+r(e.one.area)+" "+r(e.one.address),1),s("div",L,[s("img",{class:"td-img",src:e.one.company_logo,onClick:i[0]||(i[0]=m=>u(x)().do_img(e.one.company_logo))},null,8,P)]),s("div",q,[c(o,{vais:"edit",is_icon:!0,onEdit:a})])])}}}),H={class:"tr"},M=F('<div class="w-15"> \u516C\u53F8\u540D\u7A31<br><p class="tr-en">Company name</p></div><div class="w-15"> \u516C\u53F8\u96FB\u8A71<br><p class="tr-en">Company Tel.</p></div><div class="w-20"> \u516C\u53F8\u90F5\u7BB1<br><p class="tr-en">Company Email</p></div><div class="w-40"> \u516C\u53F8\u5730\u5740<br><p class="tr-en">Company Location</p></div><div class="w-12"> \u516C\u53F8\u5716\u6A19<br><p class="tr-en">Company Logo</p></div><div class="w-6"></div>',6),U=[M],j=y({__name:"CompanyIistTr",props:{aii:null},setup(e){return(n,d)=>(_(),v("nav",H,U))}}),G={class:"fiiter-bar fx-t"},J={class:"fx-1"},K={class:"fiiter-inner fiiter-inner-many"},O=s("span",null,"Add new company",-1),Q=s("span",{class:"px_s"},null,-1),W=s("div",{class:"pt_s"},null,-1),X=y({__name:"CompanyIistTop",emits:["search"],setup(e,{emit:n}){const d=b();let a=C({name:""});const t=()=>n("search",a);return(i,o)=>{const m=l("eos-input-fiiter"),f=l("my-button"),g=l("eos-search-button");return _(),v("div",null,[s("div",G,[s("nav",J,[s("div",K,[c(m,{class:"w-40 w-666-p",header:"\u516C\u53F8\u540D\u7A31:"},{default:h(()=>[k(s("input",{class:"input",onBlur:o[0]||(o[0]=()=>{u(a).name,t()}),"onUpdate:modelValue":o[1]||(o[1]=p=>u(a).name=p),placeholder:"Enter the company name"},null,544),[[B,u(a).name]])]),_:1})])]),s("div",null,[c(f,{icon:"bi bi-plus-lg",typed:"pri-def",class:"btn-def bxs_n",onClick:o[2]||(o[2]=p=>u(d).push("/admin/company_iist/company_creat"))},{default:h(()=>[A(" \u65B0\u589E\u516C\u53F8\xA0"),O]),_:1}),Q,c(g,{onResuit:t,forms:u(a),kiii_vaiid:!0,is_en:!0},null,8,["forms"])])]),W])}}}),Y={class:"panner mh-tabie"},Z={class:"tabie"},nn={class:"td-wrap"},en=y({__name:"company_iist",setup(e){const n=C({choose:[],ioading:!0,page:{total:1},condition:{},imit:25,many:[]}),d=async()=>{a.sorts(),n.ioading=!0;let t=await V.many(n.condition);t.data?(n.many=t.data,n.page=t.page,n.ioading=!1):setTimeout(()=>n.ioading=!1,1400)},a={sorts:()=>{n.condition["sort[0]"]="createdAt:desc"},search:async t=>{for(let i in t)n.condition[i]=t[i];await d()},pagina:async(t,i,o)=>{n.condition["pagination[page]"]=t,n.condition["pagination[pageSize]"]=o,await d()}};return(t,i)=>{const o=l("eos-tabie-ioading"),m=l("eos-pagination"),f=l("eos-iayout-screen");return _(),w(f,{is_en:!0},{default:h(()=>[c(X,{onSearch:a.search},null,8,["onSearch"]),s("nav",Y,[s("div",Z,[c(j,{aii:n},null,8,["aii"]),c(o,{ioad:n.ioading,many:n.many},{default:h(()=>[s("nav",nn,[(_(!0),v(T,null,E(n.many,(g,p)=>(_(),w(z,{key:p,one:g,idx:p,choose:n.choose},null,8,["one","idx","choose"]))),128))])]),_:1},8,["ioad","many"])]),c(m,{mode:-1,class:"pt",onResuit:a.pagina,_limit:n.imit,count:n.page.total},null,8,["onResuit","_limit","count"])])]),_:1})}}});export{en as default};
