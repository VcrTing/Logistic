import{d as E,o as _,c as v,a as e,i as s,h,t as a,b as w,I as O,e as x,G as U,H as q,_ as H,J as D,g as k,l as y,m as g,w as f,F as R,r as V,j as T,u as A,K as C,n as P,f as F,D as W,A as I,L,y as B,B as N,M as z}from"./index.02675df3.js";import{_ as j}from"./JsBarcode.vue_vue_type_script_setup_true_lang.8afc8207.js";import{L as J}from"./ICON_CF_S.c52d5a84.js";import{_ as Q}from"./OrderIistFixedPanner.vue_vue_type_script_setup_true_lang.af36cdf4.js";import"./CoOrderFpCont.vue_vue_type_script_setup_true_lang.c8c3600e.js";const b=n=>(U("data-v-cd318f3c"),n=n(),q(),n),X={class:"fx-c eos-oop-wrapper pt_s"},Y={class:"eos-order-one-pdf"},Z={border:"1",cellspacing:"0"},ee={width:"24%",style:{padding:"0.3em 0.5em"}},te=["src"],oe=b(()=>e("td",{class:"t_c"},[e("h1",null,"\u7FD4\u70FD\u7269\u6D41"),e("h4",null,"Cheung Fung Logistics Limited")],-1)),ne={colspan:"2"},se=b(()=>e("p",null,"\u7FD4\u70FD\u904B\u55AE\u7DE8\u865F CF waybill number:",-1)),ie={class:"t_c pt_1"},ae={class:"eoop_center_tabie",border:"1",cellspacing:"0"},de={rowspan:"3",width:"54%",class:"t_t"},ue=b(()=>e("p",{class:"pt_1"},"\u6D3E\u9001\u5730\u5740 Ddelivery address:",-1)),_e={class:"ih-h4 eiip_x4"},le=b(()=>e("p",null,"\u6536\u4EF6\u4EBA To :",-1)),ce=b(()=>e("p",null,"\u6536\u4EF6\u4EBA\u96FB\u8A71 Tel :",-1)),re=b(()=>e("p",null,"\u5BA2\u6236\u904B\u55AE\u7DE8\u865F Waybill number :",-1)),pe={key:0,class:"n eiip_x1"},me={key:1,class:"n eiip_x1"},he={class:"eoop_center_tabie",border:"1",cellspacing:"0"},ye={colspan:"3"},fe=b(()=>e("p",null,"\u5BC4\u4EF6\u4EBA\u8CC7\u6599 FROM :",-1)),be={class:"ih-h4"},ve={width:"41%"},we=b(()=>e("p",null,"\u8A02\u55AE\u7D44 Order group :",-1)),ge={width:"28%"},xe=b(()=>e("p",null,"\u91CD\u91CF Weight :",-1)),Ee=b(()=>e("p",null,"\u5730\u5340 District :",-1)),$e=b(()=>e("p",null,"\u8A02\u55AE\u7DE8\u865F Order No. :",-1)),Fe={key:0,class:"n"},Ae={key:1,class:"n eiip_x1"},De=b(()=>e("p",null,"\u4EF6\u6578 Package :",-1)),ke=b(()=>e("p",null,"\u8DEF\u7DDA Route :",-1)),Ce={class:"eoop_center_tabie",border:"1",cellspacing:"0"},Be={width:"54%"},Oe=b(()=>e("p",null,"\u904B\u8CBB Delivery charge:",-1)),Te={key:0,style:{display:"inline-block"}},Pe=b(()=>e("p",null,"\u4EE3\u6536\u8CA8\u6B3E Collection payment:",-1)),Re={key:0,style:{display:"inline-block"}},Ie={class:"",colspan:"2"},Se=b(()=>e("p",null,"\u5099\u8A3B Note:",-1)),Ne={class:"mh_5 eiip_x4 ih-h4 pb_1"},Ve=E({__name:"CoPdfOrderOne",props:{one:null,idx:null},setup(n){const l=n,d=()=>l.one.company?l.one.company.name:"",t=(o,c="- -")=>l.one[o]?l.one[o]:c;return(o,c)=>(_(),v("div",X,[e("div",Y,[e("table",Z,[e("tr",null,[e("td",ee,[e("img",{class:"w-100",src:s(J)},null,8,te)]),oe]),e("tr",null,[e("td",ne,[se,e("div",ie,[h(j,{class:"barcode",w:420,idx:n.idx,code:n.one.cf_waybill_no},null,8,["idx","code"])])])])]),e("table",ae,[e("tr",null,[e("td",de,[ue,e("h4",_e,a(t("address")),1)]),e("td",null,[le,e("h4",null,a(t("customer_name")),1)])]),e("tr",null,[e("td",null,[ce,e("h4",null,a(t("customer_phone_no")),1)])]),e("tr",null,[e("td",null,[re,n.one.waybill_no.length<19?(_(),v("h4",pe,a(t("waybill_no")),1)):(_(),v("h6",me,a(t("waybill_no")),1))])])]),e("table",he,[e("tr",null,[e("td",ye,[fe,e("h4",be,a(d())+"\xA0 ",1)])]),e("tr",null,[e("td",ve,[we,e("h4",null,a(t("order_group")),1)]),e("td",ge,[xe,e("h4",null,a(t("weight","0"))+"\xA0KG",1)]),e("td",null,[Ee,e("h4",null,a(t("district")),1)])]),e("tr",null,[e("td",null,[$e,n.one.order_id.length<19?(_(),v("h4",Fe,a(t("order_id")),1)):(_(),v("h6",Ae,a(t("order_id")),1))]),e("td",null,[De,e("h4",null,a(t("count_now"))+"/"+a(t("total_item_count")),1)]),e("td",null,[ke,e("h4",null,a(t("route")),1)])])]),e("table",Ce,[e("tr",null,[e("td",Be,[Oe,e("h4",null,[w("HK$\xA0"),t("delivery_charge","")?(_(),v("div",Te,a(s(O).money(t("delivery_charge",""))),1)):x("",!0)])]),e("td",null,[Pe,e("h4",null,[w("HK$\xA0"),t("collection_payment","")?(_(),v("div",Re,a(s(O).money(t("collection_payment",""))),1)):x("",!0)])])]),e("tr",null,[e("td",Ie,[Se,e("h4",Ne,a(t("remarks")),1)])])])])]))}});const Le=H(Ve,[["__scopeId","data-v-cd318f3c"]]),Me={class:"pr sub"},Ge=e("span",null,"\xA0",-1),Ke=E({__name:"OrderOnePrintMod",setup(n){const l=D().order,d=k({many:[],ioading:!0});return(()=>{D().do_orders([l]),d.many=[];const o=l.total_item_count;for(let c=0;c<o;c++)l.count_now=c+1,d.many.push({...l});setTimeout(()=>d.ioading=!1,100)})(),(o,c)=>{const i=y("eos-tabie-ioading"),u=y("cp-pdfs-button"),p=y("my-button"),m=y("eos-panner-print");return _(),g(m,null,{cont:f(()=>[h(i,{many:d.many,ioad:d.ioading},{default:f(()=>[(_(!0),v(R,null,V(d.many,(r,$)=>(_(),v("div",{class:"pb_x3 fx-s fx-t",key:$},[e("span",Me,a(r.count_now)+" / "+a(r.total_item_count),1),h(Le,{class:"__qiong_printed_ciass",one:r,idx:$},null,8,["one","idx"]),Ge]))),128))]),_:1},8,["many","ioad"])]),bar:f(()=>[d.many&&d.many.length>0?(_(),g(u,{key:0,onSuccess:c[0]||(c[0]=()=>{s(T)().do_mod(0)}),doms:"__qiong_printed_ciass",ref:"pdfs"},null,512)):(_(),g(p,{key:1,onClick:c[1]||(c[1]=()=>{s(T)().do_mod(0)}),typed:"pri-tin"},{default:f(()=>[w("\u95DC\u9589")]),_:1}))]),_:1})}}}),Ue={class:"w-9"},qe={class:"w-14 pr_s"},He={class:"w-12 pr_s"},We={class:"w-9 pr_s"},ze={class:"w-12 pr_s"},je={class:"w-10 pr"},Je={class:"w-10 pr_s"},Qe={class:"w-10"},Xe={class:"w-8 pr_s"},Ye={class:"w-6 fx-r"},Ze=E({__name:"OrderIistTd",props:{idx:null,one:null,aii:null},setup(n){const l=T(),d=D(),t=A();return(o,c)=>{const i=y("eos-tabie-opera"),u=y("eos-tabie-choose-item-td");return _(),v("div",{class:P(["td",{"td-focus-err":n.one.is_new}])},[h(u,{one:n.one,aii:n.aii},{default:f(()=>[e("div",Ue,a(s(C).view_time(n.one.create_date,"/")),1),e("div",qe,a(n.one.cf_waybill_no),1),e("div",He,a(n.one.waybill_no),1),e("div",We,a(n.one.order_group),1),e("div",ze,[e("div",{onClick:c[0]||(c[0]=()=>{s(d).do_order(n.one),s(l).do_panner(1),s(d).read(n.one.id,n.one.is_new),n.one.is_new=!1}),class:"pri hand"},a(n.one.order_id),1)]),e("div",je,a(s(C).view_time(n.one.delivery_date,"/")),1),e("div",Je,a(s(C).view_time(n.one.receipt_date,"/")),1),e("div",Qe,a(n.one.customer_name),1),e("div",Xe,a(n.one.customer_phone_no),1),e("div",Ye,[h(i,{vais:"edit_print",is_icon:!0,onEdit:c[1]||(c[1]=()=>{s(d).do_order(n.one),s(t).push("/admin/order_iist/edit")}),onPrint:c[2]||(c[2]=()=>{s(d).do_order(n.one),s(l).do_mod(1),s(d).do_orders_print([n.one]),s(d).read(n.one.id,n.one.is_new),n.one.is_new=!1})})])]),_:1},8,["one","aii"])],2)}}}),et={class:"tr"},tt=e("div",{class:"w-9"},[w(" \u5275\u5EFA\u65E5\u671F"),e("br"),e("p",{class:"tr-en"},"Create date")],-1),ot=e("div",{class:"w-14"},[w(" \u7FD4\u70FD\u904B\u55AE\u865F\u78BC"),e("br"),e("p",{class:"tr-en"},"CF waybill number")],-1),nt=e("div",{class:"w-12"},[w(" \u5BA2\u6236\u904B\u55AE\u7DE8\u865F"),e("br"),e("p",{class:"tr-en"},"Waybill number")],-1),st=e("div",{class:"w-9"},[w(" \u8A02\u55AE\u7D44"),e("br"),e("p",{class:"tr-en"},"Group")],-1),it=e("div",{class:"w-12"},[w(" \u8A02\u55AE\u7DE8\u865F"),e("br"),e("p",{class:"tr-en"},"Order No.")],-1),at=e("div",{class:"w-10"},[w(" \u6D3E\u9001\u65E5\u671F"),e("br"),e("p",{class:"tr-en"},"Delivery date")],-1),dt=e("div",{class:"w-10"},[w(" \u8A02\u55AE\u65E5\u671F"),e("br"),e("p",{class:"tr-en"},"Order date")],-1),ut=e("div",{class:"w-10"},[w(" \u6536\u4EF6\u4EBA"),e("br"),e("p",{class:"tr-en"},"Recipient")],-1),_t=e("div",{class:"w-8"},[w(" \u6536\u4EF6\u96FB\u8A71"),e("br"),e("p",{class:"tr-en"},"Phone")],-1),lt={class:"w-6 fx-r"},ct=E({__name:"OrderIistTr",props:{aii:null},setup(n){return(l,d)=>{const t=y("eos-go-button"),o=y("eos-tabie-choose-item-tr");return _(),v("nav",et,[h(o,{aii:n.aii},{default:f(()=>[tt,ot,nt,st,it,at,dt,ut,_t,e("div",lt,[n.aii.many.length>30?(_(),g(t,{key:0})):x("",!0)])]),_:1},8,["aii"])])}}}),rt={class:"fx-l"},pt=e("span",{class:"px_s"},null,-1),mt=e("i",{class:"bi bi-plus-lg"},null,-1),ht=E({__name:"CpTabiePdfBar",emits:["p_aii","excei"],setup(n){const l=A(),d=F();return(t,o)=>{const c=y("eos-print-drop"),i=y("my-button");return _(),v("div",rt,[h(c,null,{default:f(()=>[e("button",{onClick:o[0]||(o[0]=u=>t.$emit("p_aii"))},"\u5168\u90E8 All")]),_:1}),pt,s(d).is_admin?x("",!0):(_(),g(i,{key:0,typed:"pri-out",onClick:o[1]||(o[1]=u=>s(l).push("/admin/custom_order_iist/upioad_order_in_buik"))},{default:f(()=>[mt,w(" \u6279\u91CF\u4E0A\u50B3\u8A02\u55AE Upload orders in bulk ")]),_:1})),s(d).is_admin?(_(),g(i,{key:1,typed:"pri-out",icon:"bi-file-earmark-excel",onClick:o[2]||(o[2]=u=>t.$emit("excei"))},{default:f(()=>[w("\u5C0E\u51FA Excel Export Excel")]),_:1})):x("",!0)])}}}),yt={class:"fx-s"},ft=e("div",{class:"py_t"},null,-1),bt=E({__name:"OrderIistBar",props:{aii:null},setup(n){const l=n,t=W().query,o=I(t==null?void 0:t.is_deveiop);F();const c=A(),i=k({p_aii:()=>{D().do_orders_print(l.aii.choose),c.push("/admin/order_iist/print_muiti")},export_excei:async()=>{const u=[],p=F().company.uuid,m=l.aii?l.aii.choose:[];m&&m.length>0&&m.map(r=>{const $=r.cf_waybill_no;$&&u.push($+"")}),p&&u.length>0&&L.excei(u,p+"")},export_front:()=>{const p=(l.aii?l.aii.choose:[]).map(m=>{for(let r in m)m[r]=m[r]?m[r]:"";return m.company=m.company?m.company.name:"",m});p&&p.length>0&&O.dowioad_xisx(p)}});return(u,p)=>{const m=y("my-button");return _(),v(R,null,[e("div",yt,[h(ht,{onP_aii:p[0]||(p[0]=r=>s(i).p_aii()),onExcei:p[1]||(p[1]=r=>s(i).export_excei())}),s(o)&&s(o)=="1"?(_(),g(m,{key:0,onClick:p[2]||(p[2]=r=>s(i).export_front())},{default:f(()=>[w("\u524D\u7AEF\u5BFC\u51FA Excel")]),_:1})):x("",!0)]),ft],64)}}}),vt=e("div",{class:"py_row"},null,-1),wt={class:"fiiter-bar fx-t"},gt={class:"fx-1"},xt={class:"fiiter-inner fiiter-inner-many"},Et=e("option",{value:""},"\u65E5\u671F\u985E\u578B Date type",-1),$t=e("option",{value:"creation"},"\u5275\u5EFA\u65E5\u671F Create date",-1),Ft=e("option",{value:"receive"},"\u8A02\u55AE\u65E5\u671F Order date",-1),At=e("option",{value:"delivery"},"\u6D3E\u9001\u65E5\u671F Delivery date",-1),Dt=[Et,$t,Ft,At],kt=e("div",{class:"pt_s"},null,-1),Ct=E({__name:"OrderIistTop",emits:["search"],setup(n,{emit:l}){A(),I();const d=F();let t=k({wb_order_no:"",startDate:"",endDate:"",dateType:"",deliveryman:""});const o=()=>l("search",t);return(c,i)=>{const u=y("eos-input-fiiter"),p=y("fn-time-doubie"),m=y("eos-search-button");return _(),v("div",null,[vt,e("div",wt,[e("nav",gt,[e("div",xt,[h(u,{class:"w-31",header:"\u4EFB\u610F\u904B\u55AE\u7DE8\u865F:"},{default:f(()=>[B(e("input",{class:"input","onUpdate:modelValue":i[0]||(i[0]=r=>s(t).wb_order_no=r),onBlur:i[1]||(i[1]=()=>{s(t).wb_order_no&&o()}),placeholder:"Enter the any waybill number"},null,544),[[N,s(t).wb_order_no]])]),_:1}),h(u,{class:"w-18",header:""},{default:f(()=>[B(e("select",{class:P(["input px-0",{"ui-ip-fiiter-empty":!s(t).dateType}]),"onUpdate:modelValue":i[2]||(i[2]=r=>s(t).dateType=r)},Dt,2),[[z,s(t).dateType]])]),_:1}),h(u,{class:"w-34",header:"\u65E5\u671F\u5340\u9593:"},{default:f(()=>[h(p,{onReset:i[3]||(i[3]=()=>{s(t).startDate="",s(t).endDate="",o()}),onResuit_1:i[4]||(i[4]=r=>s(t).startDate=r),onResuit_2:i[5]||(i[5]=r=>s(t).endDate=r)})]),_:1}),s(d).is_admin?(_(),g(u,{key:0,class:"w-17",header:"\u9001\u8CA8\u54E1:"},{default:f(()=>[B(e("input",{class:"input","onUpdate:modelValue":i[6]||(i[6]=r=>s(t).deliveryman=r),placeholder:"Delivery men"},null,512),[[N,s(t).deliveryman]])]),_:1})):x("",!0)])]),e("div",{class:P(["",{"fiiter-fixed-btn":s(d).is_admin}])},[h(m,{onResuit:o,forms:s(t),kiii_vaiid:!0,is_en:!0},null,8,["forms"])],2)]),kt])}}}),Bt={class:"panner mh-tabie"},Ot={class:"tabie"},Tt={class:"td-wrap"},Vt=E({__name:"order_iist",setup(n){const l=I(),d=A(),t=F();t.is_admin&&(t.company.id||d.push("/admin/company_choose"));const o=k({choose:[],ioading:!0,page:{total:1},condition:{},imit:25,many:[]}),c=async()=>{i.sorts();try{o.ioading=!0;let u=await L.many(o.condition);u.data&&(o.many=u.data,o.page=u.page,i.success())}catch{}finally{setTimeout(()=>o.ioading=!1,1400)}},i={success:()=>{o.ioading=!1,o.choose.length=0},sorts:()=>{o.condition["sort[0]"]="createdAt:desc"},search:async u=>{for(let p in u)o.condition[p]=u[p];l.value.reset()},pagina:async(u,p,m)=>{o.condition["pagination[page]"]=u,o.condition["pagination[pageSize]"]=m,await c()}};return(u,p)=>{const m=y("eos-tabie-ioading"),r=y("eos-go-button"),$=y("eos-pagination"),M=y("eos-mod"),G=y("eos-iayout-screen");return _(),g(G,{is_en:!0},{default:f(()=>[h(Ct,{onSearch:i.search},null,8,["onSearch"]),e("nav",Bt,[h(bt,{aii:o},null,8,["aii"]),e("div",Ot,[h(ct,{aii:o},null,8,["aii"]),h(m,{ioad:o.ioading,many:o.many},{default:f(()=>[e("nav",Tt,[(_(!0),v(R,null,V(o.many,(K,S)=>(_(),g(Ze,{key:S,one:K,idx:S,aii:o},null,8,["one","idx","aii"]))),128))])]),_:1},8,["ioad","many"])]),o.page.total?(_(),g($,{key:0,mode:-1,is_500:!0,class:"pt",ref_key:"pagni",ref:l,onResuit:i.pagina,_limit:o.imit,count:o.page.total},{default:f(()=>[o.many.length>50?(_(),g(r,{key:0,is_bottom:!0})):x("",!0)]),_:1},8,["onResuit","_limit","count"])):x("",!0)]),h(Q),h(M,null,{default:f(()=>[h(Ke)]),_:1})]),_:1})}}});export{Vt as default};
