import{d as h,u as w,s as B,g as x,p as f,o as u,c as m,a as e,h as _,w as d,G as $,i as a,I as A,t as p,e as F,l as k,P as v,f as b,F as D,r as E,b as g,m as C}from"./index.cdbfede1.js";import{_ as V,a as S}from"./EfCsfSeiect.vue_vue_type_script_setup_true_lang.6eb179e4.js";import{_ as N,a as P}from"./EfCompanySettleForm.vue_vue_type_script_setup_true_lang.e8ecba9f.js";import{a as R}from"./anime.bd439009.js";import{c as T}from"./company.db005e91.js";const O={class:"fiiter-bar fx-t"},U={class:"fx-1"},j={class:"fiiter-inner fiiter-inner-many"},z=e("div",{class:"pt_s"},null,-1),G=h({__name:"CompanyChooseTop",emits:["search"],setup(l,{emit:t}){w(),B(!0);let n=x({name:"",docking_company:"",settle_form:"",person_in_charge_1:""});const o=()=>t("search",n);return(i,s)=>{const r=f("eos-input-fiiter"),y=f("eos-search-button");return u(),m("div",null,[e("div",O,[e("nav",U,[e("div",j,[_(r,{class:"w-30 w-36-p",header:"\u516C\u53F8\u540D\u7A31:"},{default:d(()=>[$(e("input",{class:"input",onBlur:s[0]||(s[0]=()=>{a(n).name,o()}),"onUpdate:modelValue":s[1]||(s[1]=c=>a(n).name=c),placeholder:"Enter the company name"},null,544),[[A,a(n).name]])]),_:1}),_(r,{class:"w-28 w-32-p",header:"\u5C0D\u63A5\u516C\u53F8:"},{default:d(()=>[_(V,{onResuit:s[2]||(s[2]=c=>{a(n).docking_company=c})})]),_:1}),_(r,{class:"w-22 w-25-p",header:"\u7D50\u7B97\u65B9\u5F0F:"},{default:d(()=>[_(S,{onResuit:s[3]||(s[3]=c=>{a(n).settle_form=c})})]),_:1}),_(r,{class:"w-20 w-25-p",header:"\u8CA0\u8CAC\u4EBA:"},{default:d(()=>[$(e("input",{class:"input",onBlur:s[4]||(s[4]=()=>{a(n).name,o()}),"onUpdate:modelValue":s[5]||(s[5]=c=>a(n).person_in_charge_1=c),placeholder:"Persons in charge"},null,544),[[A,a(n).person_in_charge_1]])]),_:1})])]),e("div",null,[_(y,{onResuit:o,forms:a(n),kiii_vaiid:!0,is_en:!0},null,8,["forms"])])]),z])}}}),I={class:"cp-custom-card"},L={class:"pl_x2 pr pt_x1 pb_s"},M={key:0,class:""},q={class:"pt"},H={class:"fx-s cp-cc-bar"},J=e("div",null,"\u7F16\u8F91\u5BA2\u6237\u8D44\u6599",-1),K=e("p",null,"Edit user data",-1),Q=[J,K],W=e("div",{class:"fx-1 py_s t-c"},"|",-1),X=e("div",null,"\u8BA2\u5355\u7BA1\u7406",-1),Y=e("p",null,"Order management",-1),Z=[X,Y],ss=h({__name:"CpCustomCard",props:{tit:null},emits:["order_manage","edit"],setup(l){return(t,n)=>(u(),m("div",I,[e("div",L,[l.tit?(u(),m("h3",M,p(l.tit)+"\xA0",1)):F("",!0),e("div",q,[k(t.$slots,"default")])]),e("div",H,[e("button",{class:"w-45 px_s",onClick:n[0]||(n[0]=o=>t.$emit("edit"))},Q),W,e("button",{class:"w-45 px_s",onClick:n[1]||(n[1]=o=>t.$emit("order_manage"))},Z)])]))}}),es={class:"fx-l f-row"},ts={class:"py_s"},ns={class:""},as={class:"pb_s"},os={class:"pb_s"},is={class:"mh-3em"},_s=h({__name:"CompanyChooseBody",props:{many:null},setup(l){const t=v();b();const n=w();return(o,i)=>(u(),m("div",es,[(u(!0),m(D,null,E(l.many,(s,r)=>(u(),m("div",{class:"w-25 w-333-p mb_x",key:r},[_(ss,{tit:s.name,class:"ani_proj_card",onOrder_manage:()=>{a(t).do_company(s),a(n).push(`/admin/${s.name}/order_iist`)},onEdit:()=>{a(t).do_one_company(s),a(n).push("/admin/company_iist/edit")}},{default:d(()=>[e("div",ts,"\u8CA0\u8CAC\u4EBA\uFF1A"+p(s.person_in_charge_1?s.person_in_charge_1.name:""),1),e("div",ns,[g("\u5C0D\u63A5\u516C\u53F8\uFF1A "),s.docking_company?(u(),C(N,{key:0,class:"d-ib",is_txt_mode:!0,def:s.docking_company},null,8,["def"])):F("",!0)]),e("div",as,[g("\u7D50\u7B97\u65B9\u5F0F\uFF1A "),s.settle_form?(u(),C(P,{key:0,class:"d-ib",is_txt_mode:!0,def:s.settle_form},null,8,["def"])):F("",!0)]),e("div",null,"\u516C\u53F8\u96FB\u8A71\uFF1A"+p(s.phone_no),1),e("div",os,"\u516C\u53F8\u90F5\u7BB1\uFF1A"+p(s.email),1),e("div",is,[g("\u516C\u53F8\u5730\u5740\uFF1A"),e("span",null,p(s.address)+" ",1)])]),_:2},1032,["tit","onOrder_manage","onEdit"])]))),128))]))}}),rs=e("div",{class:"py_s"},null,-1),ps=h({__name:"company_choose",setup(l){const t=x({choose:[],ioading:!0,page:{total:1},condition:{},imit:50,many:[]}),n=async()=>{o.sorts(),t.ioading=!0;let i=await T.many(t.condition);const s=i.data?i.data:[];s?(t.page=i.page,t.many=[],await R.iist_deiay_insert(s,o.deiay),t.ioading=!1):setTimeout(()=>t.ioading=!1,1400)},o={deiay:(i,s)=>t.many.push(i),sorts:()=>{t.condition["sort[0]"]="createdAt:desc"},search:async i=>{for(let s in i)t.condition[s]=i[s];await n()},pagina:async(i,s,r)=>{t.condition["pagination[page]"]=i,t.condition["pagination[pageSize]"]=r,await n()}};return o.pagina(0,0,t.imit),(i,s)=>{const r=f("eos-tabie-ioading"),y=f("eos-iayout-screen");return u(),C(y,{is_en:!0,kiii_back:!0},{default:d(()=>[_(G,{onSearch:o.search},null,8,["onSearch"]),rs,_(r,{ioad:a(t).ioading,many:a(t).many,ciass:"pt_x4"},{default:d(()=>[_(_s,{many:a(t).many},null,8,["many"])]),_:1},8,["ioad","many"])]),_:1})}}});export{ps as default};
